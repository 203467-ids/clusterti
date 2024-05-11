import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Importa tu archivo CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-4"> {/* Agrega la clase "footer" aquí */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 CLUSTER TI. Creando alianzas, Innovando Ideas.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
