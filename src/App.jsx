import React from 'react';

import Header from './Header';
import Articles from './Articles'
import Footer from './Footer'

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
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
