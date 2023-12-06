import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavDropdown, Dropdown } from 'react-bootstrap';
import { useUserAuth } from '../utils/UserAuthContext';



export default function LoginNav({login}) {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
  
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };
    return !user ? <NavDropdown.Item onClick={login}>Logga in</NavDropdown.Item> : 
    <>        
        <Dropdown.Header>Användarnamn</Dropdown.Header>
        <NavDropdown.Item onClick={()=>handleLogout()}>Logga ut</NavDropdown.Item>
    </>  ;
}


    