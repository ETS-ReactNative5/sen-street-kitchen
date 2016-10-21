import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import Sen from './Sen';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Restaurant from './pages/Restaurant';
import NoMatch from './pages/NoMatch';

import 'normalize-css';
import './global.css';

ReactGA.initialize('UA-86033359-1');

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
    <Router onUpdate={logPageView} history={browserHistory}>
        <Route path="/" component={Sen}>
            <IndexRoute component={Home} />
            <Route path="about-us" component={About}/>
            <Route path="restaurants/:address" component={Restaurant} />
            <Route path="contact-us" component={Contact} />
            <Route path="work-at-sen" component={Contact} />
            <Route path="*" component={NoMatch}/>}
        </Route>
    </Router>,
    document.getElementById('root')
);
