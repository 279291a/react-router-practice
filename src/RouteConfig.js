import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const SandWiches = () => <h3>SandWiches</h3>;

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>
    {routes.map((route, index) => (
      <Route{...route} key={index} />
      ))}
  </div>
);

const routes = [
  {
    path: '/sandwiches',
    component: SandWiches,
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
  )}
  />
);

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/tacos">Tacos</Link></li>
        <li><Link to="/sandwiches">sandwiches</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </Router>
);

export default RouteConfigExample;
