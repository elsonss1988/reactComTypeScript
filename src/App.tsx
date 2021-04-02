import React, { FormEvent, useRef } from 'react';
import {Forms} from './components/Forms';
import logo from './logo.svg';
import {Title} from './components/Title'
import './App.css';
function App() {

  return (
    <div className="App">
      {/* <Title content="Iniciando com React"/> */}
      <Title onClick={()=> alert("Primeiro")}>Inciando com React </Title>
      <Title onClick={()=> alert("Segundo")}color="yellow">Inciando com React </Title>
      <Forms/>
    </div>
  );
}

export default App;
