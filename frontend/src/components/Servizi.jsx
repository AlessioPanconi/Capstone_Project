import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/Servizi.css";

function Servizi() {
  return (
    <div className="servizi-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Servizi Offerti</h2>
        <p className="text-center mb-5">
          Scopri i percorsi di supporto psicologico disponibili e scegli quello più adatto alle tue esigenze. In futuro sarà possibile prenotare direttamente
          online.
        </p>

        <Row className="g-4">
          <Col xs={12} md={6} lg={3}>
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title>Supporto psicologico</Card.Title>
                <Card.Text>Percorsi di ascolto e sostegno per affrontare momenti di difficoltà, stress e cambiamenti personali.</Card.Text>
                <Button className="w-100 btn-primary ">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title>Terapia individuale</Card.Title>
                <Card.Text>Un percorso personalizzato per lavorare su ansia, depressione, autostima e crescita personale.</Card.Text>
                <Button className="w-100 btn-primary ">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title>Terapia di coppia</Card.Title>
                <Card.Text>Spazio dedicato alla relazione, per migliorare la comunicazione e gestire i conflitti in coppia.</Card.Text>
                <Button className="w-100 btn-primary">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title>Sostegno alla genitorialità</Card.Title>
                <Card.Text>Consulenze per genitori che desiderano migliorare la relazione con i propri figli e gestire sfide educative.</Card.Text>
                <Button className="w-100 btn-primary ">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Servizi;
