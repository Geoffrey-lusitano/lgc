import React from "react";
import './gaming.css';
import pilates from '../../assets/portfolio/pilates.png'
import mas from '../../assets/portfolio/mas.png'
import titanium from '../../assets/portfolio/titanium.png'

const data = [
  {
    id: 1,
    image: pilates,
    title: 'Site vitrine de Pilates',
    demo: 'https://lecorpspilates.fr/',
  },
  {
    id: 2,
    image: mas,
    title: 'Site vitrine de Reflexologue',
    demo: 'https://laurence-descat.fr/',
  },
  {
    id: 3,
    image: titanium,
    title: 'Site vitrine Bateaux',
    demo: 'https://bateauxtitanium.com/',
  },

]

const Gaming = () => {
  return (
    <section id="gaming">
      <div className="title">
        <h2>Gaming</h2>
        <div className="divider__border"></div>
      </div>
      <div className="general gaming__general">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="gaming__item">
              <div className="gaming__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="gaming__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Lien
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
  
  export default Gaming;