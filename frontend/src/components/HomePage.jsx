import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "../css/HomePage.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      modules={[Scrollbar, Mousewheel]}
      mousewheel={true}
      scrollbar={{ draggable: true }}
      style={{ height: "100vh" }}
    >
      {/* Header */}
      <SwiperSlide className="homepage-header">
        <h2>Benvenuti nella pagina della Dott.ssa Panconi</h2>
        <p>Uno spazio sicuro per ascoltarti, comprenderti e accompagnarti verso il tuo benessere.</p>
      </SwiperSlide>

      {/* Chi sono */}
      <SwiperSlide className="homepage-section">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={7} className="text-center text-md-start">
            <h3>Chi sono?</h3>
            <p>
              Sono una psicologa clinica con una passione profonda per il supporto a giovani adulti, adolescenti e coppie. Credo nell'importanza di creare un
              ambiente accogliente e empatico, dove ogni persona possa sentirsi libera di esplorare sé stessa e crescere.
            </p>
            <p>
              Mi occupo di ascoltare, comprendere e accompagnare le persone verso il loro benessere, adattando il percorso alle esigenze individuali e alle
              sfide personali di ciascun paziente.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4 mt-md-0">
            <img src="src/assets/image1.jpg" alt="Dott.ssa Panconi" className="homepage-circle-image" />
          </Col>
        </Row>
      </SwiperSlide>

      {/* Percorso formativo */}
      <SwiperSlide className="homepage-section">
        <h3>Il mio percorso formativo</h3>
        <p>
          Mi sono laureata in Psicologia Clinica e della Salute presso l’Università di Pisa, ho conseguito un master sulle dipendenze, comprese quelle
          affettive, e un corso da operatrice di centro antiviolenza.
        </p>
        <p>Ho inoltre completato il corso 101 AT e sto frequentando il terzo anno di specializzazione in psicoterapia psicodinamica integrata.</p>
        <h3>Il mio approccio terapeutico</h3>
        <p>
          Nel mio lavoro unisco l’approccio psicodinamico con tecniche di altri orientamenti, modulando il percorso in base alle esigenze di ciascun paziente.
          Credo nell’importanza di creare uno spazio accogliente e sicuro dove poter esplorare e comprendere le proprie emozioni e dinamiche relazionali.
        </p>
      </SwiperSlide>

      {/* A chi mi rivolgo */}
      <SwiperSlide className="homepage-section">
        <h3>A chi mi rivolgo?</h3>
        <p>
          Mi occupo principalmente di giovani adulti, adolescenti e coppie, accompagnandoli nel riconoscimento e superamento delle difficoltà personali e
          relazionali. Offro uno spazio di ascolto empatico e professionale, volto a favorire la crescita e il benessere.
        </p>
        <h3>Un invito a iniziare il percorso</h3>
        <p>
          Se stai cercando un luogo in cui sentirti accolto, ascoltato e sostenuto, ti invito a contattarmi per una prima consulenza. Insieme potremo lavorare
          per trovare un equilibrio più autentico e duraturo.
        </p>
        <p>
          <strong>“Le cicatrici mostrano dove siamo stati, ma non dove dobbiamo andare.” — J.K. Rowling, Harry Potter e i Doni della Morte</strong>
        </p>
      </SwiperSlide>

      {/* Servizi principali */}
      <SwiperSlide className="homepage-services">
        <h3>Servizi principali</h3>
        <Row className="justify-content-center mt-4">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Terapia individuale</Card.Title>
                <Card.Text>Un percorso personalizzato per affrontare ansia e stress.</Card.Text>
                <Button as={Link} to="/services" variant="primary">
                  Dettagli
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Sostegno online</Card.Title>
                <Card.Text>Colloqui comodamente da casa tramite videochiamata.</Card.Text>
                <Button as={Link} to="/services" variant="primary">
                  Dettagli
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomePage;
