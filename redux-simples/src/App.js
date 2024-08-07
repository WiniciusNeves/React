import React, { useState } from 'react';
import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';


export default function App() {
  return (
    <div className="App">
      <h1>Exercicio de react-redux (simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}


