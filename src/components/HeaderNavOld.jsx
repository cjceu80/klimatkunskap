import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Col, Row } from "react-bootstrap";
import { useUserAuth } from "../utils/UserAuthContext";
import LoginNav from "./LoginNav";
import "../styles/nav.css";

//Dropdown menu for navigation
export default function HeaderNav({ login }) {
  return (
    <div
      expand="xl"
      className="fixed-top"
      style={{ 
        zIndex: "1000", 
        width: "inherit", 
        paddingRight: "2em", 
        right: "87px",
        top: "25px",
      }}
    >
      <Row className="justify-end justify-content-end">
        <Col sm={7} lg={8}></Col>
        <Col className="justify-end justify-content-end">
          <NavDropdown title="Meny" id="navbarScrollingDropdown">
            {/* Navigation items BEGIN */}

            <NavDropdown.Item href="/">Startsida</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/kunskapsportalen">
              Kunskapsportalen
            </NavDropdown.Item>
            <NavDropdown.Item href="/kunskapsportalen">
              Fossilt Bränsle
            </NavDropdown.Item>
            <NavDropdown.Item href="/kunskapsportalen">
              Temperatur
            </NavDropdown.Item>
            <NavDropdown.Item href="/kunskapsportalen">
              Havsnivå
            </NavDropdown.Item>
            <NavDropdown.Item href="/kunskapsportalen">
              Glaciär
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/omoss">Om oss</NavDropdown.Item>
            <NavDropdown.Item href="/feedback">Ge feedback</NavDropdown.Item>

            {/* Navigation items END */}

            <NavDropdown.Divider />
            <LoginNav login={login} />
          </NavDropdown>
        </Col>
      </Row>
    </div>
  );
}
