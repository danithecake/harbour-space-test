import React from 'react';

import Header from './Header';
import Banner from './Banner';
import Tabs from './Tabs';
import Articles from './Articles'
import Footer from './Footer'

import './App.css';

/**
 * Component for App container.
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    let articles = [];

    for (let i = 0; i < 15; i++) articles.push(i);

    this.state = {articles};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Tabs />
        <Articles articles={this.state.articles} />
        <Footer />
      </div>
    );
  }
}

export default App;
