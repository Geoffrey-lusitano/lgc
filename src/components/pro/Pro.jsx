import React from "react";
import "./pro.css";
import { BiBuildings } from "react-icons/bi";
import { GoDeviceDesktop } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";
import pro from "../../assets/pro.jpg";

function Pro() {
  return (
    <section id="pro">
      <div className="general pro__general">
        <div className="bord">
          <div className="pro__content__img">
          </div>
          <div className="bord__content">
            <div className="title">
              <h2>Services aux professionnels</h2>
              <div className="divider__border__pro"></div>
            </div>
            <div className="bord__little">
              <div className="pro__sticker">
                <div className="icon">
                  <MdOutlineManageSearch />
                </div>
                <h3>
                  Gestion de votre parc informatique & optimisation de vos
                  espace de travail
                </h3>
                <p>
                  Afin de garantir un contrat de maintenance informatique
                  personnalisé et de qualité, nous réalisons au préalable une
                  analyse complète de votre parc informatique et de votre
                  environnement de travail.
                </p>
              </div>
              <div className="pro__sticker">
                <div className="icon">
                  <GoDeviceDesktop />
                </div>
                <h3>Dépannage informatique à distance</h3>
                <p>
                  Si vous rencontrez un problème et que celui ci ne nécessite
                  pas l’ intervention sur site, nous assurons un depannage
                  informatique à distance. Ainsi, nous pouvons vous dépanner
                  très rapidement et efficacement.
                </p>
              </div>
              <div className="pro__sticker">
                <div className="icon">
                  <BiBuildings />
                </div>
                <h3>Intervention au sein de votre entreprise</h3>
                <p>
                  Un technicien informatique se déplace pour vous fournir une
                  solution.
                </p>
              </div>
              <div className="pro__sticker">
                <div className="icon">
                  <FaRegHandshake />
                </div>
                <h3>Contrat de maintenance informatique annuel</h3>
                <p>Nous vous proposons des prestations sur mesures.</p>
                {/* <ul>
                  <li>⇒ formatage ordinateur</li>
                  <li>⇒ mise en réseaux de tous vos ordinateurs</li>
                  <li>⇒ éradication de virus, installation d’ antivirus</li>
                  <li>⇒ sauvegarde et récupération de données</li>
                  <li>⇒ maintenance et mise à jours de vos ordinateurs</li>
                  <li>⇒ installation de matériels et logiciels.</li>
                  <li>⇒ formations personnalisées</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pro;
