import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";
import InformationCard from './InformationCard';

import "../style.css"; 

export default function Information(props) {
  const pageData = props.data;

  return (
    <div style={{
      backgroundImage: `url(https://candow.eu/assets/klimat/bakgrunder/${pageData.id}.jpg)`,
      backgroundSize: "cover",
      
      position: "relative",

    }}>
    <Container fluid className="h-100 pageContainer mb-0 p-0" >
      <div className='contentPaddingTop'></div>
      <h1 className='text-center pt-3'>{pageData.name}</h1>
      <div className='contentPaddingTop'></div>
      {pageData.cards.map((card, index) => <InformationCard category={pageData.id} cardData={card} key={card.caption + index} index={index} />)}
    </Container>
    </div>
  );
}

Information.propTypes = {
  data: PropTypes.object.isRequired
}