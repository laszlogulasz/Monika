import React from "react";
import { goToTop } from 'react-scrollable-anchor'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: 'hidden'
    }
  }

  handleGoToTop() {
    goToTop();
  }

  componentWillReceiveProps(nextProps) {
  if ((nextProps.style.position) == "fixed") {
    this.setState({ activeClass: 'visible' });
  } else if ((nextProps.style.position) !== "fixed") {
    this.setState({ activeClass: 'hidden' });
  }
}

  render() {
    return <section className="menu__bar" style={{...this.props.style}}>
      <div className="menu__bar--container">
        <div className={this.state.activeClass} onClick={() => this.handleGoToTop()}><img className="menubar__logo" src="assets/images/mologowhite.svg" alt="Do góry strony / go to top" style={{cursor: 'pointer'}}  title={this.props.langState ? 'Jump to top' : 'Skocz do góry'} role="button"/></div>

      </div>
    </section>
  };
}