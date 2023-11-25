import React from 'react';
import { authenticate, unauthenticate } from '@onflow/fcl';
import useCurrentUser from '../lib/utils';
import Feed from './Feed';
import Header from './Header';

const Connect = () => {
    const { addr, loggedIn } = useCurrentUser();
  return (
    <div>
      <main>
        <h1>Welcome!</h1>
        
        <button
          onClick={loggedIn ? unauthenticate : authenticate}
        >
          {loggedIn ? `Sign Out | ${addr}` : 'Sign in using FLOW'}
        </button>

        {loggedIn && (
            <><Header />
            <Feed /></>
          
        )}
      </main>
    </div>
  )
}

export default Connect