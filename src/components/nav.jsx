import React from "react";
import ScrollableAnchor, {configureAnchors, removeHash} from 'react-scrollable-anchor';
import Slide from 'react-reveal/Slide';
import menu from './lists/navlist.js';
//import socList from './lists/soclist.jsx';

export default class Nav extends React.Component {
  constructor({langState}) {
    super();
    this.state = {
      en: langState,
      show: false
    }
  }
  handleMenuShow() {
    this.setState({show: true});
  };

  handleMenuClose() {
    this.setState({show: false});
  };

  handleLangSwitch() {
    let enState = null;
    this.state.en ? (enState = false) : (enState = true);
    this.setState({en: enState});
    this.props.updateLang(enState);
    this.handleMenuClose();
  };

  render() {
    let langButton,
      menuList = null;

    this.state.en ? (langButton = 'POLSKI') : (langButton = 'ENGLISH');

    const menuEn = menu.map((item, index) => {
      return <li key={index} className="menubar__nav--elem" onClick={() => this.handleMenuClose()}>
        <a href={`#${item.id}`}>{item.sectionEn}</a>
      </li>
    });

    const menuPl = menu.map((item, index) => {
      return <li key={index} className="menubar__nav--elem" onClick={() => this.handleMenuClose()}>
        <a href={`#${item.id}`}>{item.sectionPl}</a>
      </li>
    });

    return <section className="menu__bar">
      <nav>
        <button type="button" className="menu__button header__button" style={{display: `${this.state.show ? 'none' : 'block'}`}} onClick={() => this.handleMenuShow()}>MENU</button>
        <Slide force="force" right="right" duration={500} when={this.state.show}>
          <div style={{display: `${this.state.show ? 'block' : 'none'}`}} className="navi">
            <button type="button" className="menu__button" title={this.state.en ? "Zmień język na polski" : 'Switch language to english'} onClick={() => this.handleLangSwitch()}>{langButton}</button>
            <button type="button" className="button__close" onClick={() => this.handleMenuClose()} aria-label="Close"></button>
            <ul className="menubar__nav">
              {this.state.en ? (menuList = menuEn) : (menuList = menuPl)}
              <li>
                <ul className="social__nav">
                  <li className="social__nav--elem">
                    <a href="https://www.facebook.com/monikaborzym.music/" title={this.state.en ? "Go to Monikas Facebook" : 'Idź do Facebooka Moniki'}>
                      <i className="fab fa-facebook fa-3x"></i>
                    </a>
                  </li>
                  <li className="social__nav--elem">
                    <a href="https://www.instagram.com/moborzym/" title={this.state.en ? "Go to Monikas Instagram" : 'Idź do Instagrama Moniki'}>
                      <i className="fab fa-instagram fa-3x"></i>
                    </a>
                  </li>
                  <li className="social__nav--elem">
                    <a href="https://open.spotify.com/artist/6DlY4cWd9bU4huCgoqQ665?si=jsg2KDi_Q5iw2dmXjg1ikA" title={this.state.en ? "Find Monika on Spotify" : 'Znajdź Monikę na Spotify'}>
                      <i className="fab fa-spotify fa-3x"></i>
                    </a>
                  </li>
                  <li className="social__nav--elem">
                    <a href="https://soundcloud.com/monika-borzym" title={this.state.en ? "Find Monika on Soundcloud" : 'Znajdź Monikę na Soundcloud'}>
                      <i className="fab fa-soundcloud fa-3x"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Slide>
      </nav>
    </section>

  };
}
