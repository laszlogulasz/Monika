import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import Bio from './components/Bio';
import Albums from './components/Albums';
import Projects from './components/Projects';
import Gallery from './components/Gallery'
import Videos from './components/Videos.js';
import Footer from './components/Footer';
import {StickyContainer, Sticky} from 'react-sticky';
import {CookiesProvider} from 'react-cookie';
import {ParallaxProvider} from 'react-scroll-parallax';

class App extends React.Component {
  state = {
      en: false
  };

  toggleLang(enState) {
      this.setState({en: enState})
  };

  render() {
    return (
      <React.Fragment>
        <Nav
          langState={this.state.en}
          updateLang={(enState) => this.toggleLang(enState)}
        />
        <CookiesProvider>
          <Header langState={this.state.en} />
        </CookiesProvider>
        <StickyContainer>
          <Sticky>
            {({style}) => <Menu style={style} langState={this.state.en} />}
          </Sticky>
          <ParallaxProvider>
          <Bio langState={this.state.en} />
          <Albums langState={this.state.en} />
          </ParallaxProvider>
          <Projects langState={this.state.en} />
          <Gallery langState={this.state.en} />
          <Videos langState={this.state.en} />
          <Footer langState={this.state.en} />
        </StickyContainer>
      </React.Fragment>

    )
  }
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('app'));
});
