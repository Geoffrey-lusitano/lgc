
import "./particular.css";
import React, { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { BsArrowsAngleContract } from "react-icons/bs";
import { MdSettingsBackupRestore } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdNetworkCheck } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const data = [

  {
    id: 1,
    icon: < RiComputerLine />,
    name: "Dépannage informatique à domicile sur Chambéry et en Savoie",
    text: "Pour vos problèmes matériels, logiciels, d'équipement réseau, mails, internet...",
    larg: "Largeur 1,64m",
  },
  {
    id: 2,
    icon: <MdSettingsBackupRestore />,
    name: "Sauvegardes et récupération des données perdu",
    text: "Pour vos problèmes matériels, logiciels, d'équipement réseau, mails, internet...",

  },
  {
    id: 3,
    icon: <FaPrint />,
    name: "Installation de matériel et de logiciels informatiques",
    text: "Un technicien se déplace et configure vos équipements informatiques et réseau.",

  },
  {
    id: 4,
    icon: <BsArrowsAngleContract />,
    name: "Dépannage informatique à distance via AnyDesk",
    text: "Nous intervenons à distance grâce à un logiciel de téléassistance informatique.",

  },
  {
    id: 5,
    icon: <FaTools />,
    name: "Assemblage de pc à domicile ou dans vos locaux",
    text: "Montage, paramétrage et installation sur mesure de votre configuration",

  },
  {
    id: 6,
    icon: <MdNetworkCheck />,
    name: "Intervention réseaux, serveurs et box internet",
    text: "Dépannage du réseau, CPL & répéteurs. Diagnostic de réception et de fonctionnement - Création de partages - Ajout de matériel.",

  },

];
  
const Particular = () => {
  return (
    <section id="particular">
      <div className="particular">
        <div className="title">
          <h2>Voici Tous Nos Services <br /> À Chambéry</h2>
          <div className="divider__border"></div>
        </div>
        <div className="particular__signet">
          {data.map(
            ({
              id,
              icon,
              name,
              text,
            }) => {
              return (
                <article key={id} className="signet">

                  <div className="signet__content">
                    <div className="signet__icon">{icon}</div>
                    <h3>{name}</h3>
                    <div className="signet__carac">
                      
                      <div className="web__divider__border"></div>
                      <ul>
                        <li>{text}</li>
                      </ul>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
      <div className="services">
        <div className="services__content">
          <div className="engagements">
            <h4>NOS ENGAGEMENTS</h4>
            <h2>Pourquoi choisir nos services ?</h2>
            <ul>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Informaticiens PRO</span></li>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Matériel & Outils adaptés</span></li>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Intervention sous RC PRO</span></li>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Réactivité</span></li>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Efficacité</span></li>
              <li><span className="engagement__icon"><CiCircleCheck /></span><span>Fiabilité</span></li>
            </ul>
            <p>Nous apportons une attention particulière à la qualité de prise en charge de chacun de nos clients.</p>
          </div>
          <div className="engagements__details">
            <div className="detail detail__top">
              <h3>Service de qualité</h3>
              <p>Nous intervenons uniquement après avoir analysé le formulaire que vous avez rempli. Pas de déplacement inutile, pas d'intervention sans issue.</p>
            </div>
            <div className="detail">
              <h3>Déplacement rapide</h3>
              <p>Nous intervenons le plus souvent dans les 24 heures, voir dans la journée. Quel que soit le service demandé, profitez d'une réactivité exemplaire.</p>
            </div>
            <div className="detail">
              <h3>Des garanties</h3>
              <p>Des garanties variables selon chaque service et une garantie de résultat pour les interventions à distance.</p>
            </div>
            <div className="detail detail__bottom">
              <h3>SAV disponible</h3>
              <p>Nous ne vous laissons pas tomber: en cas de besoin, vous pouvez contacter votre informaticien grâce à sa carte et profiter de notre SAV à distance.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Particular;
