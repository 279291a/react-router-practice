
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      <OldSchoolMenuLink to="/about" label="About" />

      <hr />
      <Route exact path="/" compoent={Home} />
      <Route path="/about" compoent={About} />
    </div>
  </Router>
);

const OldSchoolMenuLink = ({ activeOnlyWhenExact, label, to }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '????????' : ''}<Link to={to}>{label}</Link>
    </div>
  )} />
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default CustomLinkExample;