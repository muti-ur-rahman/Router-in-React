 // src/pages/Dashboard.jsx

import React from 'react';
import { useAuth } from '../auth/AuthProvider';

const Dashboard = () => {
  const { logout } = useAuth();
    return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
