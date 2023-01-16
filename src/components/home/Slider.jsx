import React from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'

const Slider = () => {

  const baseUrl = "http://../../assets"
  const datas = [
    {
      id: 1,
      image: one,
      title: "Image1",
      text: "Un mega pc pas chere !"
    },
    {
      id: 2,
      image: two,
      title: "Image1",
      text: "Un mega pc pas chere !"
    },
    {
      id: 3,
      image: three,
      title: "Image1",
      text: "Un mega pc pas chere !"
    },
  ]

    return (
      <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={120} showStatus={false}
      width={'80%'} dynamicHeight={false} autoFocus>
        {datas.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{slide.title}</h2>
              <p className="overlay__text">{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
  

export default Slider;
