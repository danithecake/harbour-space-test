import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Article from './Article'
import ArticlesFilters from './ArticlesFilters';
import articlesStore from './articles-store';
import './Articles.css';

/**
 * Top level component for articles block.
 * @extends React.PureComponent
 */
class Articles extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {articles: [], filter: 'all'};
  }

  componentDidMount() {
    this._filterArticles(this.state.filter);
  }

  _onFilterSelect = filter => {
    this.setState({filter});
    this._filterArticles(filter);
  }

  _filterArticles = (filter) => {
    const articles = filter === 'all' ?
      articlesStore.all() :
      articlesStore.filter(article => article.type === filter);

    this.setState({articles});
  }

  render() {
    const articles = this.state.articles.map(article => (
      <Article key={article.id} {...article} />
    ));

    return (
      <section className="articles container">
        <ArticlesFilters
          className="container"
          onFilterSelect={this._onFilterSelect}
          active={this.state.filter}
        />
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {articles}
        </CSSTransitionGroup>
        <a href="" className="articles__show-more">
          <span className="articles__show-more__title">show more</span>
        </a>
      </section>
    );
  }
}

Articles.defaultProps = {
  articles: []
};

export default Articles;
