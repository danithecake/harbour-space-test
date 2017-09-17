import React from 'react';

import HeaderPromo from './HeaderPromo';
import HeaderBar from './HeaderBar';
import './Header.css';

/**
 * Component for header bar.
 * @extends React.PureComponent
 */
class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <HeaderBar />
        <HeaderPromo />
        <div className="header__banner"></div>
      </header>
    )
  }
}

export default Header;
