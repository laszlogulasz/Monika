import React from "react";

export default class Album extends React.Component {

  render() {

    return <li className="album">
      <time className="album--date">{this.props.date}</time>
      <img src={this.props.cover} alt="Album cover"/>
      <div className="album__desc">
        <h3 className="album__desc--title">{this.props.title}</h3>
        <a href={this.props.details} title={this.props.langState ? 'Go to iTunes' : 'Idź do iTunes'} target="_blank" rel="noopener">
          <i className="fab fa-itunes"></i>{this.props.langState ? 'CHECK' : 'ZOBACZ'}</a>
      </div>
    </li>
  }
}
