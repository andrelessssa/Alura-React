import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';


ReactDOM.render(
                      // e essim ele tras o componente
  <React.StrictMode>
    <App />          
  </React.StrictMode>,
  document.getElementById('root') // ele pega o root e renderiza o app logo a cima
);


