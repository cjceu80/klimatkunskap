import React from 'react';
import { Container } from "react-bootstrap";
import InformationCard from './InformationCard';
import backgroundImg from "../images/BakgrundHome.jpg";

export default function Information(props) {
  const pageData = props.data;

  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      height: "110vh",
      position: "relative",

    }}>
    <Container fluid className="h-100 pageContainer mb-5 p-0" >
      <h1 className='text-center pt-3'>{pageData.name}</h1>
      {pageData.cards.map((card, index) => <InformationCard cardData={card} key={card.caption + index} index={index} />)}
    </Container>
    </div>
  );
}
