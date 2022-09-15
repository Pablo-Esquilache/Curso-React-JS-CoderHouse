import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/itemListContainer';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
import CartContainer from './container/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer msj="APP de presentacion de Pablo Esquilache" aling="center" color="red" />} />
          <Route path='/category/:idMarca' element={<ItemListContainer/>} />
          <Route path='/item/:idDetalle' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
