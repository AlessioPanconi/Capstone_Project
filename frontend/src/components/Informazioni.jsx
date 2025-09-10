import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../App.css";
import "../css/Informazioni.css";

function Informazioni() {
  return (
    <div className="informazioni-page">
      <Container fluid className="py-5 min-vh-100 d-flex flex-column justify-content-center">
        <h2 className="text-center mb-4">Contattami</h2>
        <p className="text-center mb-5">
          Se desideri ricevere maggiori informazioni o capire dove mi trovo, utilizza i recapiti qui sotto oppure compila il modulo e inviami una mail.
        </p>

        <Row className="justify-content-center align-items-stretch g-4 flex-grow-1">
          <Col xs={12} md={6} lg={5} className="d-flex">
            <Card className="p-4 shadow-sm contact-card w-100 h-100">
              <h4 className="mb-3">I miei recapiti</h4>
              <p>
                <i className="bi bi-telephone-fill me-3"></i>
                <a href="tel:+393518179264" className="link">
                  +39 351 817 9264
                </a>
              </p>
              <p>
                <i className="bi bi-instagram me-3"></i>
                <a href="https://www.instagram.com/dott.ssapsico_giuliapanconi/" className="link">
                  Instagram
                </a>
              </p>

              <h5 className="mt-3">Dove trovarmi</h5>

              <div className="d-flex align-items-center mb-3">
                <a
                  href="https://www.google.com/maps/place/Via+del+Fontana,+18,+55012+Capannori+LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link me-2"
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Via del Fontana 18, Capannori
                </a>
                <img src={"../src/assets/ufficio Capannori.jpg"} alt="Ufficio Capannori" className="office-image" />
              </div>

              <div className="d-flex align-items-center">
                <a
                  href="https://www.google.com/maps/place/Via+del+Commercio,+6,+55041+Le+Bocchette+LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link me-2"
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Via del Commercio 6, Viareggio
                </a>
                <img src={"../src/assets/ufficio Bocchette.jpg"} alt="Ufficio Viareggio" className="office-image" />
              </div>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={5} className="d-flex">
            <Card className="p-4 shadow-sm contact-card w-100 h-100">
              <h4 className="mb-3">Scrivimi un messaggio</h4>
              <Form className="flex-grow-1 d-flex flex-column">
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Inserisci il tuo nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Inserisci la tua email" />
                </Form.Group>

                <Form.Group className="mb-5 flex-grow-1" controlId="formMessaggio">
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Scrivi il tuo messaggio" className="h-100" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-auto">
                  Invia
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Informazioni;
