import React from "react";
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";

const Footer = ({ ...props }) => {
  const note = props.langState
    ? "assets/files/bio-eng.pdf"
    : "assets/files/bio-pl.pdf";

  return (
    <footer>
      <div className="footer--container">
        <ScrollableAnchor id="press">
          <section className="press">
            <article className="article--center">
              <Fade left>
                <h2>{props.langState ? "Press" : "Prasa"}</h2>
              </Fade>
              <a
                href={note}
                target="_blank"
                download="download"
                type="application/pdf"
              >
                <i className="far fa-file-pdf fa-2x" aria-hidden="true" />
                <span style={{ paddingLeft: "10px" }}>
                  <strong>
                    {props.langState ? "DOWNLOAD NOTE" : "POBIERZ NOTATKĘ"}
                  </strong>
                </span>{" "}
                (pdf)
              </a>
              <a
                href="assets/files/monika_borzym_pics.zip"
                download="download"
                type="application/zip"
              >
                <i className="far fa-file-archive fa-2x" aria-hidden="true" />
                <span style={{ paddingLeft: "10px" }}>
                  <strong>
                    {props.langState ? "DOWNLOAD PICTURES" : "POBIERZ ZDJĘCIA"}
                  </strong>
                </span>
                <span style={{ whiteSpace: "pre-wrap" }}> (zip)</span>
              </a>
            </article>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <section className="contact">
            <article className="article--center">
              <Fade right>
                <h2>{props.langState ? "Contact" : "Kontakt"}</h2>
              </Fade>
              <h3>Management & Booking (Poland)</h3>
              <p
                style={{
                  paddingTop: "0.5em",
                  textAlign: "center",
                  fontSize: "1.5em"
                }}
              >
                AGATA BORZYM
              </p>
              <p>
                <span className="icon">
                  <i className="fas fa-mobile-alt fa-2x" aria-hidden="true" />
                </span>
                mobile:
                <a
                  href="tel:+48602499111"
                  title={props.langState ? "Call Agata" : "Zadzwoń do Agaty"}
                >
                  <span style={{ whiteSpace: "nowrap" }}>
                    <strong>+48 602 499 111</strong>
                  </span>
                </a>
              </p>
              <p>
                <span className="icon">
                  <i className="fas fa-at fa-2x" aria-hidden="true" />
                </span>MAIL:
                <a
                  href="mailto:agata@borzym.pl"
                  title={props.langState ? "Mail to Agata" : "Napisz do Agaty"}
                >
                  <strong>agata@borzym.pl</strong>
                </a>
              </p>
            </article>
          </section>
        </ScrollableAnchor>
      </div>
    </footer>
  );
};

export default Footer;
