import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header name="Diego" links1={["Sobre", "Comprar", "Contato", "Serviços", "Login"]} />
      <Counter count={0}/>
    </div>
  );
}

export default App;
