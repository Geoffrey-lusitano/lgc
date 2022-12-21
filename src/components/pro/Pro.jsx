import React from "react";
import './pro.css';
import { BiBuildings } from "react-icons/bi";
import { GoDeviceDesktop } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";

function Pro() {
    return (
      <section id="pro">
        <div className="general">
          <div className="title">
            <h2>Services aux professionnels</h2>
            <div className="divider__border"></div>
          </div>
          <div className="bord">
            <div className="bord__little">
              <div className="sticker">
                <div className="icon">
                  <BiBuildings />
                </div>
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <p>
                  Chaque entreprise dispose de son propre parc informatique, où
                  les besoins et difficultés rencontrés sont propres à eux. Afin
                  de garantir un contrat de maintenance informatique
                  personnalisé et de qualité, nous réalisons au préalable une
                  analyse complète de votre parc informatique.
                </p>
              </div>
              <div className="sticker">
                <div className="icon">
                  <GoDeviceDesktop />
                </div>
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <p>
                  Chaque entreprise dispose de son propre parc informatique, où
                  les besoins et difficultés rencontrés sont propres à eux. Afin
                  de garantir un contrat de maintenance informatique
                  personnalisé et de qualité, nous réalisons au préalable une
                  analyse complète de votre parc informatique.
                </p>
              </div>
              <div className="sticker">
                <div className="icon">
                  <GoDeviceDesktop />
                </div>
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <p>
                  Chaque entreprise dispose de son propre parc informatique, où
                  les besoins et difficultés rencontrés sont propres à eux. Afin
                  de garantir un contrat de maintenance informatique
                  personnalisé et de qualité, nous réalisons au préalable une
                  analyse complète de votre parc informatique.
                </p>
              </div>
            </div>
            <div className="bord__big">
              <div className="sticker">
                <div className="icon">
                  <FaRegHandshake />
                </div>
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <p>
                  Dans le cadre du contrat de maintenance informatique annuel,
                  voici quelques exemples de prestations que nous proposons :
                </p>
                <ul>
                  <li>⇒ formatage ordinateur</li>
                  <li>⇒ mise en réseaux de tous vos ordinateurs</li>
                  <li>⇒ éradication de virus, installation d’ antivirus</li>
                  <li>⇒ sauvegarde et récupération de données</li>
                  <li>⇒ maintenance et mise à jours de vos ordinateurs</li>
                  <li>⇒ installation de matériels et logiciels.</li>
                  <li>⇒ formations personnalisées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Pro;
  