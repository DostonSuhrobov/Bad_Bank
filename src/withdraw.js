import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Withdraw() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {
    setBalance(balance - balance_1);
    setBalance1(0);

    console.log(balance)

    if (balance <= 0){

      toast.warn('You have low funds!!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }

    else if( balance > 0 ){

      toast.success('Balance Updated!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }

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
            min='0'
            value={balance_1}
            placeholder="Enter your name"
            onChange={e => setBalance1(parseInt(e.target.value))}
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" onClick={calculate} disabled={!balance_1}>
          withdraw
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

export default Withdraw;
