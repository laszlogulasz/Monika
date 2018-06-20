import React from "react";
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import {projectspl, projectsen} from './locals/projectstext.jsx'
import carouselList from './lists/carousellist.js';

export default class Projects extends React.Component {

  render() {
    const pics = carouselList.map((pic, index) => {
      return <Fade key={index}>
        <div className="project-slide" alt="gallery slide"><img alt="img" src={`assets/images/${pic.url}`} className="swiper-lazy"/></div></Fade>
    });

    const CarouselUI = ({children}) => <div className="carousel--container">{children}</div>;

    const Carousel = makeCarousel(CarouselUI);

    let projectstext = this.props.langState ? projectsen : projectspl;

    return <section className="projects" id="projects">
        <div className="container gallery--box">
          <article className="article--center">
            <Fade right>
              <h2>
                <span>{this.props.langState ? 'Projects' : 'Pojekty'}</span>
              </h2>
            </Fade>
            <h3>
              <span>Monika Borzym - Radioheadycznie</span>
            </h3>
            {projectstext}
            <Carousel defaultWait={2000} maxTurns={20}>
              {pics}
            </Carousel>
          </article>
        </div>
      </section>
  }
}
