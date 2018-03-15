import React from "react";

export default class Menu extends React.Component {
  constructor({navDisplay}) {
    super();
    this.state = {
      display: navDisplay
    }
  }

  handleMenuShow() {
    const newState = 'block';
    this.setState({display: newState});
    this.props.updateNavDisplay(newState);
  };

  render() {
    return <section className="menu__bar" style={{...this.props.style}}>
      <div className="menu__bar--container">
        <button type="button" className="menu__button" onClick={() => this.handleMenuShow()}>MENU</button>
        <img className="menubar__logo" src="/assets/images/mologowhite.svg"/>
        <button type="button" className="lang__button" style={{visibility: 'hidden'}}>ENGLISH</button>
      </div>
    </section>
  };
}
