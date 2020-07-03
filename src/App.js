import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [aba, setAba] = useState("Sobre")

  return (
    <div className="App">
        <h1>Bruna Moreira</h1>
        <h2> Jogo Animal Crossing</h2>
        <h3>Bla bla bla</h3>

        <button onClick={()=>setAba("Sobre")}>Sobre</button>
        <button onClick={()=>setAba("Contato")}>Contato</button>
        {aba === "Sobre" ? (<div id="Sobre">Sobre</div>):(<div id="Contato">Contato</div>) }
    </div>
  );
}

export default App;
