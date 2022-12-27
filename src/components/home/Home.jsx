import React from "react";
import './home.css';
import { BiBuildings } from "react-icons/bi";

const Home = () => {
    return (
      <section id="home">
        <div className="home__general">
          <div className="carousel"></div>
          <h1>Solution complete informatiques Chambéry</h1>
          <p>
            Un projet web ou une évolution de votre infrastructure ? LGC vous
            accompagne de A - Z dans vos projets IT. Dépannage informatique pour
            les particuliers et professionnels. Créations de sites webs
            sur-mesures. Maison connecté - Formation - Assemblage PC unique.
            Forte de collaborateurs experimenté nous garantissont une approche
            qui garantira la reussite de votre projet
          </p>
          <h2>Nous contacter</h2>
          <div className="home__contact">
            <div className="contact__cels">
              <h3>Une panne ?</h3>
              <div className="cels__content">
                <BiBuildings />
                <p> 06 65 10 34 78</p>
              </div>
            </div>
            <div className="contact__cels">
              <h3>Un projet ?</h3>
              <div className="cels__content">
                <BiBuildings />
                <p>contact@lgc.fr</p>
              </div>
            </div>
            <div className="contact__cels">
              <h3>Un conseil ?</h3>
              <div className="cels__content">
                <BiBuildings />
                <p>+33 6 65 10 34 78</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;