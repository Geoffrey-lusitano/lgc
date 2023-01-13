import React from "react";
import "./home.css";
import Slider from "./Slider.jsx";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home">
      <div className="general home__general">
        <h1>La solution informatique complète à Chambéry</h1>
        <div className="under__title"></div>
        <div className="carousel">
          <Slider />
        </div>
        <h2 className="slogan">
          Un projet web ou une évolution de votre infrastructure ?
          <br />
          Nous vous accompagnons de A - Z
          <br />
          dans vos projets IT.
        </h2>
        <br />
        <p className="home__text__center">
          Dépannage informatique pour les particuliers et professionnels.
          <br />
          Créations de sites webs sur-mesures. Maison connecté - Formation -
          Assemblage PC unique. Forte de collaborateurs experimenté nous
          garantissont une approche qui garantira la reussite de votre projet
        </p>
        <div className="socialNetwork">
          <a
            href="https://www.linkedin.com/company/lgcorporation/about/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089736540403"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/lgcorporation.73/"
            target="_blank"
            rel="noreferrer"
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
