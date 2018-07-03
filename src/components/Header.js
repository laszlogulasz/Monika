import React from "react";
import Fade from 'react-reveal/Fade';
import { withCookies } from 'react-cookie';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cookies: props.cookies.get('cookies') || false
      };
    }

    handleCookiesAccept() {
      if (navigator.cookieEnabled) {
        const data = new Date();
        data.setTime(data.getTime() + (30 * 24*60*60*1000));
        document.cookie = `cookies=true; expires="${data.toGMTString()}; path="/"`;
        }
        this.setState({cookies: true})
    }

  render() {
    return (
      <header id="header">
        <h1>Monika Brzym - strona oficjalna</h1>
        <aside
          className="cookies__bar"
          style={this.state.cookies ? {display: 'none'} : null}>
          <div className="container cookies__info">
            <p>
              {this.props.langState
                ? `This site uses cookies to serve better. Further use of this site means that you accept their usage.`
                : `Ta strona korzysta z ciasteczek (Cookies) żeby lepiej działać. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.`}
            </p>
            <button
              type="button"
              className="button__close" onClick={() => this.handleCookiesAccept()}
              title={this.state.en ? "Zamknij menu" : 'Close menu'}
              aria-label="Close">
            </button>
          </div>
        </aside>
    </header>
    )
  }
}

export default withCookies(Header);
