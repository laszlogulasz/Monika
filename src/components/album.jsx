import React from "react";

export default class Album extends React.Component {
constructor(props){
  super(props)
}
  render() {

    return <li className="album">
      <time className="album--date">{this.props.date}</time>
      <img src={this.props.cover} alt="Album cover"/>
      <div className="album__desc">
        <h3 className="album__desc--title">{this.props.title}</h3>
        <a href={this.props.details} title="Idź do strony iTunes" target="_blank">
          <i className="fab fa-itunes"></i>{this.props.langState ? 'CHECK' : 'ZOBACZ'}</a>
      </div>
    </li>
  }
}
