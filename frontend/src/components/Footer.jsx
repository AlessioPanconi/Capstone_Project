import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer py-3">
      <Container className="text-center text-white">
        <Row className="mb-2">
          <Col>
            <h5>Contatti</h5>
            <p className="mb-1">
              Email:{" "}
              <a href="mailto:info@example.com" className="footer-link">
                info@example.com
              </a>
            </p>
            <p className="mb-1">
              Telefono:{" "}
              <a href="tel:+39123456789" className="footer-link">
                +39 123 456 789
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h5>Seguici</h5>
            <a href="https://instagram.com/tuoaccount" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="small text-white-50">&copy; 2025 Dott.ssa Panconi - Tutti i diritti riservati</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
