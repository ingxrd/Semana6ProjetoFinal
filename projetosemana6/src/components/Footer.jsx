import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagem from '../assets/logo.jpg';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/">
            <img
              src={imagem}
              width="80"
              height="80"
              className="d-inline-block align-top logo rounded-circle footer-logo"
              alt="Logo"
            />
          </Link>
          <div className="d-flex flex-column align-items-center text-center">
            <Navbar.Brand className="footer-brand">&copy; 2024 - 2025 Todos os direitos reservados</Navbar.Brand>
          </div>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/privacidade" className="footer-link">Política de Privacidade</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;

