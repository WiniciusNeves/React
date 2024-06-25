import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calc from './main/Calcu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>
        Calculadora
        <Calc />
      </h1>
    </div>
  </React.StrictMode>
);

