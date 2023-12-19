import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useUserAuth } from '../utils/UserAuthContext';
import LoginNav from './LoginNav';

//Dropdown menu for navigation
export default function HeaderNav({login}) {
  
  return (
    <Navbar expand="lg" className="">
      <Container fixed="top" className="justify-center justify-content-center">
        <NavDropdown
          title="Meny"
          id="navbarScrollingDropdown"
          className="position-absolute top-0 end-0"
        >
          {/* Navigation items BEGIN */}

          <NavDropdown.Item href="/">Startsida</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/kunskapsportalen">Kunskapsportalen</NavDropdown.Item>
          <NavDropdown.Item href="/kunskapsportalen">Fossilt Bränsle</NavDropdown.Item>
          <NavDropdown.Item href="/kunskapsportalen">Temperatur</NavDropdown.Item>
          <NavDropdown.Item href="/kunskapsportalen">Havsnivå</NavDropdown.Item>
          <NavDropdown.Item href="/kunskapsportalen">Glaciär</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/omoss">Om oss</NavDropdown.Item>
          <NavDropdown.Item href="/feedback">Ge feedback</NavDropdown.Item>
          
          {/* Navigation items END */}
          
          <NavDropdown.Divider />
          <LoginNav login={login} />

        </NavDropdown>
      </Container>
    </Navbar>
  );
}

