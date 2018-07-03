import React from "react";
import Fade from 'react-reveal/Fade';
import Divider from './Divider';
import {biopl, bioen} from './locals/biotext';
import {Parallax} from 'react-scroll-parallax';

export default class Bio extends React.Component {

  state = {
    height: 0
  }

  componentDidMount() {
    const h = this.article.clientHeight;
    this.setState({height: h});
  };

  componentDidUpdate(prevState) {
    const h = this.article.clientHeight;
    if (h !== this.state.height) {
      this.setState({height: h});
    }
  };

  render() {
    const isMobile = ((window.innerWidth < 768) && (window.innerHeight < 414))
      || ((window.innerHeight < 768));
    let bioText = this.props.langState ? bioen : biopl;

    return (
      <React.Fragment>
        <section className="bio" id="bio" style={{minHeight: `${this.state.height}px`}}>
          <div className="container">
            <Parallax
              offsetYMin={'-50%'}
              offsetYMax={'50%'}
              slowerScrollRate disabled={isMobile ? true : false}>
              <div
                className="bio--box"
                style={isMobile
                  ? {minHeight: `${this.state.height}px`} : {minHeight: `100vh`}}>
              </div>
            </Parallax>
            <article className="article--right" ref={(article) => this.article = article}>
              <Fade>
                <h2>
                  <span>Bio</span>
                </h2>
              </Fade>
              {bioText}
            </article>
          </div>
        </section>
        <Divider />
      </React.Fragment>
    )
  }
}
