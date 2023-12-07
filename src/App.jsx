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
          <Col sm={4} lg={3} className="border quiz_frame align-content-bottom justify-content-bottom" style={{ position:"relative", height: window.innerHeight, minWidth: "300px"}} >
          <Wave fill='#a9ebf4'
                paused={false}
                style={{ width: "95%", height: 200, position: "absolute", bottom: 0 }}
                options={{
                    container: "div",
                    height: 18,
                    amplitude: 15,
                    speed: 0.25,
                    points: 3
                }}
            />
            <Wave fill='#4cd6e7'
                paused={false}
                style={{ width: "95%", height: 200, position: "absolute", bottom: 0 }}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.25,
                    points: 3
                }}
            />
            <QuizFrame login={handleShow}/>
          </Col>  
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Login close={handleClose}/>
      </Offcanvas>
    </QuizContextProvider>
  );
}
