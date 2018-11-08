import React from "react";
import Fade from "react-reveal/Fade";
import Divider from "./Divider";
import { biopl, bioen } from "./locals/biotext";
import { Parallax } from "react-scroll-parallax";
import ScrollableAnchor from "react-scrollable-anchor";

export default class Bio extends React.Component {
  state = {
    height: 0
  };

  componentDidMount() {
    const h = this.article.clientHeight;
    this.setState({ height: h });
  }

  componentDidUpdate(prevState) {
    const h = this.article.clientHeight;
    if (h !== this.state.height) {
      this.setState({ height: h });
    }
  }

  render() {
    let bioText = this.props.langState ? bioen : biopl;
    return (
      <React.Fragment>
        <ScrollableAnchor id="bio">
          <section
            className="bio"
            style={{ minHeight: `${this.state.height}px` }}
          >
            <div className="container">
              <Parallax
                offsetYMin={"-20%"}
                offsetYMax={"50%"}
                slowerScrollRate
                disabled={this.props.isMobile ? true : false}
              >
                <div
                  className="bio--box"
                  style={
                    this.props.isMobile
                      ? { minHeight: `${this.state.height}px` }
                      : { minHeight: `100vh` }
                  }
                />
              </Parallax>
              <article
                className="article--right"
                ref={article => (this.article = article)}
              >
                <Fade>
                  <h2>
                    <span>Bio</span>
                  </h2>
                </Fade>
                {bioText}
              </article>
            </div>
          </section>
        </ScrollableAnchor>
        <Divider />
      </React.Fragment>
    );
  }
}
