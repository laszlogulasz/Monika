import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Divider from "./Divider";
import ScrollableAnchor from "react-scrollable-anchor";
import { projectspl, projectsen } from "./locals/projectstext";
import carouselList from "./lists/carousellist";

const Projects = props => {
  let projectstext = props.langState ? projectsen : projectspl;

  return (
    <React.Fragment>
      <ScrollableAnchor id="news">
        <section className="projects">
          <div className="container gallery--box">
            <article className="projects__article article--center">
              <Fade right>
                <h2>
                  <span>{props.langState ? "News" : "Aktualności"}</span>
                </h2>
              </Fade>
              <div className="projects__article__title">
                <h3>
                  {props.langState ? "New album:" : "Nowy Album:"}{" "}
                  RADIO-HEDONISTYCZNIE
                </h3>
                <a
                  href="https://itunes.apple.com/us/album/radiohedonistycznie/1442076750?uo=4"
                  title={props.langState ? "Go to iTunes" : "Idź do iTunes"}
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-itunes" />
                  {props.langState ? "CHECK" : "ZOBACZ"}
                </a>
              </div>
              <figure className="projects__article__figure">
                <img
                  width="300"
                  alt="RADIO-HEDONISTYCZNIE album cover"
                  src="assets/images/coverradiohead.jpg"
                  srcSet="assets/images/coverradiohead@2x.jpg 2x"
                />
                <figcaption className="projects__article__figure__caption">
                  {projectstext}
                </figcaption>
              </figure>
            </article>
          </div>
        </section>
      </ScrollableAnchor>
      <Divider />
    </React.Fragment>
  );
};

export default Projects;
