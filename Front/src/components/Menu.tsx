import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo aetic transparente.png'; // Importa tu logo
import '../styles/Menu.css'; // Importa tu archivo CSS

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className={`logo ${isMenuOpen ? 'expanded' : ''}`} />
        </Link>
        <button className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eventos">Eventos</Link>
              {/* Submenú "Login" */}
              <ul className={`submenu ${isMenuOpen ? 'show' : ''}`}>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
              {/* Fin del submenú "Login" */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
