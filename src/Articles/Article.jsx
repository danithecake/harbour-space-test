import React from 'react';

import './Article.css';

/**
 * Component for article.
 * @extends React.PureComponent
 */
class Article extends React.PureComponent {
  render() {
    return (
      <article className="article">
        <div className="article__media">
          <img src={this.props.img} alt={this.props.title} />
        </div>
        <div className="article__info">
          <p className="article__info__type">{this.props.type}</p>
          <h3 className="article__info__title">{this.props.title}</h3>
          <p className="article__info__author">{this.props.author}</p>
          <a href="" className="article__info__link">
            {this.props.type === 'article' ? 'read more' : 'watch video'}
          </a>
        </div>
      </article>
    );
  }
}

Article.defaultProps = {
  title: '',
  type: 'article',
  author: '',
  img: ''
};

export default Article;
