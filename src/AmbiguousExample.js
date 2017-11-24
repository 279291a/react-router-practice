import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const About = () => (
  <h3>About</h3>
);

const Company = () => (
  <h3>Company</h3>
);

const User = ({ match }) => (
  <div>
    <h2>user:{match.params.user}</h2>
  </div>
);

const AmbiguousExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/company">company</Link></li>
        <li><Link to="/kim">kim</Link></li>
        <li><Link to="/chris">chris</Link></li>
      </ul>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/company" component={Company} />
        <Route path="/:user" component={User} />
      </Switch>
    </div>
  </Router>
);


export default AmbiguousExample;

