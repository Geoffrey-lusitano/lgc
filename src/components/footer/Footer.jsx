import React from "react";
import './footer.css';

const Footer = () => {
    return (
      <footer>
        <a href="#" className="footer__logo">
          LGC
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#pro">Pro</a>
          </li>
          <li>
            <a href="#particular">Particulier</a>
          </li>
          <li>
            <a href="#web">Création site web</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials"></div>

        <div className="footer__copyright">
          <small>&copy; LGC. All rights reserved.</small>
        </div>
      </footer>
    );
  };
  
  export default Footer;