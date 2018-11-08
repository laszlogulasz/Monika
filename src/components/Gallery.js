import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";
import Swiper from "react-id-swiper";
import Divider from "./Divider";
import slideList from "./lists/slidelist";

const Gallery = ({ ...props }) => {
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

  return (
    <React.Fragment>
      <ScrollableAnchor id="gallery">
        <section className="gallery">
          <div className="container gallery--box">
            <article className="article--center">
              <Fade right="right">
                <h2>
                  <span>{props.langState ? "Gallery" : "Galeria"}</span>
                </h2>
              </Fade>
              <Swiper {...params}>{slides}</Swiper>
            </article>
          </div>
        </section>
      </ScrollableAnchor>
      <Divider />
    </React.Fragment>
  );
};

export default Gallery;
