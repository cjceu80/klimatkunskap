import React, { useState } from 'react';
import { Offcanvas, Row, Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './style.css';
//import LoginPopup from './components/LoginPopup';
import HeaderNav from './components/HeaderNav';
import QuizFrame from './components/QuizFrame';
import { QuizContextProvider } from './utils/QuizContext';
import Login from './components/Login';
import QuizStart from './components/QuizStart';
import QuizEnd from './components/QuizEnd';

const QUIZ_BEGIN = "QuizBegin";
const QUIZ_END = "QuizEnd";
const QUIZ_ANSWERS = "QuizAnswers"

export default function App() {
  const [show, setShow] = useState(false);
  const [quizViewShown, setQuizViewShown] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleQuizViewShown = (val) => setQuizViewShown(val);

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
                {quizViewShown === QUIZ_BEGIN && <QuizStart />}
                {quizViewShown === QUIZ_END && <QuizEnd />}
                {quizViewShown === "" && <Outlet />}
              </Col>
            </Row>
          </Col>
          <QuizFrame login={handleShow} setQuizViewShown={handleQuizViewShown}/>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Login close={handleClose}/>
      </Offcanvas>
    </QuizContextProvider>
  );
}
