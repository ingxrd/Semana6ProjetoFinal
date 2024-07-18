import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import imagem from '../assets/logo.jpg';
import './Menu.css';

function Menu() {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="md">
        <Container fluid className="header-container">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={imagem}
                width="80"
                height="80"
                className="d-inline-block align-top logo rounded-circle"
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="botoes">
              <Nav.Link as={Link} to="/login">Entrar</Nav.Link>
              <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
              <Nav.Link as={Link} to="/Livros">Livros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Menu;
