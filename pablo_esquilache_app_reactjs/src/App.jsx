import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer msj="APP de presentacion de Pablo Esquilache" aling="center" color="red" />} />
          <Route path='/category/:idMarca' element={<ItemListContainer />} />
          <Route path='/item/:idDetalle' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
