import React from 'react';

import './Article.css';

/**
 * Component for article container.
 * @extends React.PureComponent
 */
class Article extends React.PureComponent {
  render() {
    return (
      <article className="Article">
        <div className="ArticleMedia"></div>
        <div className="ArticleInfo">
          <div className="ArticleInfoItem"></div>
          <div className="ArticleInfoItem"></div>
          <div className="ArticleInfoItem"></div>
          <div className="ArticleInfoItem"></div>
        </div>
      </article>
    );
  }
}

export default Article;
