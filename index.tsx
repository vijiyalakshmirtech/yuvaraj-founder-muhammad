
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
document.title = "YUVARAJ RAMALINGAM | Founder of SEYONIX";
window.scrollTo(0, 0);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
