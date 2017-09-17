import React from 'react';

import Article from './Article'
import './Articles.css';

/**
 * Component for articles container.
 * @extends React.PureComponent
 */
class Articles extends React.PureComponent {
  render() {
    const articles = this.props.articles.map((article, idx) => (
      <Article key={idx} />
    ));

    return (
      <section className="Articles">
        {articles}
      </section>
    );
  }
}

Articles.defaultProps = {
  articles: []
};

export default Articles;
