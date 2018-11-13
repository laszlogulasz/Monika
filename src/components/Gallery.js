import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";
import Loadable from "react-loadable";
import Divider from "./Divider";
import Loading from "./Loading";

const LazySwiper = Loadable({
  loader: () => import("./Slider"),
  loading: Loading
})

const Gallery = (props) => {
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
              <LazySwiper />
            </article>
          </div>
        </section>
      </ScrollableAnchor>
      <Divider />
    </React.Fragment>
  );
};

export default Gallery;
