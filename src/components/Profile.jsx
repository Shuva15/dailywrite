import React from 'react';
import "../styles/Profile.css"
import { unauthenticate } from '@onflow/fcl';

const Profile = () => {

  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* Earn Section */}
        <div className="earn-section">
          <h2>Earn</h2>
          {/* Display the earned value or indicator */}
          <p>$0</p>
        </div>

        {/* Stake Section */}
        <div className="stake-section">
          <h2>Stake</h2>
          {/* Display the staked value or indicator */}
          <p>$50</p>
        </div>
      </div>

      <button className="logout-button" onClick={unauthenticate}>
        Logout
      </button>
    </div>
  );
};

export default Profile;