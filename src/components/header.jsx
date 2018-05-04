import React from "react";
import Fade from 'react-reveal/Fade';
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mounted: false
    }
  };

  componentWillMount() {
    this.setState({mounted: true})
  }
  render() {

    return <header id="header">

      <Fade>
      {this.state.mounted &&  <div className="logo" >
          <h1>Monika Brzym - strona oficjalna</h1>
        </div>}
      </Fade>
    </header>

  }
}
