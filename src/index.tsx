import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import App from './Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
