// Import necessary dependencies from React, Bootstrap, and image files
import { useState } from "react";
import backgroundImg from "../images/Bakgrund_cleanArtboard_1.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Login from "./Login";
import leftImage from "../images/bakgrunder/fyrverkerier.png"; // left image path
import rightImage from "../images/bakgrunder/trad.png"; // right image path
import { useUserAuth } from "../utils/UserAuthContext";

// Define a constant for storing quiz data in sessionStorage
const QUIZ_DATA = "quizData";

const QUIZ_STATUS = "quizStatus"

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

  // Toggles login or submit
  const [loginActive, setLoginActive] = useState(false)
  const { user } = useUserAuth();

// Send result MailTo handeling
  const Mailto = ({ subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <Button className="button" href={`mailto:${''}${params}`} style={{ borderRadius: "50px", marginBottom: "-15px" }}>{children}</Button>;
  };

  const sendCorrect = `Jag fick ${correctCount} rätt av ${quizData.questions.length} möjliga.`;


  function toggleLogin()
{
  const oldState = loginActive;
  setLoginActive(!oldState);
}



  sessionStorage.setItem(QUIZ_STATUS, "")



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
            <h4>Vill du mejla ditt resultat?</h4>
              <Mailto email="" subject="Här är mina resultat i KlimatKunskap" body={sendCorrect}>
                Mejla resultat!
              </Mailto>
              <p></p><p></p>
            </Card>
          </Col>
          
          {/* Right column for additional information and login button */}
          <Col lg={5} xl={5}>
            <Col xs={2} className="text-center mb-4">
              {(!loginActive || user) &&<img src={rightImage} alt="Right Image" style={{ width: "100%", marginRight:"-600px",  }} />}
            </Col>
            {!loginActive ?
            
            <Card className="p-4" style={cardStyle}>
              <h4>Logga in f;r att spara ditt resultat</h4>
              
              <Button
              className="button"
                variant="success"
                style={{ borderRadius: "50px", marginBottom: "-1px" }}
                onClick={()=>toggleLogin()} // Placeholder not causing issues
              >
               <h4>Logga in</h4>
              </Button>
              <p></p>
            </Card> :
            
            (!user ?
              <Card className=" top-0 end-0 position-relative" style={cardStyle}><Login /></Card>
              :
              <Card className="p-4" style={cardStyle}>
                <h3>Du är nu inloggad som {user.email}</h3>
                <p>Vill du registrera in ditt result?</p>
 
                <Button
                className="button"
                variant="success"
                style={{ borderRadius: "50px" , marginBottom: "-15px"}}
                onClick={() => {} }
              >
                <h4>Registrera resultat</h4>
              </Button>
              </Card>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}