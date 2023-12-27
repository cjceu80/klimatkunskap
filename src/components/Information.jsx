import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container } from "react-bootstrap";
import InformationCard from './InformationCard';
import backgroundImg from "../images/BakgrundHome.jpg";

export default function Information(props) {
  const loaderData = useLoaderData();
  const pageData = props.data;

  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      height: "110vh",
      position: "relative",

    }}>
    <Container fluid className="h-100 pageContainer mb-5" >
      <h1>{pageData.name}</h1>
      {pageData.cards.map((card, index) => <InformationCard cardData={card} key={card.caption + index} index={index} />)}
    </Container>
    </div>
  );
}
