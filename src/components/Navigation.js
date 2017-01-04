/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';

import Toc from './Toc'

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">

        <div id="intro">
          <Link to="/">Example.js</Link>
        </div>

        <Toc />

      </div>
    );
  }
}

export default Navigation;
