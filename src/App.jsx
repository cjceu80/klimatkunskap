import React, { useState } from 'react';
import { Offcanvas, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './style.css';
//import LoginPopup from './components/LoginPopup';
import HeaderNav from './components/HeaderNav';
import QuizFrame from './components/QuizFrame';
import { QuizContextProvider } from './utils/QuizContext';
import Login from './components/Login';

export default function App() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {console.log("hmm");setShow(true)};
  return (
    <QuizContextProvider>
      <Row>
        <Col className="m-3">
          <Row>
            <Col>
              <HeaderNav login={handleShow} />              
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="border quiz_frame" style={{height: window.innerHeight}} >
          <QuizFrame login={handleShow}/>
        </Col>
  
      </Row>
      <Offcanvas show={show} onHide={handleClose}>
        <Login close={handleClose}/>
      </Offcanvas>
    </QuizContextProvider>
  );
}
