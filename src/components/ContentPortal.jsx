import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import fossiltImg from "../images/fossil-fuel 1.svg";
import meltingImg from "../images/melting 1.svg";
import waterlevelImg from "../images/water-level 1.svg";
import temperatureImg from "../images/temperature 1.svg";

import "../style.css";

export default function ContentPortal() {
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
    borderRadius: "25px",
  };
  const cardImageStyle = {
    height: "80px", // Set a specific height for the images
    objectFit: "contain", // Use "cover" to maintain aspect ratio and cover the entire container
  };

  return (
    <div className="bgContentPortal">
      <Container fluid className="h-100 pageContainer mb-5">
        <Row className="align-items-end justify-content-center">
          <Col
            xs={6}
            md={6}
            className="text-center mb-3 pt-5"
            style={{ marginLeft: "0px" }}
          >
            <a
              href="/kunskapsportalen/?kategori=fossilt"
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body className="h-100">
                  <div className="placeholder" />
                  <Card.Title className="mb-3">
                    <h1>Fossilt bränsle</h1>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={fossiltImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col
            xs={6}
            md={6}
            className="text-center mb-3 pt-5"
            style={{ marginRight: "0px" }}
          >
            <a
              href="/kunskapsportalen/?kategori=temperatur"
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body className="h-100">
                  <div className="placeholder" />
                  <Card.Title className="mb-3">
                    <h1>Temperaturförändring</h1>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={temperatureImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        <Row className="align-items-end justify-content-center">
          <Col
            xs={6}
            md={6}
            className="text-center mb-3 pt-3"
            style={{ marginLeft: "0px" }}
          >
            <a
              href="/kunskapsportalen/?kategori=havsniva"
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body className="h-100">
                  <div className="placeholder" />
                  <Card.Title className="mb-3">
                    <h1>Havsnivå</h1>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={waterlevelImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col
            xs={6}
            md={6}
            className="text-center mb-3 pt-3"
            style={{ marginRight: "0px" }}
          >
            <a
              href="/kunskapsportalen/?kategori=glaciar"
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body className="h-100">
                  <div className="placeholder" />
                  <Card.Title className="mb-3">
                    <h1>Glaciärer</h1>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={meltingImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
