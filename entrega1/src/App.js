// >> CSS
import './App.css';
// >> Botstrap
import "bootstrap/dist/css/bootstrap.min.css";
// >> Components
import ItemListContainer from "../src/components/ItemListContainer";
import NavBar from "../src/components/NavBar"

function App() {
  return (
    <div className="App">      
      <NavBar />
      <ItemListContainer 
        greeting="Bienvenido a nuestra tienda en línea"
      />
    </div>
  );
}

export default App;
