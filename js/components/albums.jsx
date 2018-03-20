import React from "react";
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Album from './album.jsx';

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
      const list = this.state.albums.results.map((album, index) => {
        return <Album key={index} date={album.releaseDate.substr(0, 4)} cover={album.artworkUrl100} title={album.collectionName} details={album.collectionViewUrl}/>
      })
      return <ScrollableAnchor id="2">
        <section id="albums">
          <div className="container albums--box">
            <article className="left">
              <h2>
                <span>Dyskografia</span>
              </h2>
              <ul>
                {list}
              </ul>
            </article>
          </div>
        </section>
      </ScrollableAnchor>
    }
  }

}
