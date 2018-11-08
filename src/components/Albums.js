import React from "react";
import Fade from "react-reveal/Fade";
import Album from "./Album";
import { mergeObjectsInArrs, sortArrByParam } from "../utils";
import Divider from "./Divider";
import { Parallax } from "react-scroll-parallax";
import ScrollableAnchor from "react-scrollable-anchor";
import albumstext from "./locals/albumstext";

export default class Albums extends React.Component {
  state = {
    albums: false,
    height: 0
  };

  componentDidMount() {
    let h = this.art.clientHeight;
    this.getAlbums();
    this.setState({ height: h });
  }

  getAlbums = () => {
    fetch(
      `https://lit-escarpment-76555.herokuapp.com/https://itunes.apple.com/search?term=monika+borzym&entity=album`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
      .then(response => response.json())
      .then(albums =>
        this.setState({
          albums: albums.results.filter((item, index) => index < 4)
        })
      )
      .catch(() => {
        console.log("error");
      });
  };

  renderAlbumsList() {
    const { albums } = this.state;
    if (albums) {
      const sortedAlbums = sortArrByParam(albums, "releaseDate");
      const finalList = mergeObjectsInArrs(sortedAlbums, albumstext);
      return finalList.map((album, index) => (
        <Album
          key={album.collectionId}
          date={album.releaseDate.substr(0, 4)}
          cover={album.artworkUrl100}
          title={album.title}
          active={this.state.albums}
          details={album.collectionViewUrl}
          langState={this.props.langState}
          descpl={album.descpl}
          descen={album.descen}
        />
      ));
    } else {
      return albumstext.map((album, index) => (
        <Album
          title={album.title}
          key={index}
          descpl={album.descpl}
          descen={album.descen}
        />
      ));
    }
  }

  render() {
    return (
      <React.Fragment>
        <ScrollableAnchor id="albums">
          <section
            className="albums"
            style={
              this.props.isMobile
                ? { minHeight: `${this.state.height + 200}px` }
                : { minHeight: `${this.state.height}px` }
            }
          >
            <div className="container">
              <Parallax
                offsetYMin={"-70%"}
                offsetYMax={"90%"}
                slowerScrollRate
                disabled={this.props.isMobile ? true : false}
              >
                <div
                  className="albums--box"
                  style={
                    this.props.isMobile
                      ? {
                          minHeight: `${this.state.height + 200}px`
                        }
                      : { minHeight: `100vh` }
                  }
                />
              </Parallax>
              <article className="article--left" ref={art => (this.art = art)}>
                <Fade>
                  <h2>
                    <span>
                      {this.props.langState ? "Albums" : "Dyskografia"}
                    </span>
                  </h2>
                </Fade>
                <ul>{this.renderAlbumsList()}</ul>
              </article>
            </div>
          </section>
        </ScrollableAnchor>
        <Divider />
      </React.Fragment>
    );
  }
}
