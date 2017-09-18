import React from 'react';

import './Promo.css';

/**
 * Component for promo article.
 * @extends React.PureComponent
 */
class Promo extends React.PureComponent {
  render() {
    return (
      <article className="promo">
        <h1 className="promo__title">
          harbour space is now in session
        </h1>
        <p className="promo__descr">
          The university welcomed its very first class of students with an inspiring
          session from legendary entrepreneur Kamran Elahian.
        </p>
        <a href className="promo__link">read more</a>
      </article>
    );
  }
}

export default Promo;
