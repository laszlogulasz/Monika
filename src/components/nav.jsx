import React from "react";
import ScrollableAnchor, { configureAnchors, removeHash } from 'react-scrollable-anchor';
import menu from './lists/navlist.js';
import socList from './lists/soclist.jsx';

export default class Nav extends React.Component {
  constructor({langState}) {
    super();
    this.state = {
      display: 'none',
      en: langState
    }
  }
  handleMenuShow() {
  this.setState({display: 'block'});
};

  handleMenuClose() {
    this.setState({display: 'none'});
  };

  handleLangSwitch() {
    let enState = null;
    this.state.en ? (enState = false) : (enState = true);
    this.setState({en: enState});
    this.props.updateLang(enState);
    this.handleMenuClose();
  };

  render() {
    let switchMenu, langButton, menuList = null;

    (this.state.display == 'block') ? (switchMenu = 'off') : (switchMenu = 'on');

    this.state.en ? (langButton = 'POLSKI') : (langButton = 'ENGLISH');

    const menuEn = menu.map((item, index) => {
      return <li key={index} className="menubar__nav--elem" onClick={()=>this.handleMenuClose()}><a href={`#${item.id}`}>{item.sectionEn}</a></li>});

    const menuPl = menu.map((item, index) => {
      return <li key={index} className="menubar__nav--elem" onClick={()=>this.handleMenuClose()}><a href={`#${item.id}`}>{item.sectionPl}</a></li>});



    return <section className="menu__bar">
    <button type="button" className={`menu__button header__button ${switchMenu}`}  onClick={() => this.handleMenuShow()}>MENU</button>
      <nav style={{display: this.state.display}}>
      <button type="button" className="menu__button" onClick={()=>this.handleLangSwitch()}>{langButton}</button>
        <button type="button" className="button__close" onClick={()=>this.handleMenuClose()}></button>
      <div className="menulists">
          <ul className="menubar__nav">
        {this.state.en ? (menuList = menuEn) : (menuList = menuPl)}
          <li>
            {socList}
          </li>
        </ul>
      </div>
      </nav>
    </section>
  };
}
