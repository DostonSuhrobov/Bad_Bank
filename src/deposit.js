import React, { useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

const { balance, setBalance } = useContext(UserContext);

function calculate() {
  var deposit_value = document.getElementById('deposit_field').value;
}

function Deposit() {
  const { balance, setBalance } = useContext(UserContext);

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <h1>Balanace: {balance} </h1>
      <br />
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Deposit Amount</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            id="deposit_field"
            type="number"
            placeholder="Enter your name"
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button
          variant="primary"
          type="submit"
          onClick={calculate}
        >
          Deposit
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}

export default Deposit;
