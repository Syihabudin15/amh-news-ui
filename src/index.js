import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { Provider } from 'react-redux';
import Store from './Reduxs/Store/Store';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);