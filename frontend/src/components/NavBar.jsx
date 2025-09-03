import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={"../src/assets/logo.png"} alt="Logo Dott.ssa Panconi" className="homepage-logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/servizi">
              Servizi
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
