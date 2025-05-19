import './App.css';
// import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {
  const nome = "Gravena";
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <SayMyName nome="Gabriel" /> */}
      <SayMyName nome={nome} />
      <Pessoa
        nome="Gabriel"
        idade="22"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
        />

    </div>
  );
}

export default App;
