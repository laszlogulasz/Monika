import React from "react";
import Slide from 'react-reveal/Slide';
import navlist from './lists/navlist';
import soclist from './lists/soclist';

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
    let navList, socList = null;

    navList = navlist.map((item, index) => {
      return (
        <li key={item.id}
          className="menubar__nav--elem"
          onClick={() => this.handleMenuSwitch()}>
          <a href={`#${item.id}`}>{this.state.en ? item.sectionEn : item.sectionPl}</a>
        </li>
      )
    });

    socList = soclist.map((item, index) => {
      return (
        <li className="social__nav--elem" key={item.id}>
          <a
            href={item.url}
            title={this.state.en ? item.titleEn : item.titlePl}>
            <i className={`fab fa-${item.id} fa-3x`}></i>
          </a>
        </li>
      )
    });

    return (
      <section className="menu__bar">
        <nav>
            <button
              type="button"
              className="menu__button header__button"
              style={{display: `${this.state.show ? 'none' : 'block'}`}}
              onClick={() => this.handleMenuSwitch()}
              aria-haspopup="true"
              aria-expanded={this.state.show}
              aria-controls="menu"
              aria-label="menu">
                MENU
            </button>
            <Slide force right duration={500} when={this.state.show}>
              <div
                style={{display: `${this.state.show? 'block': 'none'}`}}
                className="navi">
                <button
                  type="button"
                  className="menu__button"
                  title={this.state.en
                    ? "Zmień język na polski" : 'Switch language to english'}
                  onClick={() => this.handleLangSwitch()}>
                  {this.state.en ? 'POLSKI' : 'ENGLISH'}
                </button>
                <button
                  type="button"
                  className="button__close"
                  onClick={() => this.handleMenuSwitch()}
                  title={this.state.en ? 'Close menu' : 'Zamknij menu'}
                  aria-label={this.state.en ? 'Close menu' : 'Zamknij menu'}>
                </button>
                <ul className="menubar__nav">
                  {navList}
                  <li>
                    <ul className="social__nav">
                      {socList}
                    </ul>
                  </li>
                </ul>
              </div>
            </Slide>
        </nav>
      </section>
    )
  };
}
