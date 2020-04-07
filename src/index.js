import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyRouterMiddleware,
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Redirect,
} from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';
import ReactGA from 'react-ga';

import Sen from './Sen';
import Home from './pages/Home';
// import About from './pages/About';
import Contact from './pages/Contact';
import Restaurant from './pages/Restaurant';
import Careers from './pages/Careers';
import NoMatch from './pages/NoMatch';

import 'normalize-css';
import './global.css';

ReactGA.initialize('UA-86033359-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Router
    onUpdate={logPageView}
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={Sen}>
      <IndexRoute component={Home} />
      <Route path="restaurants/:address" component={Restaurant} />
      <Route path="contact-us" component={Contact} />
      <Route path="careers" component={Careers} />
      <Redirect
        from="stockholm-regeringsgatan-26--sen-street-kitchen.html"
        to="restaurants/regeringsgatan-26"
      />
      <Redirect
        from="stockholm-kungsbron-8--sen-street-kitchen.html"
        to="restaurants/kungsbron-8"
      />
      <Redirect
        from="umea-avion-shopping--sen-street-kitchen.html"
        to="restaurants/avion-shopping"
      />
      <Route path="*" component={NoMatch} />}
    </Route>
  </Router>,
  document.getElementById('root')
);
