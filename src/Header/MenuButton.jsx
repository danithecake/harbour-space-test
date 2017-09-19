import React from 'react';

import './MenuButton.css';

/**
 * Component for menu button.
 * @extends React.PureComponent
 */
class MenuButton extends React.PureComponent {
  render() {
    return (
      <a href className="header__link menu-button">
        <span className="menu-button__title">menu</span>
        <span className="menu-button__icon">
          <span className="menu-button__icon__bar">
            <span className="menu-button__icon__slider menu-button__icon__slider--top"></span>
          </span>
          <span className="menu-button__icon__bar">
          </span>
          <span className="menu-button__icon__bar">
            <span className="menu-button__icon__slider menu-button__icon__slider--bottom"></span>
          </span>
        </span>
      </a>
    );
  }
}

export default MenuButton;
