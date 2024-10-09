// src/pages/UserProfile.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Capture user ID from the route

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile for user ID: {id}</p>
    </div>
  );
};

export default UserProfile;
