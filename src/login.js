import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContext } from './createContext.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

  

function Login() {

  // Registration part 

  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");


  const auth = getAuth();
  
  const login = async () => {

        try {
            const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    toast.success('Success!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });


  };

  const logout = async () => {
    await signOut(auth);
  };


  
  const [info, setInfo] = React.useContext(UserContext);


  return (
    <div style={{ margin: 'auto', width: '400px' }}>

        <ReactBootstrap.Form>


            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
                
                <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email" 
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                 />


   

            </ReactBootstrap.Form.Group>

            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicPassword">

                <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                type="password" 
                name="password"
                placeholder="Password" 
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}

                />



            </ReactBootstrap.Form.Group>


            <ReactBootstrap.Button variant="primary" type="submit" 
            onClick={login}
          >
                Login
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

export default Login;
