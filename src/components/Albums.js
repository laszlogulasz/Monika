import React from "react";
import Fade from 'react-reveal/Fade';
import Album from './Album';
import {mergeObjectsInArrs, mergeObjects, sortArrByParam} from '../utils'
import Divider from './Divider';
import {Parallax} from 'react-scroll-parallax';
import albumstext from './locals/albumstext';

export default class Albums extends React.Component {
  state = {
    albums: false,
    height: 0
  }

  componentDidMount() {
    this.getAlbums();
    let h = this.article.clientHeight;
      this.setState({height: h});
  };

  componentDidUpdate(prevState) {
    let h = this.article.clientHeight;
    if(h !== this.state.height) {
      this.setState({height: h});
    }
  };

  getAlbums = () => {
    fetch(`https://lit-escarpment-76555.herokuapp.com/https://itunes.apple.com/search?term=monika+borzym&entity=album`, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => response.json())
    .then(albums => this.setState({albums: albums.results}))
    .catch(() => {
        console.log("error");
    });
  };

  renderAlbumsList() {
    const albumsList = this.state.albums;
    const sortedAlbumsList = albumsList
    ? sortArrByParam(albumsList, 'releaseDate') : null;
    const finalList = albumsList
    ? mergeObjectsInArrs(sortedAlbumsList, albumstext, mergeObjects) : albumstext;

    return (
      finalList.map((album, index) => albumsList ?
        <Album
          key={ album.collectionId}
          date={album.releaseDate.substr(0, 4)}
          cover={album.artworkUrl100}
          title={album.title}
          active={this.state.albums}
          details={album.collectionViewUrl}
          langState={this.props.langState}
          descpl={album.descpl}
          descen={album.descen}
        />
       :
        <Album
          title={album.title}
          key={index}
          descpl={album.descpl}
          descen={album.descen}
        />
      )
    )
  }

  render() {
    const isMobile = ((window.innerWidth < 768) && (window.innerHeight < 414))
      || (window.innerHeight < 768);
    const isOldMobile = (window.innerHeight < 568)

    return (
      <React.Fragment>
        <section
          className="albums"
          id="albums"
          style={isMobile ?
            {minHeight: `${this.state.height + 200}px`}
          : {minHeight: `${this.state.height}px`}}>
          <div className="container">
            <Parallax
              offsetYMin={'-90%'}
              offsetYMax={'90%'}
              slowerScrollRate
              disabled={isMobile ? true : false}>
              <div className="albums--box" style={isMobile ? {
                  minHeight: `${this.state.height + 200}px`
                } : {minHeight: `100vh`}}></div>
            </Parallax>
            <article
              className="article--left"
              ref={(article) => this.article = article}>
              <Fade>
                <h2>
                  <span>{this.props.langState ? 'Albums' : 'Dyskografia'}</span>
                </h2>
              </Fade>
              <ul>{this.renderAlbumsList()}</ul>
            </article>
          </div>
        </section>
        <Divider />
      </React.Fragment>
    )
  }
}
