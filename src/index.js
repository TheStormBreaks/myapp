// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App'; // Correct import path
import ScanDashboard from './components/ScanDashboard';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
