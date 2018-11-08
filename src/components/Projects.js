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
                  href={
                    "https://www.mystic.pl/plyty_cd,32445.htm?fbclid=IwAR2ECj2sOYkxSWbCI1xIEty5ZK_O8SbpiK4PT81cEHTyyvZXnwnHtae8vrU"
                  }
                  title={props.langState ? "Go to sklepu" : "Idź do sklepu"}
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fas fa-store fa-xs" />
                  {props.langState ? "STORE" : "SKLEP"}
                </a>
              </div>
              <figure className="projects__article__figure">
                <img
                  alt="RADIO-HEDONISTYCZNIE album cover"
                  src={`assets/images/coverradiohead.jpg`}
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
