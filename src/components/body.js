// src/components/Body.js
import React from 'react';
import ScanDashboard from './ScanDashboard'; // Import ScanDashboard component

function Body() {
  return (
    <div className="App-body">
      <ScanDashboard /> {/* Render the ScanDashboard component */}
    </div>
  );
}

export default Body;
