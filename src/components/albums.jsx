import React from "react";
import Fade from 'react-reveal/Fade';
import Album from './album.jsx';
import {albumspl, albumsen} from './locals/albumstext.jsx'

export default class Albums extends React.Component {

    state = {
      albums: false
    }

  componentDidMount() {
    this.getAlbums();
  };

  getAlbums = () => {
    fetch(`https://itunes.apple.com/search?term=monika+borzym&entity=album`).then(response => response.json()).then(albums => this.setState({albums: albums}));
  };

  getAlbumsList = () => this.state.albums.results;

  sortAlbumsByDate = (toSortList) => toSortList.sort((a,b) => (a.releaseDate.substr(0, 4) > b.releaseDate.substr(0, 4)) ? 1 : ((b.releaseDate.substr(0, 4)) ? -1 : 0));

  renderAlbumsList() {
  const albumsList = this.getAlbumsList();
  const sortedAlbumsList = this.sortAlbumsByDate(albumsList);
  return sortedAlbumsList.map((album, index) =>
     <Album key={album.collectionId} date={album.releaseDate.substr(0, 4)} cover={album.artworkUrl100} title={album.collectionName} details={album.collectionViewUrl} langState={this.props.langState}/>
  );
}

  render() {
    if (!this.state.albums) {
      return null;
    }
      const albumstext = this.props.langState ? albumsen : albumspl;

      return <section className="albums" id="albums">
          <div className="container albums--box">
            <article className="article--left">
              <Fade left>
                <h2>
                  <span>{this.props.langState ? 'Albums' : 'Dyskografia'}</span>
                </h2>
              </Fade>
              {albumstext}
              <ul>
                {this.renderAlbumsList()}
              </ul>
            </article>
          </div>
        </section>
    }
  }
