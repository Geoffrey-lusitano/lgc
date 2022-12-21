import React, {useState, useEffect} from "react";
import './nav.css';

export default function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toogleNavSmallScreen = () => {
      setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

      const changeWidth = () => {
        setLargeur(window.innerWidth);

        if(window.innerWidth > 500) {
          setToggleMenu(false);
        }
      }

      window.addEventListener('resize', changeWidth);

      return () => {
        window.removeEventListener('resize', changeWidth);
      }
    }, [])

    return (
      <nav>
        {(toggleMenu || largeur > 500) && (
          <ul className="nav__list">
            <li className="items">Accueil</li>
            <li className="items">Pro</li>
            <li className="items">Particulier</li>
            <li className="items">Création site web</li>
            <li className="items">Portfolio</li>
            <li className="items">Contact</li>
          </ul>
        )}
        <button onClick={toogleNavSmallScreen} className="btn">BTN</button>
      </nav>
    );
  };
