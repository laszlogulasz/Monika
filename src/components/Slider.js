import React from "react";
import Swiper from "react-id-swiper";
import slideList from "./lists/slidelist";

const Slider = props => {
  const params = {
    lazy: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.swiper-button-white",
      prevEl: ".swiper-button-prev.swiper-button-white"
    }
  };
  const slides = slideList.map((slide, index) => {
    return (
      <div key={index}>
        <img
          data-src={`assets/images/${slide.url}`}
          className="slide swiper-lazy"
          role="presentation"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
    );
  });

  return <Swiper {...params}>{slides}</Swiper>;
};

export default Slider;
