import React from "react";
import "./web.css";

const Web = () => {
  return (
    <section id="web">
      <div className="general web__general">
        <div className="web__general__title">
          <h2>Création de site internet</h2>
          <div className="divider__border__light"></div>
        </div>
        <p className="web__spitch">
          La flexibilité ! Tout simplement nous avons moins de projets à gérer
          qu'une agence, nous pouvons également être dédié à un seul client.
          Notre autonomie est totale là ou une agence est soumise à des
          contraintes. La possibilité d'un travail à "court-terme" est tout a
          fait envisageable, les projets ponctuels sont moins évident avec une
          agence; de même que les petits projets. Un seul interlocuteur. Cela
          facilite vraiment les échanges et vous savez exactement à qui vous
          adresser. Une vraie relation de confiance s'installe.
        </p>
        <div className="web__content">
          <div className="web__bubble">
            <div className="web__title">
              <h3>SITE VITRINE STANDARD</h3>
              <div className="web__divider__border"></div>
              <h4>A PARTIR DE</h4>
              <p>1199€</p>
              <div className="web__divider__border"></div>
            </div>
            <p>Dévelopee sous WORDPRESS <br />(Outil de gestion de contenu)</p>
            <ul>
              <li className="web__buble__lilight">Charte graphique à partir d’une maquette</li>
              <li>Sélection d’une palette de couleur</li>
              <li className="web__buble__lilight">Domaine + hébergement + e-mail pendant 12 mois</li>
              <li>Interface administrateur standard</li>
              <li className="web__buble__lilight">Site responsive (adapté a tous supports)</li>
              <li>Mise en place du contenu (textes & images)</li>
              <li className="web__buble__lilight">Formulaire de contact</li>
              <li>Liens de partage sur les réseaux sociaux</li>
              <li className="web__buble__lilight">Optimisation du référencement</li>
              <li>Statistiques de visite</li>
              <li className="web__buble__lilight">Mise en ligne du site</li>
              <li>Formation utilisation du site</li>
            </ul>
            <a href="#contact" className="btn">DEMANDER UN DEVIS</a>
          </div>
          <div className="web__bubble">
            <div className="web__title">
              <h3>SITE VITRINE PERSONNALISÉ</h3>
              <div className="web__divider__border"></div>
              <h4>A PARTIR DE</h4>
              <p>1700€</p>
              <div className="web__divider__border"></div>
            </div>
            <p>
              Dévelopee sur-mesure <br />(Codage a la main)
            </p>
            <ul>
              <li className="web__buble__lilight">Création d'un charte graphique personnalisée</li>
              <li>Proposition de logo</li>
              <li className="web__buble__lilight">Domaine + hébergement + e-mail pendant 12 mois</li>
              <li>Interface administrateur sur-mesure</li>
              <li className="web__buble__lilight">Site responsive (adapté a tous supports)</li>
              <li>Mise en place du contenu (textes & images)</li>
              <li className="web__buble__lilight">Formulaire de contact & Map</li>
              <li>Liens de partage sur les réseaux sociaux</li>
              <li className="web__buble__lilight">Optimisation du référencement et des performances</li>
              <li>Statistiques de visite</li>
              <li className="web__buble__lilight">Mise en ligne du site</li>
              <li>Formation utilisation du site</li>
            </ul>
            <a href="#contact" className="btn">DEMANDER UN DEVIS</a>
          </div>
          <div className="web__bubble">
            <div className="web__title">
              <h3>PLATEFORME E-COMMERCE</h3>
              <div className="web__divider__border"></div>
              <h4>A PARTIR DE</h4>
              <p>2800€</p>
              <div className="web__divider__border"></div>
            </div>
            <p>
              PRESTASHOP / WORDPRESS <br /> (Outil de gestion de contenu)
            </p>
            <ul>
              <li className="web__buble__lilight">Création d'un charte graphique personnalisée</li>
              <li>Proposition de logo</li>
              <li className="web__buble__lilight">Domaine + hébergement + e-mail pendant 12 mois</li>
              <li>Installation & configuration des plugins choisis</li>
              <li className="web__buble__lilight">Site responsive (adapté a tous supports)</li>
              <li>Mise en place du contenu (textes & images)</li>
              <li className="web__buble__lilight">Formulaire de contact & Map</li>
              <li>Liens de partage sur les réseaux sociaux</li>
              <li className="web__buble__lilight">Optimisation du référencement</li>
              <li>Statistiques de visite</li>
              <li className="web__buble__lilight">Mise en ligne du site</li>
              <li>Formation utilisation du site</li>
            </ul>
            <a href="#contact" className="btn">DEMANDER UN DEVIS</a>
          </div>
          <div className="web__bubble__divided">
            <div className="bubble__divided">
              <div className="web__title">
                <h3>FORFAIT MAINTENANCE</h3>
                <div className="web__divider__border"></div>
                <h4>50€/HEURE** ou</h4>
                <p>400€/AN***</p>
                <div className="web__divider__border"></div>
              </div>
              <p>Mise à jour site internet & plugins</p>
              <ul>
                <li className="web__buble__lilight">Petites modifications graphiques ou de contenu</li>
                <li>sauvegardes externalisées mensuelles</li>
                <li className="web__buble__lilight">Optimisation performances ou référencement</li>
                <li>Restauration en cas de piratage</li>
              </ul>
              <a href="#contact" className="btn">NOUS CONTACTER</a>
            </div>
            <div className="bubble__divided__small">
              <div className="web__title">
                <h3>Développements spécifiques</h3>
                <div className="web__divider__border"></div>
                <h4>taux journalier moyen</h4>
                <p>300€/JOUR</p>
                <div className="web__divider__border"></div>
              </div>
              <a href="#contact" className="btn">NOUS CONTACTER</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;
