import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the
    first child <code>&lt;Route></code> that
    matches. A <code>&lt;Route></code> with
    no <code>path</code> always matches.
  </p>
);

const WillMatch = () => (<h3>matched</h3>);

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/old-match">old-match</Link></li>
        <li><Link to="/will-match">will-match</Link></li>
        <li><Link to="/will-not-match">will not match</Link></li>
        <li><Link to="/also/will/not/match">also will not match</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect path="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default NoMatchExample;
