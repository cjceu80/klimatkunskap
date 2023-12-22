import React from "react";
import backgroundImg from "./images/Bakgrund_cleanArtboard_1.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

const QUIZ_DATA = "quizData";


export default function QuizEnd() {
    const cardStyle = {
        background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
        borderRadius: "25px",
        marginBottom: "100px",
      };

      const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));

      let correctCount = 0;
      quizData.answers.forEach((val, index)=> val == quizData.questions[index].correctIndex && correctCount++);

    return (
        <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
        }}
      >
      <Container className="d-flex flex-column h-100" >
          <Row className="justify-content-md-center align-items-center h-100">
          <Col xs={9} className="text-center mb-4">
            <h1>Bra jobbat!</h1>
            <p>
              Du fick {correctCount} av {quizData.questions.length} rätt!
            </p>
          </Col>
              <Col lg={5} xl={4} >
              <Card style={cardStyle}className="p-5">
                  <h2>Skicka resultat</h2>
                  <p></p>
              </Card>
              </Col>
              <Col lg={5} xl={4} >
              <Card className="p-5" style={cardStyle}>
                  <h2>Logga in</h2>
                  <p></p>
              </Card>
              </Col>
          </Row>
      </Container>
      </div>
    )
}