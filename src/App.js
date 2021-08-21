import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

import About from './about.js';
import Home from './home.js';
import Products from '../products/products.js';
import './style.css';

export default function App() {
  const UserContext = React.createContext(null);

  return (
    <HashRouter>
      <Link to="/"> Home </Link> --
      <Link to="/about"> About </Link>--
      <Link to="/products"> Products </Link>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
    </HashRouter>
  );
}
