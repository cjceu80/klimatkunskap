import React, { useState } from "react";
import { Offcanvas, Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./style.css";
import logoImg from "./images/logga7.png";

import HeaderNav from "./components/HeaderNav";
import QuizFrame from "./components/quiz/QuizFrame";
import Login from "./components/Login";
import QuizStart from "./components/QuizStart";
import QuizEnd from "./components/QuizEnd";

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus";

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running";

export default function App() {
  const [show, setShow] = useState(false);
  const [quizViewShown, setQuizViewShown] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleQuizViewShown = (val) => setQuizViewShown(val);

  return (
    <div>
      <img
        src={logoImg}
        alt="Global Logo"
        style={{
          height: "150px",
          width: "auto",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      />


        <HeaderNav style={{ position: "fixed" }} login={handleShow} />
        <QuizFrame login={handleShow} setQuizViewShown={handleQuizViewShown} />
        <Container fluid>
          <Row>
            <Col
              className="info_frame"
              xs={7}
              sm={8}
              lg={9}
              style={{ position: "relative" }}
            >
              {quizViewShown === QUIZ_STATUS_BEGIN && <QuizStart />}
              {quizViewShown === QUIZ_STATUS_END && <QuizEnd />}
              {(quizViewShown === "" ||
                quizViewShown === QUIZ_STATUS_RUNNING) && <Outlet />}
            </Col>
          </Row>
        </Container>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton />
          <Login close={handleClose} />
        </Offcanvas>

    </div>
  );
}
