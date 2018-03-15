import React from "react";

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
    fetch(`https://itunes.apple.com/search?term=monika+borzym&entity=album`)
    .then(response => response.json())
    .then(albums => this.setState({albums: albums}));
  };

  render() {
    if (!this.state.albums) {
      return null;
    } else {
      const list = this.state.albums.results.map((album, index) => {
        return <li key={index}>{album.collectionName}
        </li>
      })
      return <ul>
        {list}
      </ul>
    }
  }

}
