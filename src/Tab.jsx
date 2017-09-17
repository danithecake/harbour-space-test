import React from 'react';

import './Tab.css';

/**
 * Component for tab.
 * @extends React.PureComponent
 */
class Tab extends React.PureComponent {
  render() {
    return (
      <li className="Tab">{this.props.title}</li>
    );
  }
}

Tab.defaultProps = {
  title: ''
};

export default Tab;
