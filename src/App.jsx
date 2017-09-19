import React from 'react';

import Header from './Header';
import Articles from './Articles'
import PromoBar from './PromoBar';

import './App.css';

/**
 * Component for App container.
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <PromoBar />
        <Articles />
      </div>
    );
  }
}

export default App;
