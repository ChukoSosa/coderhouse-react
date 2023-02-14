// >> CSS
import './App.css';
// >> Botstrap
import "bootstrap/dist/css/bootstrap.min.css";
// >> Components
import ItemListContainer from "../src/components/ItemListContainer";
import ContentPage from '../src/components/ContentPage';
import NavBar from "../src/components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ContentPage title="Bienvenido a nuestra tienda en línea" /> } />
          <Route path='/productos' element={ <ItemListContainer greeting="Productos" /> } />
          <Route path='/nosotros' element={ <ContentPage title="Nosotros" /> } />          

          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
        
        <footer>This is the footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
