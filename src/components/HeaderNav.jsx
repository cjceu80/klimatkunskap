import React, { useState } from "react";
import { Navbar, NavDropdown, Container, Col, Row } from "react-bootstrap";
import LoginNav from "./LoginNav";
import "../styles/nav.css";

// Hamburger icon Unicode character
const hamburgerIcon = "\u2630"; // Unicode character for three horizontal lines
const closeIcon = "\u2716"; // Unicode character for a multiplication sign (X)

// Dropdown menu for navigation
export default function HeaderNav({ login }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="fixed-top"
      style={{
        zIndex: "1000",
        width: "100%",
      }}
    >
      <Row className="justify-content-end">
        <Col sm={7} lg={8}></Col>
        <Col className="justify-content-end">
          <Navbar expand="lg">
            <button className={`custom-hamburger ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown} aria-controls="navbarScrollingDropdown">
              {isDropdownOpen ? closeIcon : hamburgerIcon}
            </button>
            <Navbar.Collapse id="navbarScrollingDropdown">
              {isDropdownOpen && (
                <div className="custom-dropdown card full-height-card">
                  <NavDropdown.Item href="/">Startsida</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kunskapsportalen">Kunskapsportalen</NavDropdown.Item>
                  <NavDropdown.Item href="/kunskapsportalen/?kategori=fossilt">Fossilt Bränsle</NavDropdown.Item>
                  <NavDropdown.Item href="/kunskapsportalen/?kategori=temperatur">Temperatur</NavDropdown.Item>
                  <NavDropdown.Item href="/kunskapsportalen/?kategori=havsniva">Havsnivå</NavDropdown.Item>
                  <NavDropdown.Item href="/kunskapsportalen/?kategori=/glaciar">Glaciär</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/omoss">Om oss</NavDropdown.Item>
                  <NavDropdown.Item href="/feedback">Ge feedback</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <LoginNav login={login} />
                </div>
              )}
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}
