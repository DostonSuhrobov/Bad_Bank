import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function Deposit() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {
    setBalance(balance + balance_1);
    setBalance1(0);
  }

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <h1>Balanace: {balance} </h1>
      <br />
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Deposit Amount</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="number"
            value={balance_1}
            onChange={e => setBalance1(parseInt(e.target.value))}
            placeholder="Enter deposit balanse"
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" onClick={calculate}>
          Deposit
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}

export default Deposit;
