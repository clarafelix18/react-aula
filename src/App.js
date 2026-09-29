import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
   
const [nome, setNome] = useState("")
const [sobrenome, setSobrenome] = useState("")
const [fullName, setName] = useState("")

function nomeComplet(e) {
  setName(nome + " " + sobrenome)
}

return (
  <div className="container">
  <input
  value={nome}
  onChange={(e) =>setNome(e.target.value)}
  />
  <input
  value={sobrenome}
  onChange={(e) =>setSobrenome(e.target.value)}
  />
  <button onClick={nomeCompleto}>Enviar</button>
  <h1>{fullName}</h1>
  </div>
);
}

export default App;
