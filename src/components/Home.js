import React, { Component } from 'react';

import Toc from './Toc'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div id="toc">
          <h2>Table of Contents</h2>
        </div>

        <Toc />

      </div>
    );
  }
}

export default Home;
