import React from "react";
import Fade from "react-reveal/Fade";
import { withCookies } from "react-cookie";
import { Parallax } from "react-scroll-parallax";
import Divider from "./Divider";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies.get("cookies") || false
    };
  }

  handleCookiesAccept() {
    if (navigator.cookieEnabled) {
      const data = new Date();
      data.setTime(data.getTime() + 30 * 24 * 60 * 60 * 1000);
      document.cookie = `cookies=true; expires="${data.toGMTString()}; path="/"`;
    }
    this.setState({ cookies: true });
  }

  render() {
    return (
      <header id="header" className="header">
        <Parallax
          offsetYMin={"-80%"}
          offsetYMax={"80%"}
          slowerScrollRate
          disabled={this.props.isMobile ? true : false}
        >
          <div className="header__background">
            <h1>Monika Brzym - strona oficjalna</h1>
          </div>
        </Parallax>
        <aside
          className="cookies__bar"
          style={this.state.cookies ? { display: "none" } : null}
        >
          <div className="container cookies__info">
            <p>
              {this.props.langState
                ? `This site uses cookies to serve better. Further use of this site means that you accept their usage.`
                : `Ta strona korzysta z ciasteczek (Cookies) żeby lepiej działać. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.`}
            </p>
            <button
              type="button"
              className="button__close"
              onClick={() => this.handleCookiesAccept()}
              title={this.state.en ? "Zamknij menu" : "Close menu"}
              aria-label="Close"
            />
          </div>
        </aside>
      </header>
    );
  }
}

export default withCookies(Header);
