import React, { useContext } from 'react';

import * as ReactBootstrap from 'react-bootstrap';

import { UserContext } from './createContext.js';

function AllPages() {
  const [info, setInfo] = useContext(UserContext);

  return (
    <div style={{ margin: 'auto', width: '600px' }}>
      <ReactBootstrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
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
            <td>{info[6]}</td>
            <td>{info[7]}</td>
            <td>{info[8]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{info[9]}</td>
            <td>{info[10]}</td>
            <td>{info[11]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{info[12]}</td>
            <td>{info[13]}</td>
            <td>{info[14]}</td>
          </tr>
        </tbody>
      </ReactBootstrap.Table>
    </div>
  );
}

export default AllPages;
