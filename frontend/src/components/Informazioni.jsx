import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../App.css";
import "../css/Informazioni.css";

function Informazioni() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!nome || !email || !messaggio) {
      setError("Per favore compila tutti i campi.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Inserisci un'email valida.");
      return;
    }

    setSuccess("Messaggio inviato correttamente!");

    setNome("");
    setEmail("");
    setMessaggio("");
  };

  return (
    <div className="informazioni-page">
      <Container fluid className="py-5 d-flex flex-column align-items-center">
        <h2 className="text-center mb-4">Informazioni di contatto</h2>
        <p className="text-center mb-5 px-3">
          Se desideri ricevere maggiori informazioni o capire dove mi trovo, utilizza i recapiti qui sotto oppure compila il modulo e inviami una mail.
        </p>

        <Row className="justify-content-center mb-4 w-100">
          <Col xs={12} md={10} lg={8} className="d-flex">
            <Card className="p-4 shadow-sm contact-card w-100">
              <h4 className="mb-3">I miei recapiti</h4>
              <p>
                <i className="bi bi-telephone-fill me-3"></i>
                <a href="tel:+393518179264" className="link">
                  +39 351 817 9264
                </a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:giuliapanconipsicologa@gmail.com" className="link">
                  giuliapanconipsicologa@gmail.com
                </a>
              </p>

              <h4 className="mb-3">I miei social</h4>
              <p>
                <i className="bi bi-instagram me-3"></i>
                <a href="https://www.instagram.com/dott.ssapsico_giuliapanconi/" className="link" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>

              <h4 className="mt-3">Dove trovarmi</h4>
              <div className="office-row">
                <div className="office-item">
                  <a
                    href="https://www.google.com/maps/place/Via+del+Fontana,+18,+55012+Capannori+LU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Via del Fontana 18, Capannori
                  </a>
                  <img src={"../src/assets/ufficio Capannori.jpg"} alt="Ufficio Capannori" className="office-image" />
                </div>

                <div className="office-item">
                  <a
                    href="https://www.google.com/maps/place/Via+del+Commercio,+6,+55041+Le+Bocchette+LU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Via del Commercio 6, Viareggio
                  </a>
                  <img src={"../src/assets/ufficio Bocchette.jpg"} alt="Ufficio Viareggio" className="office-image" />
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center w-100">
          <Col xs={12} md={10} lg={8} className="d-flex">
            <Card className="p-4 shadow-sm contact-card w-100">
              <h4 className="mb-3">Scrivimi un messaggio</h4>
              <Form onSubmit={handleSubmit} className="flex-grow-1 d-flex flex-column">
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Inserisci il tuo nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Inserisci la tua email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessaggio">
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Scrivi il tuo messaggio" value={messaggio} onChange={(e) => setMessaggio(e.target.value)} />
                </Form.Group>

                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}

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
