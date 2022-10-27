import Carro from "./components/Carro";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de carros bonita</h1>
      <Carro marca="Ferrari" km={55} cor="Vermelho" />
      <Carro marca="Toyota" km={45} cor="Azul" />
      <Carro marca="Chevrolet" km={505} cor="Amarelo" />
    </div>
  );
}

export default App;
