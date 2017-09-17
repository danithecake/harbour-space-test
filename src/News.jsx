import React from 'react';

import './News.css';
import Tabs from './Tabs';

/**
 * Component for news container.
 * @extends React.PureComponent
 */
class News extends React.PureComponent {
  render() {
    return (
      <div className="News">
        <Tabs />
      </div>
    );
  }
}

export default News;
