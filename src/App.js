import React from 'react';
import { authenticate } from '@onflow/fcl';
import useCurrentUser from './lib/utils';
import Dashboard from './components/Dashboard';
import "./App.css"

const App = () => {
  const { addr, loggedIn } = useCurrentUser();
  return (
    <div className='app'>
      {!loggedIn && 
      <div className='main'>
        <div className='connect'>
          <h1>Welcome to Daily Write</h1>
          <h3>Connect your wallet to continue</h3>
          <button onClick={authenticate}>Connect</button>
        </div>
      </div>}
      {loggedIn && <Dashboard />}
    </div>
  );
};

export default App;