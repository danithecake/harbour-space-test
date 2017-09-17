import React from 'react';

import './HeaderBar.css';

/**
 * Component for header bar.
 * @extends React.PureComponent
 */
class HeaderBar extends React.PureComponent {
  render() {
    return (
      <nav className="header__bar container">
        <a href className="header__bar__link header__bar__link--root">harbour.space</a>
        <span className="header__bar__separator">&nbsp;/&nbsp;</span>
        <a href className="header__bar__link header__bar__link--page">news & insights</a>
        <a href className="header__bar__link header__bar__link--login">log in</a>
        <a href className="header__bar__link header__bar__link--menu">menu</a>
      </nav>
    )
  }
}

export default HeaderBar;
