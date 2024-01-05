import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import backgroundImg from "../images/BakgrundHome.jpg";

const CARD_HEIGHT = 500;

export default function QuizStart() {
    const cardStyle = {
        background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
        borderRadius: "25px",
        height: "400px",
        
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
    <Container className="d-flex flex-column h-100" >
        <Row className="justify-content-md-center align-items-center h-100">
            <Col lg={5} xl={4} >
            <Card className="p-5" style={cardStyle}>
                <h2>Lätt som en plätt</h2>
                <p>Perfekt för dig som precis börjat lära dig om klimatförändringar och miljöfrågor</p>
                <br/>
                <h2>Spelregler</h2>
                <p>Antal frågor: 10 frågor</p>
                <p>Du har obegränsat med tid</p>
            </Card>
            </Col>
            <Col lg={5} xl={4} >
            <Card style={cardStyle} className="p-5">
                <h2>Svårt o hårt</h2>
                <p>För dig som känner dig säker på dina kunskaper och vill ha en utmaning</p>
                <br/><br/>
                <h2>Spelregler</h2>
                <p>Antal frågor: 15 frågor</p>
                <p>Du har 15 minuter på dig</p>
            </Card>
            </Col>
        </Row>
    </Container>
    </div>
    )
}