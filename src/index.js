import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Example from './Example';
import App from './App';
import Home from './components/Home';

import Documentation from './components/docs/Documentation';
import Synopsis from './components/docs/Synopsis';

import './index.css';

ReactDOM.render(
  <Router
    history={browserHistory}
    onUpdate={hashLinkScroll}
  >
    <Route path="/" component={Example}/>
    <Route path="/api" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/api/documentation" component={Documentation}/>
      <Route path="/api/synopsis" component={Synopsis}/>

    </Route>
    {/* add the routes here */}

  </Router>,
  document.getElementById('root')
);

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}
