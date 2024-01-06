import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavDropdown, Dropdown } from 'react-bootstrap';
import { useUserAuth } from '../utils/UserAuthContext';


//Login option item in dropdown menu
export default function LoginNav({login}) {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    //Hanle the logout functionality
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    //Reder Login or Logout depending on auth status.
    return !user ? <NavDropdown.Item onClick={login}>Logga in</NavDropdown.Item> : 
    <>        
        <Dropdown.Header>{user.email}</Dropdown.Header>
        <NavDropdown.Item onClick={()=>handleLogout()}>Logga ut</NavDropdown.Item>
    </>;
}


    