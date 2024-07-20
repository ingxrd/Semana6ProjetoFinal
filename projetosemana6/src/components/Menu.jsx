import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import imagem from '../assets/logo.jpg';
import './Menu.css';
import { useContext } from "react";
import { UsuarioContext } from '../contexts/UsuarioContext';
import { useNavigate } from "react-router-dom";
import { logOut } from "../firebase/auth";


function Menu() {
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

      
  function handlelogOut(){
    logOut().then (()=>{
        navigate("/login")
    })
}
  
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
              {usuario && <span className=''>Olá, {usuario.displayName}</span>}
              {!usuario && <Nav.Link as={Link} to="/login">📚 Entrar</Nav.Link>}
              {!usuario && <Nav.Link as={Link} to="/cadastro">✍🏻 Cadastro</Nav.Link>}
              {usuario && <Nav.Link as={Link} to="/livros"> 📕 Livros</Nav.Link>}
              <Nav.Link as={Link} to="/ajuda">❓ Ajuda</Nav.Link>
              {usuario && <Button variant = "dark" onClick={handlelogOut}>🔚 Sair</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Menu;
