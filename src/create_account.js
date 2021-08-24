import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function Products() {
  return (
    <div style={{margin:'auto',width:'400px'}}>
    <ReactBootstrap.Form>
      <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
        <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
        <ReactBootstrap.Form.Control
          type="text"
          placeholder="Enter your name"
        />
      </ReactBootstrap.Form.Group>

      <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicEmail">
        <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
        <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
        <ReactBootstrap.Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </ReactBootstrap.Form.Text>
      </ReactBootstrap.Form.Group>

      <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicPassword">
        <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
        <ReactBootstrap.Form.Control type="password" placeholder="Password" />
      </ReactBootstrap.Form.Group>
      <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicCheckbox">
        <br />
      </ReactBootstrap.Form.Group>
      <ReactBootstrap.Button variant="primary" type="submit">
        Create Account
      </ReactBootstrap.Button>
    </ReactBootstrap.Form>
</div>
  );
}

export default Products;
