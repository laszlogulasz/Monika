import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Bio from "./components/Bio";
import Albums from "./components/Albums";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos.js";
import Footer from "./components/Footer";
import { StickyContainer, Sticky } from "react-sticky";
import { CookiesProvider } from "react-cookie";
import { ParallaxProvider } from "react-scroll-parallax";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -60, scrollDuration: 350 });

class App extends React.Component {
  state = {
    en: false,
    isMobile: false
  };

  toggleLang(enState) {
    this.setState({ en: enState });
  }

  componentDidMount() {
    this.domainCheck();
    this.isMobileCheck();
    window.addEventListener("resize", this.isMobileCheck);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isMobileCheck);
  }

  isMobileCheck = () => {
    const checkMobile = window.innerWidth <= 667 || window.innerHeight <= 667;
    this.setState({ isMobile: checkMobile });
  };

  domainCheck = () => {
    const CheckEn = window.location.href.includes(".com") ? true : false;
    this.setState({ en: CheckEn });
  };

  render() {
    const { en, isMobile } = this.state;
    return (
      <ParallaxProvider>
        <Nav langState={en} updateLang={enState => this.toggleLang(enState)} />
        <CookiesProvider>
          <Header langState={en} isMobile={isMobile} />
        </CookiesProvider>
        <StickyContainer>
          <Sticky>
            {({ style }) => <Menu style={style} langState={en} />}
          </Sticky>
          <Projects langState={en} />
          <Bio langState={en} isMobile={isMobile} />
          <Albums langState={en} isMobile={isMobile} />
          <Gallery langState={en} />
          <Videos langState={en} />
          <Footer langState={en} />
        </StickyContainer>
      </ParallaxProvider>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
