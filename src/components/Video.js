import React from "react";
import YouTube from 'react-youtube';

const Video = ({...props}) => {

  const opts = {
    width: '320',
    height: '180',
    playerVars: {
      autoplay: 0,
      showinfo: 0
    }
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  }
  return (
    <li>
      <YouTube videoId={props.id} opts={opts} onReady={_onReady}/>
      <div className="video__desc">
        <h3 className="video__desc--title">{props.title}</h3>
      </div>
    </li>
  )
}



export default Video;
