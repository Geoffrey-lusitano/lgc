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
        <img className="img__logo" src={Logo} alt="logo LGCorporation" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1" onClick={handleShowLinks} >
          <a href="#home" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-3" onClick={handleShowLinks}>
          <a href="#particular" className="navbar__link">
            Services
          </a>
        </li>
        <li className="navbar__item slideInDown-3" onClick={handleShowLinks}>
          <a href="#tarifs" className="navbar__link">
            Tarifs
          </a>
        </li>
        {/* <li className="navbar__item slideInDown-5" onClick={handleShowLinks}>
          <a href="#gaming" className="navbar__link">
            Gaming
          </a>
        </li> */}
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
