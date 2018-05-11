import React from "react";
import Fade from 'react-reveal/Fade';
import {biopl, bioen} from './locals/biotext.jsx'

export default class Bio extends React.Component {

  render() {

    let bioText = this.props.langState ? bioen : biopl;

    return <section className="bio" id="bio">
        <div className="container bio--box">
          <article className="article--right">
            <Fade right>
              <h2>
                <span>Bio</span>
              </h2>
            </Fade>
            {bioText}
          </article>
        </div>
      </section>
  }
}
