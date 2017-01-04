import React, { Component } from 'react';
import Helmet from "react-helmet";

import Navigation from './components/Navigation';
import Header from './components/Header';
// import Content from './components/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Example.js" />
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
