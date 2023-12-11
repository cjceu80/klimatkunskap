import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CARD_HEIGHT = 500;

export default function QuizStart() {
    return (
    <Container className="d-flex flex-column h-100" >
        <Row className="justify-content-md-center align-items-center h-100">
            <Col lg={5} xl={4} >
            <Card style={{ height: CARD_HEIGHT}}>
                <h2>Lätt som en plätt</h2>
                <p>Reglerna lyder!</p>
            </Card>
            </Col>
            <Col lg={5} xl={4} >
            <Card style={{ height: CARD_HEIGHT}}>
                <h2>Svårt o hårt</h2>
                <p>Reglerna lyder!</p>
            </Card>
            </Col>
        </Row>
    </Container>
    )
}