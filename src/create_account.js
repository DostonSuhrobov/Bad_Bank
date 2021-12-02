import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';


import { UserContext } from './createContext.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'



const initialValues = {
    name: '',
    email: '',
    password: ''
  };
  
  const onSubmit = values => {
    console.log('Form data : ', values);
  };
  
  const validate = values => {
    // values.name values.email values.password
    // errors.name errors.email errors.chanel
    // errors.name = 'This field is required'
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        values.email
      )
    ) {
      errors.email = 'Not Valid Email';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^(?=.*\d).{8,}$/i.test(values.password)) {
      errors.password = 'Minimum 8 characters required !';
    }
  
    return errors;
  };

  


function CreateAccount() {

  // Registration part 

  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");

  const auth = getAuth();
  
  const register = async () => {

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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

  setInfo([...info,formik.values.name,formik.values.email, formik.values.password]);
  formik.values.name = '';
  formik.values.email = '';
  formik.values.password = '';
  };


  // Front end side

  const [info, setInfo] = React.useContext(UserContext);



    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });





  return (
    <div style={{ margin: 'auto', width: '400px' }}>

        <ReactBootstrap.Form>


            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
                
                <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email" 
                // onChange={formik.handleChange} 
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                 />



                {formik.errors.email ? (
                    <div style={{ color: 'red' }}> {formik.errors.email}</div>
                    ) : null}     

            </ReactBootstrap.Form.Group>

            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicPassword">

                <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                type="password" 
                name="password"
                placeholder="Password" 
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}

                />

                {formik.errors.password ? (
                    <div style={{ color: 'red' }}> {formik.errors.password}</div>
                    ) : null}   


            </ReactBootstrap.Form.Group>


            <ReactBootstrap.Button variant="primary" type="submit" 
            onClick={register}
          >
                Signup
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

export default CreateAccount;
