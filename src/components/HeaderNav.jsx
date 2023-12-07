import React from 'react';
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
          <NavDropdown.Item href="/news">Nyheter</NavDropdown.Item>
          <NavDropdown.Item href="/stats">Stats</NavDropdown.Item>
          {/* Navigation items END */}
          
          <NavDropdown.Divider />
          <LoginNav login={login} />

        </NavDropdown>
      </Container>
    </Navbar>
  );
}

/*



<Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand href="/">Rubrik</Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/news">Nyheter</Nav.Link>
      <Nav.Link href="/stats">Stats</Nav.Link>
      <Nav.Link href="/login">Logga in</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <p>{user ? 'yay' : 'nay'}</p>
</Container>
);*/
