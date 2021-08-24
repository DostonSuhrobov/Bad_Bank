import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

import About from './about.js';
import Home from './home.js';
import Products from '../products/products.js';
import './style.css';

export default function App() {
  return (
    <HashRouter>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <Link to="/">
            {' '}
            <ReactBootstrap.Navbar.Brand>
              Good Bank
            </ReactBootstrap.Navbar.Brand>{' '}
          </Link>

          <ReactBootstrap.Nav className="me-auto">
            <Link to="/home">
              {' '}
              <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/about">
              {' '}
              <ReactBootstrap.Nav.Link href="#about">
                About
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/products">
              {' '}
              <ReactBootstrap.Nav.Link href="#products">Products</ReactBootstrap.Nav.Link>{' '}
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>

      <br />

      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
    </HashRouter>


  );
}
