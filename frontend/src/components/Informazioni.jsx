import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "../App.css";
import "../css/Informazioni.css";

import ufficioCapannori from "../assets/ufficio Capannori.jpg";
import ufficioBocchette from "../assets/ufficio Bocchette.jpg";

function Informazioni() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });
  const [feedback, setFeedback] = useState({ error: "", success: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ error: "", success: "" });

    const { nome, email, messaggio } = formData;

    if (!nome || !email || !messaggio) {
      return setFeedback({ error: "Per favore compila tutti i campi." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(email)) {
      return setFeedback({ error: "Inserisci un'email valida." });
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errMsg = await response.text();
        return setFeedback({
          error: errMsg || "Errore nell'invio del messaggio.",
        });
      }

      setFeedback({ success: "Messaggio inviato correttamente! ✅" });
      setFormData({ nome: "", email: "", messaggio: "" });
    } catch (err) {
      console.error(err);
      setFeedback({ error: "Errore di connessione al server" });
    } finally {
      setLoading(false);
    }
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
                <a href="tel:+393518179264" className="link" aria-label="Telefono">
                  +39 351 817 9264
                </a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:giuliapanconipsicologa@gmail.com" className="link" aria-label="Email">
                  giuliapanconipsicologa@gmail.com
                </a>
              </p>

              <h4 className="mb-3">I miei social</h4>
              <p>
                <i className="bi bi-instagram me-3"></i>
                <a
                  href="https://www.instagram.com/dott.ssapsico_giuliapanconi/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
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
                  <img src={ufficioCapannori} alt="Ufficio Capannori" className="office-image" />
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
                  <img src={ufficioBocchette} alt="Ufficio Viareggio" className="office-image" />
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
                  <Form.Control type="text" name="nome" placeholder="Inserisci il tuo nome" value={formData.nome} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Inserisci la tua email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessaggio">
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="messaggio"
                    placeholder="Scrivi il tuo messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                  />
                </Form.Group>

                {feedback.error && <Alert variant="danger">{feedback.error}</Alert>}
                {feedback.success && <Alert variant="success">{feedback.success}</Alert>}

                <Button variant="primary" type="submit" className="w-100 mt-auto" disabled={loading}>
                  {loading ? "Invio in corso..." : "Invia"}
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
