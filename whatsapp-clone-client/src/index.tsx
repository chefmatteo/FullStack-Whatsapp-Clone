import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './appProps';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  //react is now going to render the App component into the root element
  //root here is the div with the id root in the public/index.html file
);
root.render(
  <React.StrictMode>
    <App name="Matthew" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
