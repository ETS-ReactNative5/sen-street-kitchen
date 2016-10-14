import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Sen from './Sen';
import About from './pages/About';
import Contact from './pages/Contact';
import Restaurant from './pages/Restaurant';
import NoMatch from './pages/NoMatch';

import './global.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Sen}>
            <Route path="about-us" component={About}/>
            <Route path="restaurants/:address" component={Restaurant} />
            <Route path="contact-us" component={Contact} />

            {/*<Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
            </Route>*/}

            <Route path="*" component={NoMatch}/>}
        </Route>
    </Router>,
  document.getElementById('root')
);
