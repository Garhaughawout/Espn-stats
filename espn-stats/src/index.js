import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/App.css';
import '../src/Styles/TopHeader.css';
import '../src/Styles/index.css';
import '../src/Styles/BottomHeader.css';
import '../src/Styles/Main.css';
import App from '../src/Components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
