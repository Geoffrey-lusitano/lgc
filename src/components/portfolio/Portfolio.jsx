import React from "react";
import './portfolio.css';
import pilates from '../../assets/portfolio/pilates.png'
import mas from '../../assets/portfolio/mas.png'

const data = [
  {
    id: 1,
    image: pilates,
    title: 'Site vitrine de Pilates',
    demo: 'http://lecorpspilates.fr/',
  },
  {
    id: 2,
    image: mas,
    title: 'Site vitrine de Reflexologue',
    demo: 'http://laurence-descat.fr/',
  },

]

const Portfolio = () => {
    return (
      <section id="portfolio">
        <div className="title">
              <h2>Portfolio</h2>
              <div className="divider__border"></div>
            </div>
        <div className="general portfolio__general">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={demo} className="btn btn-primary" target="_blank">Lien</a>
                </div>
              </article>
              )
            })
          }


        </div>
      </section>
    );
  };
  
  export default Portfolio;