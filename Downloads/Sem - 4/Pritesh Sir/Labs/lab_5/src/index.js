import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global CSS
import App from './App';  // The main App component
import reportWebVitals from './reportWebVitals';  // For measuring performance

// React Strict Mode is enabled for development to highlight potential problems
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure and log app performance
reportWebVitals();
