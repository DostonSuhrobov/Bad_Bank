import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function CreateAccount() {
  const [name_tmp, setName_tmp] = React.useState('');
  const [email_tmp, setEmail_tmp] = React.useState('');
  const [password_tmp, setPassword_tmp] = React.useState('');

  const [info, setInfo] = React.useContext(UserContext);




  const clearForm = e => {
    e.preventDefault();
    
    

    setInfo([...info,name_tmp,email_tmp, password_tmp]);



    console.log('info : ' + info + ' ' + typeof info);
    console.log('name_tmp : ' + name_tmp + ' ' + typeof name_tmp);
    console.log('email_tmp : ' + email_tmp + ' ' +  typeof email_tmp);
    console.log('password_tmp : ' + password_tmp + ' ' + typeof password_tmp);

    setName_tmp('');
    setEmail_tmp('');
    setPassword_tmp('');
  };


  return (
    <div style={{ margin: 'auto', width: '400px' }}>
    
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Name </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="text"
            placeholder="Enter your name"
            value={name_tmp}
            onChange={e => setName_tmp(e.currentTarget.value)}
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Email address </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="email"
            placeholder="Enter email"
            value={email_tmp}
            onChange={e => setEmail_tmp(e.currentTarget.value)}
          />
          <ReactBootstrap.Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </ReactBootstrap.Form.Text>
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <ReactBootstrap.Form.Label>Password </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="password"
            placeholder="Password"
            value={password_tmp}
            onChange={e => setPassword_tmp(e.currentTarget.value)}
          />
        </ReactBootstrap.Form.Group>
        <ReactBootstrap.Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <br />
        </ReactBootstrap.Form.Group>
        <ReactBootstrap.Button
          variant="primary"
          type="submit"
          onClick={clearForm}
        >
          Create Account
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}

export default CreateAccount;
