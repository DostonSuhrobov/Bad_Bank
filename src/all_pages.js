import React, { useContext } from 'react';

import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function AllPages() {
  const [ info, setInfo ] = useContext(UserContext);
  

  return (
    <>
   <ReactBootstrap.Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Email</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{info[0]}</td>
      <td>{info[1]}</td>
      <td>{info[2]}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{info[3]}</td>
      <td>{info[4]}</td>
      <td>{info[5]}</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">{info[6]}</td>
      <td>{info[7]}</td>
    </tr>
  </tbody>
</ReactBootstrap.Table>
      
    </>
  );
}

export default AllPages;
