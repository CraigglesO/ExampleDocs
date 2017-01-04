import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Example.js v1.0.0 Documentation</h1>
        <div className="links">
          <p>
            <Link to="/api">Index</Link> | <a href="#">Github Repository</a> | <Link to="#">Home</Link>
          </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
