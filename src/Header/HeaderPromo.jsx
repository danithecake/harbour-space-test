import React from 'react';

import './HeaderPromo.css';

/**
 * Component for promo bar in header.
 * @extends React.PureComponent
 */
class HeaderPromo extends React.PureComponent {
  render() {
    return (
      <section className="header-promo">
        <article className="header-promo__content">
          <h1 className="header-promo__title">
            harbour space is now in session
          </h1>
          <p className="header-promo__descr">
            The university welcomed its very first class of students with an inspiring
            session from legendary entrepreneur Kamran Elahian.
          </p>
          <a href className="header-promo__link">read more</a>
        </article>
      </section>
    );
  }
}

export default HeaderPromo;
