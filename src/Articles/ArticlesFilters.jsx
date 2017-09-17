import React from 'react';

import './ArticlesFilters.css';

/**
 * Component for articles filter.
 * @extends React.PureComponent
 */
class ArticlesFilters extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filters: [
        {key: 'all', title: 'all'},
        {key: 'article', title: 'articles'},
        {key: 'video', title: 'videos'}
      ]
    }
  }
  onFilterSelect = (filter) => {
    return (evt) => {
      evt.preventDefault();
      this.props.onFilterSelect(filter);
    };
  }

  render() {
    const filterClassName = 'articles__filters__filter';
    const filters = this.state.filters.map((filter, idx) => (
      <a
        href=""
        className={
          filterClassName + (this.props.active === filter.key ? ` ${filterClassName}--active` : '')
        }
        key={filter.key}
        onClick={this.onFilterSelect(filter.key)}
      >
        {filter.title}
      </a>
    ));

    return (
      <nav className="articles__filters">
        {filters}
      </nav>
    );
  }
}

ArticlesFilters.defaultProps = {
  active: 'all',
  onFilterSelect() {}
};

export default ArticlesFilters;
