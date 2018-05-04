import React from "react";
import YouTube from 'react-youtube';
import ResponsiveEmbed from 'react-responsive-embed';


export default class Video extends React.Component {

  render() {
    const opts = {
      width: '320',
      height: '180',
      playerVars: {
        autoplay: 0,
        showinfo: 0
      }
    };

  return  <li>
      <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady}/>
      <div className="video__desc">
        <h3 className="video__desc--title">{this.props.title}</h3>
      </div>
    </li>
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
