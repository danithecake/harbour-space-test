import React from 'react';

import Promo from './Promo';
import './PromoBar.css';

/**
 * Component for promo container.
 * @extends React.PureComponent
 */
class PromoBar extends React.PureComponent {
  render() {
    return (
      <section className="promo-bar">
        <div className="promo-bar__banner"></div>
        <Promo />
      </section>
    )
  }
}

export default PromoBar;
