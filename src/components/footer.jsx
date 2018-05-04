import React from "react";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let note = null;
    note = this.props.langState ? "assets/files/bio-eng.pdf" : "assets/files/bio-pl.pdf";
    
    return <footer>
      <div className="footer--container">
        <ScrollableAnchor id="press">
          <section className="press">
            <article className="article--center">
              <Fade left="left">
                <h2>{this.props.langState ? 'Press': 'Prasa'}</h2>
              </Fade>
              <Fade>
                <a href={note} target="_blank" download="download" type="application/pdf">
                  <i className="far fa-file-pdf fa-2x" aria-hidden="true"></i>
                  <span style={{paddingLeft: '10px'}}><strong>{this.props.langState ? 'DOWNLOAD NOTE' : 'POBIERZ NOTATKĘ'}</strong></span>(pdf)
                </a>
                <a href="assets/files/monika_borzym_pics.zip" download="download" type="application/zip">
                  <i className="far fa-file-archive fa-2x" aria-hidden="true"></i>
                  <span style={{paddingLeft: '10px'}}><strong>{this.props.langState ? 'DOWNLOAD PICTURES' : 'POBIERZ ZDJĘCIA'}</strong></span>
                  <span style={{whiteSpace: 'pre-wrap'}}>(zip)</span>
                </a>
              </Fade>
            </article>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <section className="contact">
            <article className="article--center">
              <Fade right="right">
                <h2>{this.props.langState ? 'Contact' : 'Kontakt'}</h2>
              </Fade>
              <Fade>
                <h3>Management & Booking (Poland)</h3>
                <p style={{paddingTop: '0.5em', textAlign: 'center', fontSize: '1.5em'}}>AGATA BORZYM</p>
                <p><span className="icon"><i className="fas fa-mobile-alt fa-2x" aria-hidden="true"></i></span>mobile:
                  <a href="tel:+48602499111"><span style={{whiteSpace: 'nowrap'}}><strong>+48 602 499 111</strong></span>
                  </a>
                </p>
                <p><span className="icon"><i className="fas fa-at fa-2x" aria-hidden="true"></i></span>MAIL:<a href="mailto:agata@borzym.pl">
                    <strong>agata@borzym.pl</strong>
                  </a>
                </p>
              </Fade>
            </article>
          </section>
        </ScrollableAnchor>
      </div>
    </footer>
  };
}
