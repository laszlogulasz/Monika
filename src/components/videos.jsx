import React from "react";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Video from './video.jsx';
import videoList from './lists/videolist.js';

export default class Videos extends React.Component {
  render() {

    const videos = videoList.map((video, index) => {
      return <Video key={index} id={video.id} title={video.title}/>
    })

    return <ScrollableAnchor id="video">
      <section className="video">
        <div className="container video--box">
          <article className="article--left">
          <Fade left>
            <h2>
              <span>Video</span>
            </h2>
            </Fade>
            <Fade>
            <ul>
              {videos}
            </ul>
            </Fade>
          </article>
        </div>
      </section>
    </ScrollableAnchor>
  }
}
