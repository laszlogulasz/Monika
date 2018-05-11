import React from "react";
import Fade from 'react-reveal/Fade';
import Video from './video.jsx';
import videoList from './lists/videolist.js';

export default class Videos extends React.Component {
  render() {

    const videos = videoList.map((video, index) => {
      return <Video key={index} id={video.id} title={video.title}/>
    })

    return <section className="video" id="video">
        <div className="container video--box">
          <article className="article--left">
          <Fade left>
            <h2>
              <span>Video</span>
            </h2>
            </Fade>
            <ul>
              {videos}
            </ul>
          </article>
        </div>
      </section>
  }
}
