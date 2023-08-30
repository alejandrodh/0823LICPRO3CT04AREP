import Saludo from "./components/Saludo/Saludo";
import Contador from "./components/Contador/Contador";
import RyM from "./components/RyM/RyM";

function App() {
  return (
      <section>
        <h1><Saludo></Saludo></h1>
        <Contador></Contador>

        <h2>Personajes de Rick and Morty</h2>
        <RyM />
      </section>
       
  );
}

export default App;
