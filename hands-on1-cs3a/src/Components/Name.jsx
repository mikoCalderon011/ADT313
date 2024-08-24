export default function Name({ fName, mInitial, lName }) {
    return (
        <>
            <h1>
                <span className="fName">{fName} </span>
                <span className="mName">{mInitial} </span>
                <span className="lName">{lName} </span>
            </h1>
        </>
    )
}