// >> CSS
import './App.css';
// >> Botstrap
import "bootstrap/dist/css/bootstrap.min.css";
// >> Components
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import ShopCartList from './components/ShopCartList';
import CartContextProvider from './context/context';
import NavBar from "../src/components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />

            <Route path='/shop-cart' element={ <ShopCartList /> } />

            <Route path='/*' element={ <Navigate to='/' /> } />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
