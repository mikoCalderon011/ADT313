import axios from 'axios';
import './Register.css'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';

export const Register = () => {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
      firstName: '',
      middleName: '',
      lastName: '',
      contactNo: ''
   });
   const emailRef = useRef();
   const passwordRef = useRef();
   const fNameRef = useRef();
   const mNameRef = useRef();
   const lNameRef = useRef();
   const contactNoRef = useRef();
   const [isFieldsDirty, setIsFieldsDirty] = useState(false);
   const userInputDebounce = useDebounce(formData, 2000);
   const [debounceState, setDebounceState] = useState(false);
   const [status, setStatus] = useState('idle');

   const navigate = useNavigate();

   const validateForm = () => {
      for (let key in formData) {
         if (formData[key].trim() === '') {
            alert(`${key} cannot be blank`);

            switch (key) {
               case 'email':
                  emailRef.current.focus();
                  break;
               case 'password':
                  passwordRef.current.focus();
                  break;
               case 'fName':
                  fNameRef.current.focus();
                  break;
               case 'mName':
                  mNameRef.current.focus();
                  break;
               case 'lName':
                  lNameRef.current.focus();
                  break;
               case 'contactNo':
                  contactNoRef.current.focus();
                  break;
               default:
                  break;
            }

            return false;
         }
      }
      return true;
   };

   const registerUser = async (formData) => {
      try {
         const response = await axios.post('/user/register', formData, {
            headers: { 'Access-Control-Allow-Origin': '*' }
         });
         console.log(response);
         navigate('/');
         setStatus('idle');
      }
      catch (error) {
         console.error(error)
         setStatus('idle');;
      }
   };

   const handleOnChange = (event, type) => {
      setDebounceState(false);
      setIsFieldsDirty(true);

      switch (type) {
         case 'email':
            setFormData({ ...formData, email: event.target.value });
            break;
         case 'password':
            setFormData({ ...formData, password: event.target.value });
            break;
         case 'fName':
            setFormData({ ...formData, firstName: event.target.value });
            break;
         case 'mName':
            setFormData({ ...formData, middleName: event.target.value });
            break;
         case 'lName':
            setFormData({ ...formData, lastName: event.target.value });
            break;
         case 'contactNo':
            setFormData({ ...formData, contactNo: event.target.value });
            break;
         default:
            break;
      }
   }

   useEffect(() => {
      setDebounceState(true);
   }, [userInputDebounce]);

   return (
      <div className='main-container'>
         <form className='register-form--container'>
            <h1>Register</h1>
            <div className='text-input--container'>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>E-mail</span>
                     <input
                        type="text"
                        name='email'
                        ref={emailRef}
                        value={formData.email}
                        onChange={(e) => handleOnChange(e, 'email')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.email === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>Password</span>
                     <input
                        type="password"
                        name='password'
                        ref={passwordRef}
                        value={formData.password}
                        onChange={(e) => handleOnChange(e, 'password')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.password === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>First Name</span>
                     <input
                        type="text"
                        name='firstName'
                        ref={fNameRef}
                        value={formData.firstName}
                        onChange={(e) => handleOnChange(e, 'fName')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.firstName === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>Middle Name</span>
                     <input
                        type="text"
                        name='middleName'
                        ref={mNameRef}
                        value={formData.middleName}
                        onChange={(e) => handleOnChange(e, 'mName')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.middleName === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>Last Name</span>
                     <input
                        type="text"
                        name='lastName'
                        ref={lNameRef}
                        value={formData.lastName}
                        onChange={(e) => handleOnChange(e, 'lName')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.lastName === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <div className='text-input'>
                  <div className='text-input--group'>
                     <span>Contact No.</span>
                     <input
                        type="text"
                        name='contactNo'
                        ref={contactNoRef}
                        value={formData.contactNo}
                        onChange={(e) => handleOnChange(e, 'contactNo')}
                     />
                  </div>
                  {debounceState && isFieldsDirty && formData.contactNo === '' && (
                     <span className='errors'>This field is required</span>
                  )}
               </div>
               <button
                  type='button'
                  className='submit-btn'
                  disabled={status === 'loading'}
                  onClick={() => {
                     if (status === 'loading') {
                        return;
                     }
                     if (validateForm()) {
                        setStatus('loading');
                        registerUser(formData)
                     }
                     else {
                        setIsFieldsDirty(true)
                     }
                  }}
               >
                  {status === 'idle' ? 'Register' : 'Loading'}
               </button>
               <div className='login-container'>
                  <a href='/'>
                     <small>Go back to login</small>
                  </a>
               </div>
            </div>
         </form>
      </div>
   )
}
