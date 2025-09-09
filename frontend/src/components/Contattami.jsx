import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import "../css/Contattami.css";

function Contatti() {
  return (
    <div className="contattami-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Contattami</h2>
        <p className="text-center mb-5">
          Se desideri ricevere maggiori informazioni o fissare un appuntamento, utilizza i recapiti qui sotto oppure compila il modulo e inviami una mail.
        </p>

        <Row className="justify-content-center align-items-start">
          <Col xs={12} md={6} className="mb-4 mb-md-0 text-center text-md-start">
            <div className="contact-info">
              <p>
                <strong>Telefono:</strong>{" "}
                <a href="tel:+393518179264" className="link" aria-label="Chiama +39 351 817 9264">
                  <i className="bi bi-telephone-fill me-2"></i> +39 351 817 9264
                </a>
              </p>

              <div className="d-flex align-items-center mb-3">
                Studio :
                <a
                  href="https://www.google.com/maps/place/Via+del+Fontana,+18,+55012+Capannori+LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link me-2"
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>Via del Fontana 18, Capannori
                </a>
                <img src={"../src/assets/ufficio Capannori.jpg"} alt="Ufficio Capannori" className="office-image" />
              </div>

              <div className="d-flex align-items-center">
                Studio :
                <a
                  href="https://www.google.com/maps/place/Via+del+Commercio,+6,+55041+Le+Bocchette+LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link me-2"
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>Via del Commercio 6, Viareggio
                </a>
                <img src={"../src/assets/ufficio Bocchette.jpg"} alt="Ufficio Viareggio" className="office-image" />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il tuo nome" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Inserisci la tua email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessaggio">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Scrivi il tuo messaggio" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Invia
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contatti;
