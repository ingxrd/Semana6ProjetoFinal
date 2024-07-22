import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imagem from '../assets/logo.jpg';
import './Menu.css';
import { UsuarioContext } from '../contexts/UsuarioContext';
import { useNavigate } from "react-router-dom";
import { logOut } from "../firebase/auth";

function Menu() {
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  function handlelogOut() {
    logOut().then(() => {
      navigate("/login");
    });
  }

  return (
    <header>
      <div className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src={imagem}
              width="80"
              height="80"
              className="logo rounded-circle"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="title-container">
          <h1 className="header-title">Biblioteca Pessoal</h1>
        </div>
        <div className="botoes-container">
          <nav className="botoes">
            {usuario && <span className=''>Olá, {usuario.displayName}</span>}
            {!usuario && <Link to="/login" className="nav-link">📚 Entrar</Link>}
            {!usuario && <Link to="/cadastro" className="nav-link">✍🏻 Cadastro</Link>}
            {usuario && <Link to="/livros" className="nav-link"> 📕 Livros</Link>}
            <Link to="/ajuda" className="nav-link">❓ Ajuda</Link>
            {usuario && <button className="btn-sair" onClick={handlelogOut}>🔚 Sair</button>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;