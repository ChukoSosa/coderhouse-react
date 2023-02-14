// >> CSS
import './App.css';
// >> Botstrap
import "bootstrap/dist/css/bootstrap.min.css";
// >> Components
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from "../src/components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer title="Listado de paquete de viajes" /> } />
          <Route path='/categoria/:categoryId' element={ <ItemListContainer title="Categorias" /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer title="Producto" /> } />

          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
        
        <footer>This is the footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
