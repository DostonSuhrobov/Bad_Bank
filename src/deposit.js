import React, { createElement, useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { getDatabase, ref, onValue, set } from "firebase/database";

import { initializeApp } from 'firebase/app'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqg7LLfd49TuQE_Kn8AifWXhzJNkTB7KA",
  authDomain: "react-firechat-f3539.firebaseapp.com",
  projectId: "react-firechat-f3539",
  storageBucket: "react-firechat-f3539.appspot.com",
  messagingSenderId: "571094429249",
  appId: "1:571094429249:web:ae5ed730a0a2d8743260c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




function Deposit() {
  const [balance, setBalance] = useState(0);
  const [balance_1, setBalance1] = useState(0);


  // reading the data section 
  function balance_disp(data){

    console.log(data);
    
    document.getElementById('here').textContent = data;
    document.getElementById('here').value = data;

  }

  
  const db = getDatabase();
  const balanceRef = ref(db, 'balance/balance');
  onValue(balanceRef, (snapshot) => {        
    
    const data = snapshot.val();
    balance_disp(data);
  })


// writing the data to the firebase


  function calculate() {


      let balance_ = document.getElementById('here').value;
      let total_balance = balance_1 + balance_;
      
        const db = getDatabase();
        set(ref(db, 'balance/'), {
          balance:total_balance
        });


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

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      {


      }
      
      <h1>Balanace: <p id='here'> </p> </h1>
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
