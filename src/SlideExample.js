import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    sideBar: () => <div>Home</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    exact: false,
    sideBar: () => <div>bubblegum</div>,
    main: () => <h2>bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    exact: false,
    sideBar: () => <div>shoelaces</div>,
    main: () => <h2>shoelaces</h2>,
  },
];

const SideBarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        backgroundColor: '#eee',
        width: '40%',
      }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bubblegum">bubblegum</Link>
          </li>
          <li>
            <Link to="/shoelaces">shoelaces</Link>
          </li>
        </ul>
        {
          routes.map((route, index) => (
            <Route path={route.path} key={index} exact={route.exact} component={route.sideBar} />
          ))
        }
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {
        routes.map((route, index) => (
          <Route path={route.path} key={index} exact={route.exact} component={route.main} />
        ))
      }
      </div>
    </div>

  </Router>

);

export default SideBarExample;
