import React from "react";
import Fade from 'react-reveal/Fade';
import Album from './album.jsx';
import {albumspl, albumsen} from './locals/albumstext.jsx';
import {Parallax} from 'react-scroll-parallax';

export default class Albums extends React.Component {

  state = {
    albums: false,
    height: 0
  }

  componentDidMount() {
    this.getAlbums();

  };

  componentDidUpdate(prevState) {
    const h = this.article.clientHeight;
    if(h !== this.state.height) {
      this.setState({height: h});
    }
  };

  getAlbums = () => {
    fetch(`https://itunes.apple.com/search?term=monika+borzym&entity=album`).then(response => response.json()).then(albums => this.setState({albums: albums}));
  };

  getAlbumsList = () => this.state.albums.results;

  sortAlbumsByDate = (toSortList) => toSortList.sort(
    (a, b) => (a.releaseDate > b.releaseDate) ? 1 : ((b.releaseDate) ? -1 : 0));

  renderAlbumsList() {
    const albumsList = this.getAlbumsList();

    const sortedAlbumsList = this.sortAlbumsByDate(albumsList);

    return sortedAlbumsList.map((album, index) => <Album key={album.collectionId} date={album.releaseDate.substr(0, 4)} cover={album.artworkUrl100} title={album.collectionName} details={album.collectionViewUrl} langState={this.props.langState}/>);
  }

  render() {
    const isMobile = ((window.innerWidth < 768) && (window.innerHeight < 414)) || ((window.innerHeight < 768) && (window.innerWidth < 414));
    if (!this.state.albums) {
      return null;
    }
    const albumstext = this.props.langState ? albumsen : albumspl;

    return <section className="albums" id="albums" style={{
        minHeight: `${this.state.height}px`
      }}>
      <div className="container">
        <Parallax offsetYMin={'-90%'} offsetYMax={'90%'} slowerScrollRate disabled={isMobile ? true : false}>
          <div className="albums--box" style={isMobile ? {
              minHeight: `${this.state.height}px`
            } : {minHeight: `100vh`}}></div>
        </Parallax>
        <article className="article--left" ref={(article) => this.article = article}>
          <Fade>
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
