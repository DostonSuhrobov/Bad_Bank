import React, { useContext } from 'react';

import { UserContext } from './createContext.js';

function AllPages() {
  const [ info, setInfo ] = useContext(UserContext);

  return (
    <>
      <h1>Here should be an information of the users. {info}</h1>
      <button onClick={() => setInfo('Customer')}> chnage Value</button>
    </>
  );
}

export default AllPages;
