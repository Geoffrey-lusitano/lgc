import React from "react";
import "./particular.css";
import { RiComputerLine } from "react-icons/ri";
import { FcDataBackup } from "react-icons/fc";
import { GiAutoRepair } from "react-icons/gi";
import { RiInstallFill } from "react-icons/ri";
import { SiPcgamingwiki } from "react-icons/si";
import { AiOutlineApartment } from "react-icons/ai";
import particular from "../../assets/particular.jpg";

const Particular = () => {
  return (
    <section id="particular">
      <div className=" general particular__general">
        <div className="particular__bord">
          <div className="particular__bord__content">
            <div className="title">
              <h2>Services aux particuliers</h2>
              <div className="divider__border"></div>
            </div>
            <div className="bord__six">
              <div className="particular__sticker">
                <h3>Maintenance / Depannage PC & MAC</h3>
                <div className="particular__icon">
                  <RiComputerLine />
                </div>
              </div>
              <div className="particular__sticker">
                <h3>Sauvegardes / récupération des données</h3>
                <div className="particular__icon">
                  <FcDataBackup />
                </div>
              </div>
              <div className="particular__sticker">
                <h3>Réparation ordinateur Portable</h3>
                <div className="particular__icon">
                  <GiAutoRepair />
                </div>
              </div>
              <div className="particular__sticker">
                <h3>
                  Installation & configuration tout type de matériel
                  informatique
                </h3>
                <div className="particular__icon">
                  <RiInstallFill />
                </div>
              </div>
              <div className="particular__sticker">
                <h3>Assemblage ordianteurs sur-mesure</h3>
                <div className="particular__icon">
                  <SiPcgamingwiki />
                </div>
              </div>
              <div className="particular__sticker">
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <div className="particular__icon">
                  <AiOutlineApartment />
                </div>
              </div>
            </div>
          </div>

          <img className="pro__img" src={particular} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Particular;
