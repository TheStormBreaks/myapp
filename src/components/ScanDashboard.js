// src/components/ScanDashboard.js
import React, { useState } from 'react';
import './ScanDashboard.css'; // Optional: add styles for the ScanDashboard component

function ScanDashboard() {
  const [scanResults, setScanResults] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setScanResults([]); // Clear previous results
    // Simulate a scan with a timeout
    setTimeout(() => {
      const results = [
        { id: 1, issue: 'Open port 80 detected', severity: 'Medium' },
        { id: 2, issue: 'SQL Injection vulnerability found', severity: 'High' },
        { id: 3, issue: 'Missing security headers', severity: 'Low' },
      ];
      setScanResults(results);
      setIsScanning(false);
    }, 3000); // Simulate a 3-second scan
  };

  const downloadResults = () => {
    const text = scanResults.map(result => 
      `Issue: ${result.issue}\nSeverity: ${result.severity}\n`
    ).join('\n');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'scan_results.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ScanDashboard">
      <h2>Scan Dashboard</h2>
      <button onClick={startScan} disabled={isScanning}>
        {isScanning ? 'Scanning...' : 'Start Scan'}
      </button>
      {isScanning && <p>Scanning in progress...</p>}
      {scanResults.length > 0 && (
        <>
          <ul className="scan-results">
            {scanResults.map(result => (
              <li key={result.id} className={`scan-result ${result.severity.toLowerCase()}`}>
                <strong>Issue:</strong> {result.issue} <br />
                <strong>Severity:</strong> {result.severity}
              </li>
            ))}
          </ul>
          <button onClick={downloadResults}>Download Results</button>
        </>
      )}
    </div>
  );
}

export default ScanDashboard;
