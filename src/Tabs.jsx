import React from 'react';

import './Tabs.css';
import Tab from './Tab';

/**
 * Component for tabs container.
 * @extends React.PureComponent
 */
class Tabs extends React.PureComponent {
  _tabs = [{title: 'all'}, {title: 'articles'}, {title: 'videos'}].map((tab, idx) => (
      <Tab key={idx} title={tab.title} />
    ));

  render() {
    return (
      <ul className="Tabs">
        {this._tabs}
      </ul>
    );
  }
}

export default Tabs;
