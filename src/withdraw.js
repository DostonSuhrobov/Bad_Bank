import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function Withdraw() {
  return (
    <div style={{margin:'auto',width:'400px'}}>
      <h1>Balanace: 13.22</h1>
      <br/>
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