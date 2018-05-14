import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.jsx';
import Header from './components/header.jsx';
import Menu from './components/menu.jsx';
import Bio from './components/bio.jsx';
import Divider from './components/divider.jsx';
import Albums from './components/albums.jsx';
import Projects from './components/projects.jsx';
import Gallery from './components/gallery.jsx'
import Videos from './components/videos.jsx';
import Footer from './components/footer.jsx';
import {StickyContainer, Sticky} from 'react-sticky';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        en: false
      };
    }

    toggleLang(enState) {
      this.setState({en: enState})
    };


    render() {
      return <React.Fragment>
        <Nav langState={this.state.en} updateLang={(enState) => this.toggleLang(enState)}/>
        <Header/>
        <StickyContainer>
          <Sticky>
            {({style}) => <Menu style={style}/>}
          </Sticky>
          <Bio langState={this.state.en}/>
          <Divider/>
          <Albums langState={this.state.en}/>
          <Divider/>
          <Projects langState={this.state.en}/>
          <Divider/>
          <Gallery langState={this.state.en}/>
          <Divider/>
          <Videos langState={this.state.en}/>
          <Footer langState={this.state.en}/>
        </StickyContainer>
      </React.Fragment>
    }
  }
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
