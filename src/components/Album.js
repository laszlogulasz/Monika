import React from "react";

export default class Album extends React.Component {
  state={
    load: true
  }

  handleLoad = () => {
    this.setState({load: false})
  }
  render() {
    return (
      <li className="album">
        <div className="album__desc">
          <div className="album__title">
            <h3>{this.props.title}</h3>
            <a
              href={this.props.details}
              style={this.state.load ? {display: 'none'} : null}
              title={this.props.langState ? 'Go to iTunes' : 'Idź do iTunes'}
              target="_blank" rel="noopener">
              <i className="fab fa-itunes"></i>{this.props.langState ? 'CHECK' : 'ZOBACZ'}
            </a>
          </div>
          <figure>
            <div
              className="data__cover"
              style={this.state.load ? {display: 'none'} : null}>
              <time>{this.props.date}</time>
              <img
                src={this.props.cover}
                onLoad={() => this.handleLoad()}
                alt="Album cover"
              />
            </div>
            <figcaption>
              {this.props.langState ? this.props.descen : this.props.descpl}
            </figcaption>
          </figure>
        </div>
      </li>
    )
  }
}
