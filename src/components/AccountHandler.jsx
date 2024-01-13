import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AccountHandler(){
 const [signupShown, setSignupShown] = useState(false);

function handleSignupShown()
{
    tmpVal = signupShown
    setSignupShown(!tmpVal);
}
    
    return(
        <>
        {signupShown ? <Signup handleSignupShown={handleSignupShown} /> : <Login handleSignupShown={handleSignupShown}/>}
        </>
    )
    
}