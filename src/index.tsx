import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

