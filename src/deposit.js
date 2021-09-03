import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Deposit() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {

    setBalance(balance + balance_1);
    console.log(balance);
 
      toast.success('Balance Updated!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

    


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
            min='0'
            value={balance_1}
            onChange={e => setBalance1(parseInt(e.target.value))}
            placeholder="Enter deposit balanse"
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" onClick={calculate} disabled={!balance_1}>
          Deposit
        </ReactBootstrap.Button>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </ReactBootstrap.Form>
    </div>
  );
}

export default Deposit;
