import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import backgroundImg from "./images/BakgrundHome.jpg";
import utforskaImg from "./images/ipad.png";
import interageraImg from "./images/kompass.png";
import spelaImg from "./images/gamepad.png";
import "../style.css"; // Import external CSS file
//import { Link, Element, animateScroll as scroll } from "react-scroll";


const Home = () => {
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.7)", // 0.7 represents 70% transparency
    borderRadius: "25px",
  };
  const cardImageStyle = {
    height: "100px", // Set a specific height for the images
    objectFit: "contain", // Use "cover" to maintain aspect ratio and cover the entire container
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
        <Container fluid className="h-100 pageContainer">
          <Row className="h-100 align-items-end justify-content-center">
            <Col xs={9} className="text-center mb-4">
              <h1>Välkommen till KlimatKunskap</h1>
              <p>
                En värld där varje klick är ett steg mot att bli en
                klimathjälte! Det här är inte bara en app, det är din biljett
                till en spännande resa genom klimatets mysterier.
              </p>
            </Col>

            
              <Col
                xs={4}
                className="text-center mb-3 "
                style={{ marginRight: "0px" }}
              >
                <a href="#section1" style={{ textDecoration: "none" }}>
                <Card className="h-100 w-100 custom-card" style={cardStyle}>
                  <Card.Body>
                    <div className="placeholder" />
                    <Card.Title className="mb-2"><h2>Utforska</h2></Card.Title>
                    <Card.Img
                      variant="top"
                      src={utforskaImg} //URL of the image
                      style={cardImageStyle}
                      className="mb-3"
                    />
                    <Card.Text>
                      
                        <b>Kolla runt i appen!</b>
                        <br /> Upptäck spännande fakta och berättelser om
                        klimatet.
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                </a>
              </Col>
            
            <Col
              xs={4}
              className="text-center  mb-3"
              style={{ marginRight: "0px" }}
            >
              <a href="#section2" style={{ textDecoration: "none" }}>
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body>
                  <div className="placeholder" />
                  <Card.Title className="mb-2"><h2>Interagera</h2></Card.Title>
                  <Card.Img
                    variant="top"
                    src={interageraImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                  <Card.Text>
                    
                      <b>Lär dig på ett kul sätt!</b>
                      <br /> Gör ditt lärande levande genom att utforska våra
                      interaktiva diagram.
                    
                  </Card.Text>
                </Card.Body>
              </Card></a>
            </Col>
            <Col xs={4} className="text-center  mb-3">
            <a href="#section3" style={{ textDecoration: "none" }}>
              <Card className="h-100 w-100 custom-card" style={cardStyle}>
                <Card.Body>
                  <div className="placeholder" />
                  <Card.Title className="mb-2"><h2>Spela och lär</h2></Card.Title>
                  <Card.Img
                    variant="top"
                    src={spelaImg} //URL of the image
                    style={cardImageStyle}
                    className="mb-3"
                  />
                  <Card.Text>
                    
                      <b>Såhär spelar du!</b>
                      <br /> Tryck på ‘Starta quiz’ för att börja. Försök att
                      välja rätt svar.
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
            </Col>
          </Row>
        </Container>

        {/* Section 1 
        <Element name="section1">*/}
          <Container id="section1" fluid className="py-5 bg-light custom-padding pageContainer">
            <Row>
              <Col>
                <h2>Utforska</h2>
                <br />
                <br />
                <h4>Öppna Hamburgarmenyn:</h4>
                <p>
                  Börja med att klicka på de tre strecken (☰) i övre hörnet av
                  skärmen. Detta öppnar vår hamburgarmeny, som är din
                  huvudnyckel till allt innehåll i appen.
                  
                </p><br />
                <h4>Välj en Kategori:</h4>
                <p>
                  I menyn ser du olika kategorier som 'Hav', 'Djur', 'Väder' och
                  många fler. Varje kategori är fylld med spännande fakta och
                  aktiviteter relaterade till just det ämnet.
                  
                </p><br />
                <h4>Hitta Rätt Fakta: </h4>
                <p>
                  När du har valt en kategori, får du en lista med olika ämnen
                  att utforska. Letar du efter något specifikt? Använd
                  sökfunktionen för att snabbt hitta det du behöver.
                  
                </p><br />
                <h4>Navigera till Rätt Sida: </h4>
                <p>
                  Klicka på det ämne du vill veta mer om. Det tar dig direkt
                  till en sida fylld med information, bilder, och ibland även
                  interaktiva spel och quiz.
                  
                </p><br />
                <h4>Utforska och Lär: </h4>
                <p>
                  På varje sida kan du dyka djupt in i ämnet. Läs texter, titta
                  på bilder och videor, och delta i interaktiva aktiviteter för
                  att lära dig mer.
                  
                </p><br />
                <h4>Tillbaka till Menyn: </h4>
                <p>
                  Vill du byta ämne? Inga problem! Klicka bara på hamburgarmenyn
                  igen för att återvända till kategorierna och välja något nytt
                  att utforska.
                </p>
              </Col>
            </Row>
          </Container>
        {/*</Element>*/}

         {/* Section 2 */}
        <Container id="section2" fluid className="py-5 custom-padding pageContainer">
          <Row>
            <Col>
              <h2>Interagera</h2>
              <br />
              <br />
              <h2>Upptäck Interaktiva Diagram:</h2>
              <p>
                I vår app hittar du massor av coola diagram som visar allt från
                globala temperaturförändringar till hur olika djurarter påverkas
                av klimatförändringar. Klicka, zooma och utforska för att se
                klimatdata på ett helt nytt sätt.
              </p>
              <h4>Delta i Quizet:</h4>
              <p>
                Är du redo för en utmaning? Vårt quiz testar dina kunskaper och
                hjälper dig att lära dig mer på ett roligt sätt. Varje fråga är
                en chans att visa vad du kan och att lära dig något nytt.
              </p>
              <h4>Ge Feedback:</h4>
              <p>
                Tycker du om en viss del av appen? Har du idéer på hur vi kan
                göra den ännu bättre? Din feedback är viktig för oss, så tveka
                inte att dela med dig av dina tankar.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Section 3 */}
        <Container id="section3" fluid className="py-5 bg-light custom-padding pageContainer">
          <Row>
            <Col>
              <h2>Spela och Lär</h2>
              <br />
              <br />
              <h4>Starta Quizet:</h4>
              <p>
                Klicka på 'Starta Quiz' för att sätta igång. Du är nu redo att
                testa dina kunskaper!
                <br />
              </p>
              <h4>Välj Rätt Svar:</h4>
              <p>
                För varje fråga, välj det svar du tror är rätt. Tänk noga – dina
                val påverkar inte bara din poäng, utan också vår virtuella
                värld!
                <br />
              </p>
              <h4>Vattennivån Ökar vid Fel Svar:</h4>
              <p>
                Om du svarar fel på en fråga, kommer du att se hur vattennivån i
                applikationen stiger. Detta är en visuell påminnelse om hur
                viktiga våra val är för miljön.
                <br />
              </p>
              <h4>Håll Koll på Mätaren:</h4>
              <p>
                En mätare visar hur högt vattennivån har stigit. Ditt mål är att
                hålla den så låg som möjligt genom att svara rätt på frågorna.
                <br />
              </p>
              <h4>Öka Svårighetsgraden:</h4>
              <p>
                Känner du dig extra modig? Testa att öka svårighetsgraden! När
                du gör det, går quizet på tid, vilket gör spelet ännu mer
                spännande.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Home;
