import React from "react";

export default class Nav extends React.Component {
  constructor({navDisplay}) {
    super();
    this.state = {
      display: navDisplay
    }
  }

  handleMenuClose() {
    const newState = 'none';
    this.setState({display: newState});
    this.props.updateNavDisplay(newState);
  };
  render() {
    return <section className="menu__bar">
      <nav  style={{display: this.props.navDisplay}}>
        <button type="button" onClick={()=>this.handleMenuClose()}></button>
        <ul className="menubar__nav">
          <li className="menubar__nav--elem" onClick={()=>this.handleMenuClose()}>Bio</li>
          <li className="menubar__nav--elem">Dyskografia</li>
          <li className="menubar__nav--elem">Projekty</li>
          <li className="menubar__nav--elem">Galeria</li>
          <li className="menubar__nav--elem">Video</li>
          <li className="menubar__nav--elem">Prasa</li>
          <li className="menubar__nav--elem">Kontakt</li>
          <li>
            <ul className="social__nav">
              <li className="social__nav--elem">
                <i className="fab fa-facebook fa-3x"></i>
              </li>
              <li className="social__nav--elem">
                <i className="fab fa-instagram fa-3x"></i>
              </li>
              <li className="social__nav--elem">
                <i className="fab fa-spotify fa-3x"></i>
              </li>
              <li className="social__nav--elem">
                <i className="fab fa-soundcloud fa-3x"></i>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  };
}
