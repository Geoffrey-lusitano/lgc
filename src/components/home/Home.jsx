import React from "react";
import "./home.css";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";

const Home = () => {
  return (
    <section id="home">
      <div className="general home__general">
        <h2>LGC chambéry</h2>
        <h1>Services informatiques <br /> à domicile et en entreprise</h1>
        <div className="under__title"></div>
        <ul className="atouts">
          <li><span className="atout__icon"><CiCircleCheck /></span><span>Déplacement rapide</span></li>
          <li><span className="atout__icon"><CiCircleCheck /></span><span>informaticiens PRO</span></li>
          <li><span className="atout__icon"><CiCircleCheck /></span><span>SAV</span></li>
          <li><span className="atout__icon"><CiCircleCheck /></span><span>Garanties</span></li>
        </ul>
        <h2 className="slogan">
        Une petite équipe d'informaticiens, à taille humaine.
        </h2>
        <p className="home__text__center">
          LGC Chambéry vous propose ses services informatiques tels que le dépannage informatique à domicile et en milieu professionnel, l’assistance aux utilisateurs, le conseil, l’installation de matériel informatique, etc. Notre équipe se déplace sur toute la Savoie.
          <br />
          Depuis 2020, nous intervenons chez nos clients en entreprise et à domicile avec comme objectifs principaux la qualité du diagnostic et de prise en charge, la rapidité d’intervention et la fiabilité du support après intervention.
        </p>
        <div className="socialNetwork">
          <a
            href="https://www.linkedin.com/company/lgcorporation/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100089736540403"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/lgcorporation.73/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="home__contact">
          <div className="contact__cels">
            <h3>UNE PANNE ?</h3>
            <div className="cels__content">
              <BsTelephoneFill className="cels__icon" />
              <p> 06 65 10 34 78</p>
            </div>
          </div>
          <div className="contact__cels">
            <h3>UN PROJET ?</h3>
            <div className="cels__content">
              <MdEmail className="cels__icon mails" />
              <a href="mailto:contact@lgcorporation.fr" target="_blank">
                contact@lgcorporation.fr
              </a>
            </div>
          </div>
          <div className="contact__cels">
            <h3>UN CONSEIL ?</h3>
            <div className="cels__content">
              <BsWhatsapp className="cels__icon whatapp" />
              <a
                href="https://api.whatsapp.com/send?phone=33665103478"
                target="_blank"
              >
                +33 6 65 10 34 78
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
