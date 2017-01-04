import React, { Component } from 'react';
import Helmet from "react-helmet";

import './Example.css';

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <Helmet title="Example.js" />
        Example Front page
      </div>
    );
  }
}

export default Example;
