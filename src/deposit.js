import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function Deposit() {
  const [ balance, setBalance ] = useContext(UserContext);
  const [ balance_1, setNumber1 ] = useState(0);
  const [ total, setTotal ] = useState(0)

function calculate(){
    setTotal(balance + balance_1);
    console.log('total is : ' + total);

}

  return (
  
    <div style={{ margin: 'auto', width: '400px' }}>




      <h1>Balanace: {total} </h1>
      <br />
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Deposit Amount</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="number"
            value={balance_1}
            onChange={e => setNumber1(e.target.value)}
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
