import React, { useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function Withdraw() {
  const [balance, setBalance] = useContext(UserContext);
  

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <h1>Balanace: {balance}</h1>
      <br />
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Withdraw Amount</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="number"
            placeholder="Enter your name"
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" type="submit">
          withdraw
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}

export default Withdraw;
