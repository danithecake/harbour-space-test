import React from 'react';

import './Header.css';

/**
 * Component for header.
 * @extends React.PureComponent
 */
class Header extends React.PureComponent {
  render() {
    return (
      <header className="header container">
        <a href className="header__link header__link--root">harbour.space</a>
        <span className="header__separator">&nbsp;/&nbsp;</span>
        <a href className="header__link header__link--page">news & insights</a>
        <a href className="header__link header__link--login">log in</a>
        <a href className="header__link header__link--menu">menu</a>
      </header>
    )
  }
}

export default Header;
