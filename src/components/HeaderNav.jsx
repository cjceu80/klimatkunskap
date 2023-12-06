import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useUserAuth } from '../utils/UserAuthContext';

export default function HeaderNav() {
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar expand="lg" className="">
      <Container fixed="top" className="justify-right justify-content-right">
        <NavDropdown
          title="Meny"
          id="navbarScrollingDropdown"
          className="position-absolute top-0 end-0"
        >
          <NavDropdown.Item href="/news">Nyheter</NavDropdown.Item>
          <NavDropdown.Item href="/stats">Stats</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/login">Logga in</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

/*

{!user ? (
 ) : (
            <NavDropdown.Item onClick={handleLogout()}>Logga ut</NavDropdown.Item>
          )}

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
