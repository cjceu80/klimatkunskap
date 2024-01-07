// Import necessary dependencies from React, Bootstrap, and image files
import React, { useState } from "react";
import backgroundImg from "../images/Bakgrund_cleanArtboard_1.jpg";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import leftImage from "../images/bakgrunder/fyrverkerier.png"; // left image path
import rightImage from "../images/bakgrunder/trad.png"; // right image path

// Define a constant for storing quiz data in sessionStorage
const QUIZ_DATA = "quizData";

// Define the functional component QuizEnd
export default function QuizEnd() {
  // Define the style for the result card
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
    borderRadius: "25px",
    marginBottom: "100px",
  };

  // Retrieve quiz data from sessionStorage
  const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));

  // Calculate the number of correct answers
  let correctCount = 0;
  quizData.answers.forEach(
    (val, index) => val == quizData.questions[index].correctIndex && correctCount++
  );

  // Define the email state using the useState hook
  const [email, setEmail] = useState("");

  // Event handler for changes to the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for sending results and email
  const handleSendResult = () => {
    // Add code to handle sending results and email (placeholder: log to console)
    console.log("Resultat skickat till:", email);
  };

  // JSX structure for rendering the QuizEnd component
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
          {/* Left column for result display */}
          <Col xs={9} className="text-center mb-4">
            <h1>Bra jobbat!</h1>
            <p>Du fick {correctCount} av {quizData.questions.length} rätt!</p>
          </Col>

          {/* Center column for email input and result submission */}
          <Col lg={5} xl={5}>
            <Col xs={3} className="text-center mb-4">
              <img src={leftImage} alt="Left Image" style={{ width: "100%" }} />
            </Col>
            <Card style={cardStyle} className="p-4">
              <Form.Group controlId="formEmail">
               <h4><Form.Label>Din e-post</Form.Label></h4>
                <Form.Control
                  type="email"
                  placeholder="Skriv din e-post här"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ marginBottom: "5px" }} 
                />
              </Form.Group>
              <Button
                variant="success"
                style={{ borderRadius: "50px" , marginBottom: "-15px"}}
                onClick={handleSendResult}
              >
                <h4>Skicka resultat</h4>
              </Button>
              <p></p>
            </Card>
          </Col>
          
          {/* Right column for additional information and login button */}
          <Col lg={5} xl={5}>
            <Col xs={2} className="text-center mb-4">
              <img src={rightImage} alt="Right Image" style={{ width: "100%", marginRight:"-600px",  }} />
            </Col>
            <Card className="p-4" style={cardStyle}>
              <h4>Om du loggar in kan du spara eller dela ditt resultat</h4>
              
              <Button
                variant="success"
                style={{ borderRadius: "50px", marginBottom: "-1px" }}
                onClick={()=>null} // Placeholder not causing issues
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