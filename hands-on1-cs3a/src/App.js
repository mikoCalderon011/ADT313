import logo from './logo.svg';
import './App.css';
import './Styles/Name.css'
import './Styles/Section.css'
import './Styles/Description.css'
import UserInformation from './Components/UserInformation/UserInformation';
import Name from './Components/Name';
import Section from './Components/Section';
import Description from './Components/Description';
import { useState } from 'react';

function App() {
  const [userInformation, setUserInformation] = useState({
    firstName: "Miko",
    middleInitial: "B.",
    lastName: "Calderon",
    section: "BSCS 3A",
    description: "Student of Dr. Yanga College Foundation"
  })

  function updateName() {
    userInformation.firstName.match("Ru")? userInformation.firstName = "Miko" : userInformation.firstName = "Ru"
    setUserInformation( {...userInformation} );
  }

  const [moonPosition, setMoonPosition] = useState(false)

  return (
    <div className="App">
      <Name 
        fName={userInformation.firstName} 
        mInitial={userInformation.middleInitial} 
        lName={userInformation.lastName} 
      />
      <Section section={userInformation.section} />
      <Description description={userInformation.description} />
      <button type='button' onClick={updateName}>Click here</button>
      <div className='moon' style={{
        bottom: `${moonPosition ? "83dvh" : "0"}`,
        backgroundColor: `${moonPosition ? 'yellow' : 'white'}`
      }}></div>
      <button onClick={() => setMoonPosition(!moonPosition)}>Move the moon</button>
    </div>
  );
}

export default App;
