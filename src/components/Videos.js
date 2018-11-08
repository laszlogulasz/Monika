import React from "react";
import Fade from "react-reveal/Fade";
import Video from "./Video";
import videoList from "./lists/videolist";
import ScrollableAnchor from "react-scrollable-anchor";

const Videos = () => {
  const videos = videoList.map(video => {
    return <Video key={video.id} id={video.id} title={video.title} />;
  });

  return (
    <ScrollableAnchor id="video">
      <section className="video">
        <div className="container video--box">
          <article className="article--left">
            <Fade left>
              <h2>
                <span>Video</span>
              </h2>
            </Fade>
            <ul>{videos}</ul>
          </article>
        </div>
      </section>
    </ScrollableAnchor>
  );
};
export default Videos;
