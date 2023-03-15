// >> CSS
import './App.css';
// >> Botstrap
import "bootstrap/dist/css/bootstrap.min.css";
// >> Components
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import ShopCartList from './components/ShopCartList';
import NavBar from "../src/components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:categoria' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />

          <Route path='/shop-cart' element={ <ShopCartList /> } />

          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
