import React from "react";
import Slide from 'react-reveal/Slide';
import menu from './lists/navlist.js';

export default class Nav extends React.Component {
  constructor({langState}) {
    super(langState);
    this.state = {
      en: langState,
      show: false
    }
  }
  handleMenuSwitch() {
    this.setState(prevState => ({show: !prevState.show}));
  };

  handleLangSwitch() {
    this.setState(prevState => ({en: !prevState.en}));
    this.state.en ? (this.props.updateLang(false)) : (this.props.updateLang(true));
  };

  render() {
    let langButton, menuList = null;

    menuList = menu.map((item, index) => {
      return <li key={index} className="menubar__nav--elem" onClick={() => this.handleMenuSwitch()}>
        <a href={`#${item.id}`}>{this.state.en ? item.sectionEn : item.sectionPl}</a>
      </li>
    });

    return <section className="menu__bar">
      <nav>
        <button type="button" className="menu__button header__button" style={{display: `${this.state.show ? 'none' : 'block'}`}} onClick={() => this.handleMenuSwitch()} aria-haspopup="true" aria-expanded={this.state.show} aria-controls="menu" aria-label="Navigation">MENU</button>
        <Slide force="force" right="right" duration={500} when={this.state.show}>
          <div style={{display: `${this.state.show ? 'block' : 'none'}`}} className="navi">
            <button type="button" className="menu__button" title={this.state.en ? "Zmień język na polski" : 'Switch language to english'} onClick={() => this.handleLangSwitch()}>{this.state.en ? 'POLSKI' : 'ENGLISH'}</button>
            <button type="button" className="button__close" onClick={() => this.handleMenuSwitch()} title={this.state.en ? "Zamknij menu" : 'Close menu'} aria-label="Close"></button>
            <ul className="menubar__nav">
              {menuList}
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
