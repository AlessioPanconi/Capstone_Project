import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import "../css/Contattami.css";

function Contatti() {
  return (
    <div className="contattami-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Contattami</h2>
        <p className="text-center mb-5">
          Se desideri ricevere maggiori informazioni o fissare un appuntamento, utilizza i recapiti qui sotto oppure compila il modulo.
        </p>

        <Row className="justify-content-center align-items-start">
          <Col xs={12} md={6} className="mb-4 mb-md-0 text-center text-md-start">
            <div className="contact-info">
              <p>
                <strong>Telefono:</strong> +39 333 1234567
              </p>
              <p>
                <strong>Studio:</strong> Via Roma 10, Pisa
              </p>
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
