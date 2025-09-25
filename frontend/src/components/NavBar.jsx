import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

// Import corretto del logo
import logo from "../assets/logo.png";

function NavBar({ fixed }) {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed={fixed}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo Dott.ssa Panconi" className="homepage-logo" />
        </Navbar.Brand>

        {/* Bottone toggle menu mobile */}
        <Navbar.Toggle aria-controls="main-navbar">
          <i className="bi bi-three-dots-vertical"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/servizi">
              Servizi
            </Nav.Link>
            <Nav.Link as={Link} to="/informazioni">
              Informazioni
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
