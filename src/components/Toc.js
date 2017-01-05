/* eslint-disable */
import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/api/documentation">About these Docs</NavLink>
          </li>
          <li>
            <NavLink to="/api/synopsis">Usage & Examples</NavLink>
          </li>
        </ul>


        <div className="line"></div>


        <ul>
          <li>
            <NavLink to="#">Example NavLink</NavLink>
          </li>
          <li>
            <NavLink to="#">Example NavLink</NavLink>
          </li>
          <li>
            <NavLink to="#">Example NavLink</NavLink>
          </li>
        </ul>


        <div className="line"></div>


        <ul>
          <li>
            <a href="https://github.com/CraigglesO/ExampleDocs">Github Repository</a>
          </li>
          <li>
            <a href="/api/mail">Mailing List</a>
          </li>
        </ul>
      </div>
    );
  }
});
