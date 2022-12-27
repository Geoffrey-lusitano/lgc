import React, {useState} from "react";
import './nav.css';
import Logo from '../../assets/logo.png'

function Nav() {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className={`navbar ${showLinks ? " show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">
        <img src={Logo} alt="logo LGCorporation" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1" onClick={handleShowLinks} >
          <a href="#home" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-2" onClick={handleShowLinks}>
          <a href="#pro" className="navbar__link">
            Pro
          </a>
        </li>
        <li className="navbar__item slideInDown-3" onClick={handleShowLinks}>
          <a href="#particular" className="navbar__link">
            Particulier
          </a>
        </li>
        <li className="navbar__item slideInDown-4" onClick={handleShowLinks}>
          <a href="#web" className="navbar__link">
            Création site web
          </a>
        </li>
        <li className="navbar__item slideInDown-5" onClick={handleShowLinks}>
          <a href="#portfolio" className="navbar__link">
            Portfolio
          </a>
        </li>
        <li className="navbar__item slideInDown-6" onClick={handleShowLinks}>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav
