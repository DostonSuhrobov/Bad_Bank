import React from 'react';
import logo from './logo.svg';
import { Route, Link, HashRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

import About from './about.js';
import Home from './home.js';
import Withdraw from './withdraw.js';
import Products from '../products/products.js';
import Deposit from './deposit.js';
import './style.css';

export default function App() {
  return (
    <HashRouter>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <Link to="/">
            {' '}
            <ReactBootstrap.Navbar.Brand>
              <img src={logo} width="50" height="40" />Good Bank
            </ReactBootstrap.Navbar.Brand>{' '}
          </Link>

          <ReactBootstrap.Nav className="me-auto">
            <Link to="/home">
              {' '}
              <ReactBootstrap.Nav.Link href="#home">
                Home
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/about">
              {' '}
              <ReactBootstrap.Nav.Link href="#about">
                All Pages
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/products">
              {' '}
              <ReactBootstrap.Nav.Link href="#products">
                Create Account
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/withdraw">
              {' '}
              <ReactBootstrap.Nav.Link href="#withdraw">
                Withdraw
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/deposit">
              {' '}
              <ReactBootstrap.Nav.Link href="#deposit">
                Deposit
              </ReactBootstrap.Nav.Link>{' '}
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>

      <br />

      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/withdraw" component={Withdraw} />
      <Route path="/deposit" component={Deposit} />
    </HashRouter>
  );
}
