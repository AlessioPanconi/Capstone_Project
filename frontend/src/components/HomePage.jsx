import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  return (
    <Container className="my-5">
      {/* Header */}
      <Row className="align-items-center text-center mb-5 homepage-header">
        <Col xs={12} sm={10} md={8} className="mx-auto">
          <h2>Benvenuti nella pagina della Dott.ssa Panconi</h2>
          <p>Uno spazio sicuro per ascoltarti, comprenderti e accompagnarti verso il tuo benessere.</p>
        </Col>
      </Row>

      {/* Chi sono */}
      <Row className="align-items-center mb-5 homepage-section">
        <Col xs={12} md={7} lg={8} className="text-start mx-auto">
          <h3>Chi sono?</h3>

          <Row className="d-flex align-items-center show-under-767">
            <Col>
              <p>
                Sono una psicologa clinica con una passione profonda per il supporto a giovani adulti, adolescenti e coppie. Credo nell'importanza di creare un
                ambiente accogliente e empatico, dove ogni persona possa sentirsi libera di esplorare sé stessa e crescere.
              </p>
            </Col>
            <Col xs="auto">
              <img src="src/assets/image1.jpg" alt="Dott.ssa Panconi" className="img-circle-small" />
            </Col>
          </Row>

          <p className="hide-under-767">
            Sono una psicologa clinica con una passione profonda per il supporto a giovani adulti, adolescenti e coppie. Credo nell'importanza di creare un
            ambiente accogliente e empatico, dove ogni persona possa sentirsi libera di esplorare sé stessa e crescere.
          </p>

          <h3>Il mio percorso formativo</h3>
          <p>
            Mi sono laureata in Psicologia Clinica e della Salute presso l’Università di Pisa, ho conseguito un master sulle dipendenze, comprese quelle
            affettive, e un corso da operatrice di centro antiviolenza. Ho inoltre completato il corso 101 AT e sto frequentando il terzo anno di
            specializzazione in psicoterapia psicodinamica integrata.
          </p>
        </Col>

        <Col xs={12} md={5} lg={4} className="d-flex justify-content-center mt-4 mt-md-0 hide-under-767">
          <img src="src/assets/image.jpg" alt="Dott.ssa Panconi" className="img-fluid rounded homepage-image" />
        </Col>
      </Row>

      {/* Approccio terapeutico */}
      <Row className="align-items-center mb-5 homepage-section">
        <Col xs={12} md={10} lg={8} className="text-start mx-auto">
          <h3>Il mio approccio terapeutico</h3>
          <p>
            Nel mio lavoro unisco l’approccio psicodinamico con tecniche di altri orientamenti, modulando il percorso in base alle esigenze di ciascun paziente.
            Credo nell’importanza di creare uno spazio accogliente e sicuro dove poter esplorare e comprendere le proprie emozioni e dinamiche relazionali.
          </p>

          <h3>A chi mi rivolgo</h3>
          <p>
            Mi occupo principalmente di giovani adulti, adolescenti e coppie, accompagnandoli nel riconoscimento e superamento delle difficoltà personali e
            relazionali. Offro uno spazio di ascolto empatico e professionale, volto a favorire la crescita e il benessere.
          </p>
        </Col>
      </Row>

      {/* Servizi principali */}
      <Row className="mb-5 text-center justify-content-center homepage-services">
        <h2 className="mb-4 w-100">Servizi principali</h2>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="p-3 shadow-sm h-100 card">
            <Card.Body>
              <Card.Title className="card-title">Terapia individuale</Card.Title>
              <Card.Text className="card-text">Un percorso personalizzato per affrontare ansia e stress.</Card.Text>
              <Button as={Link} to="/services" variant="primary" className="btn-primary">
                Dettagli
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="p-3 shadow-sm h-100 card">
            <Card.Body>
              <Card.Title className="card-title">Sostegno online</Card.Title>
              <Card.Text className="card-text">Colloqui comodamente da casa tramite videochiamata.</Card.Text>
              <Button as={Link} to="/services" variant="primary" className="btn-primary">
                Dettagli
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
