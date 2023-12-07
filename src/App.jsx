import React, { useState } from 'react';
import { Offcanvas, Row, Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Wave from 'react-wavify';
import './style.css';
//import LoginPopup from './components/LoginPopup';
import HeaderNav from './components/HeaderNav';
import QuizFrame from './components/QuizFrame';
import { QuizContextProvider } from './utils/QuizContext';
import Login from './components/Login';
import { getQuestions, getUniques } from './utils/staticQuestions';

export default function App() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <QuizContextProvider>
      <Container fluid>
        <Row>
          <Col className='info_frame'>
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
          <QuizFrame login={handleShow}/>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Login close={handleClose}/>
      </Offcanvas>
    </QuizContextProvider>
  );
}
