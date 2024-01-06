import React, { useState } from "react";
import backgroundImg from "../images/Bakgrund_cleanArtboard_1.jpg";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import leftImage from "../images/bakgrunder/fyrverkerier.png"; // left image path
import rightImage from "../images/bakgrunder/trad.png"; // right image path

const QUIZ_DATA = "quizData";

export default function QuizEnd() {
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
    borderRadius: "25px",
    marginBottom: "100px",
  };

  const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));

  let correctCount = 0;
  quizData.answers.forEach(
    (val, index) => val == quizData.questions[index].correctIndex && correctCount++
  );

  const [email, setEmail] = useState(""); // Define the email state

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Handle changes to the email input
  };

  const handleSendResult = () => {
    // Add code to handle sending results and email
    console.log("Resultat skickat till:", email);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
      }}
    >
      <Container className="d-flex flex-column h-100">
        <Row className="justify-content-md-center align-items-center h-100">
          <Col xs={9} className="text-center mb-4">
            <h1>Bra jobbat!</h1>
            <p>Du fick {correctCount} av {quizData.questions.length} rätt!</p>
          </Col>
          <Col lg={5} xl={4}>
            <Col xs={3} className="text-center mb-4">
              <img src={leftImage} alt="Left Image" style={{ width: "100%" }} />
            </Col>
            <Card style={cardStyle} className="p-5">
              <Form.Group controlId="formEmail">
                <Form.Label>Din e-post</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Skriv din e-post här"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Button
                variant="success"
                style={{ borderRadius: "10px" }}
                onClick={handleSendResult}
              >
                <h4>Skicka resultat</h4>
              </Button>
              <p></p>
            </Card>
          </Col>
          <Col lg={5} xl={4}>
            <Col xs={3} className="text-center mb-4">
              <img src={rightImage} alt="Right Image" style={{ width: "100%",marginRight:"-400px" }} />
            </Col>
            <Card className="p-5" style={cardStyle}>
              <h4>Om du loggar in kan du spara eller dela ditt resultat</h4>
              <Button
                variant="success"
                style={{ borderRadius: "10px" }}
                onClick={QUIZ_DATA}
              >
                <h4>Logga in</h4>
              </Button>
              <p></p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}