import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/Servizi.css";

function Servizi() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const services = [
    {
      title: "Supporto psicologico",
      description: "Percorsi di ascolto e sostegno per affrontare momenti di difficoltà, stress e cambiamenti personali.",
    },
    {
      title: "Terapia individuale",
      description: "Un percorso personalizzato per lavorare su ansia, depressione, autostima e crescita personale.",
    },
    {
      title: "Terapia di coppia",
      description: "Spazio dedicato alla relazione, per migliorare la comunicazione e gestire i conflitti in coppia.",
    },
    {
      title: "Supporto genitorialità",
      description: "Consulenze per genitori che desiderano migliorare la relazione con i propri figli e gestire sfide educative.",
    },
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
    setTime("");
    setSelectedDate(new Date());
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      service: selectedService,
      date: selectedDate,
      time,
      ...formData,
    });

    // Mostra il messaggio di conferma nel modal
    setSuccessMessage("Prenotazione inviata con successo! ✅");

    // Chiude il modal dopo 2 secondi
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  return (
    <div className="servizi-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Servizi Offerti</h2>
        <p className="text-center mb-5">
          Scopri i percorsi di supporto psicologico disponibili e scegli quello più adatto alle tue esigenze. In futuro sarà possibile prenotare direttamente
          online.
        </p>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} xs={12} md={6} lg={3}>
              <Card className="service-card h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  <Button className="w-100 btn-primary mt-3" onClick={() => handleOpenModal(service.title)}>
                    Prenota
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione: {selectedService}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage && <div className="alert alert-success text-center mb-3">{successMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Seleziona una data</Form.Label>
              <Calendar onChange={setSelectedDate} value={selectedDate} minDate={new Date()} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Seleziona un orario</Form.Label>
              <Form.Select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Seleziona un orario</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Messaggio (opzionale)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Scrivi un messaggio"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </Form.Group>

            <Button type="submit" className="w-100 btn-primary">
              Invia prenotazione
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Servizi;
