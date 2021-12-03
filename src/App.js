import React, { useState } from 'react';
import logo from './logo.svg';
import { Route, Link, HashRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

import All_pages from './all_pages.js';
import Home from './home.js';
import Withdraw from './withdraw.js';
import CreateAccount from './create_account.js';
import Deposit from './deposit.js';
import Login from './login.js';
import { UserContext } from './createContext.js';
import './style.css';


import { getAuth, onAuthStateChanged} from 'firebase/auth'
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

const auth = getAuth();





export default function App() {
  const [info, setInfo] = useState(''); // this is for passing the information to the children
  const [balance, setBalance] = useState(0);


        // know if the user is logged
        const [user, setUser] = useState({});

        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
    
        console.log(user);



  return (
    <HashRouter>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <Link to="/">
            {' '}
            <ReactBootstrap.Navbar.Brand>
              <img src={logo} width="50" height="40" />
              Good Bank
            </ReactBootstrap.Navbar.Brand>{' '}
          </Link>
          

          <ReactBootstrap.Nav className="me-auto">
            <Link to="/home">
              {' '}
              <ReactBootstrap.Nav.Link href="#home">
                Home
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/all_pages">
              {' '}
              <ReactBootstrap.Nav.Link href="#all_pages">
                All Pages
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

            <Link to="/create_account">
              {' '}
              <ReactBootstrap.Nav.Link href="#create_account">
                Create Account
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/login">
              {' '}
              <ReactBootstrap.Nav.Link href="#create_account">
                Login
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            {user ? <p style={{color: 'white', marginLeft:'150px'}}> Hello {user.email} </p> : <p style={{color: 'white', marginLeft:'150px'}}> No User</p>}
  
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>

      </ReactBootstrap.Navbar>


      <br />
      <UserContext.Provider value={[ info, setInfo ]}>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/all_pages" component={All_pages} />
        <Route path="/create_account" component={CreateAccount} />
        <Route path="/login" component={Login} />
      </UserContext.Provider>
      <UserContext.Provider value={[balance, setBalance]}>
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/deposit" component={Deposit} />
      </UserContext.Provider>
    </HashRouter>
  );
}
