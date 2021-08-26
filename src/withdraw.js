import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function Withdraw() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {
    setBalance(balance - balance_1);

  }

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <h1>Balanace: {balance}</h1>
      <br />
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Withdraw Amount</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="number"
            value={balance_1}
            placeholder="Enter your name"
            onChange={e => setBalance1(parseInt(e.target.value))}
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" onClick={calculate}>
          withdraw
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}

export default Withdraw;
