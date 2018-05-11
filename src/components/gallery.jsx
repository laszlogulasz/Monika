import React from "react";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Swiper from 'react-id-swiper';
import slideList from './lists/slidelist.js';

export default class Gallery extends React.Component {

  render() {

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination.swiper-pagination-white',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-white',
        prevEl: '.swiper-button-prev.swiper-button-white'
      }
    };

    const slides = slideList.map((slide, index) => {
      return <div className="slide" alt="zdjęcie portretowe - portrait picture" key={index}><img alt="img" src={`assets/images/${slide.url}`} className="swiper-lazy"/></div>
    });

    return <section className="gallery" id="gallery">
        <div className="container gallery--box">
          <article className="article--center">
            <Fade right>
              <h2>
                <span>{this.props.langState ? 'Gallery' : 'Galeria'}</span>
              </h2>
            </Fade>
            <Swiper {...params} className="slide">
              {slides}
            </Swiper>
          </article>
        </div>
      </section>
  }
}
