import React from "react";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Album from './album.jsx';
import {albumspl, albumsen} from './locals/albumstext.jsx'

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: false
    }
  }

  componentDidMount() {
    this.getAlbums();
  };

  getAlbums = () => {
    fetch(`https://itunes.apple.com/search?term=monika+borzym&entity=album`).then(response => response.json()).then(albums => this.setState({albums: albums}));
  };

  render() {
    if (!this.state.albums) {
      return null;
    } else {
      //tworzę listę z fetchowanej tablicy
      const list = this.state.albums.results
      //sortuję po dacie wydania (4cyfrowej)
      .sort((a,b) =>
      (a.releaseDate.substr(0, 4) > b.releaseDate.substr(0, 4)) ? 1 : ((b.releaseDate.substr(0, 4)) ? -1 : 0))
      //tworzę albumy z elementów tablicy
      .map((album, index) =>
         <Album key={index} date={album.releaseDate.substr(0, 4)} cover={album.artworkUrl100} title={album.collectionName} details={album.collectionViewUrl} langState={this.props.langState}/>
      );
      let albumstext = this.props.langState ? albumsen : albumspl;

      return <ScrollableAnchor id="albums">
        <section className="albums">
          <div className="container albums--box">
            <article className="article--left">
              <Fade left>
                <h2>
                  <span>{this.props.langState ? 'Albums' : 'Dyskografia'}</span>
                </h2>
              </Fade>
              {albumstext}
              <Fade>
                <ul>
                  {list}
                </ul>
              </Fade>
            </article>
          </div>
        </section>
      </ScrollableAnchor>
    }
  }
}
