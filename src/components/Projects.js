import React from "react";
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import Divider from './Divider';
import {projectspl, projectsen} from './locals/projectstext'
import carouselList from './lists/carousellist';

const Projects = ({...props}) => {

  const pics = carouselList.map((pic, index) => {
    return (
        <Fade key={index}>
          <div className="project-slide" alt="gallery slide">
            <img alt="img" src={`assets/images/${pic.url}`} className="swiper-lazy"/>
          </div>
        </Fade>
      )
  });

  const CarouselUI = ({children}) =>
    <div className="carousel--container">{children}</div>;

  const Carousel = makeCarousel(CarouselUI);

  let projectstext = props.langState ? projectsen : projectspl;

  return (
    <React.Fragment>
      <section className="projects" id="projects">
        <div className="container gallery--box">
          <article className="article--center">
            <Fade right>
              <h2>
                <span>{props.langState ? 'Projects' : 'Pojekty'}</span>
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
      <Divider />
    </React.Fragment>
  )
}

export default Projects;
