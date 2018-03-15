import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";
import Nav from './components/nav.jsx';
import Header from './components/header.jsx';
import Menu from './components/menu.jsx';
import Bio from './components/bio.jsx';
import Albums from './components/albums.jsx';
import {StickyContainer, Sticky} from 'react-sticky';

document.addEventListener('DOMContentLoaded', function() {

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: 'none'
      };
    }

    toggleNav(newState) {
      this.setState({display: newState})
    };

    render() {
      return <div>
      <Nav navDisplay={this.state.display} updateNavDisplay={(newState) => this.toggleNav(newState)}/>
        <Header/>
        <StickyContainer>
          <Sticky>
          {/* dodaję sticky element Menu */}
          {({style}) => {return <Menu style={style} navDisplay={this.state.display} updateNavDisplay={(newState) => this.toggleNav(newState)}/>}}
          </Sticky>
          <Bio/>
          <Albums/>
        </StickyContainer>
      </div>
    }
  }

  ReactDOM.render(<App/>, document.getElementById('app'));
});
