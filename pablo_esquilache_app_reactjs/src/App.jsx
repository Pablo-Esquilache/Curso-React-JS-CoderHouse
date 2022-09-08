import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer msj="APP de presentacion de Pablo Esquilache" aling="center" color="red"/>}/>
            <Route path='/category/id' element={ItemListContainer}/>
            <Route path='/item/:id' element={ItemDetailContainer}/>
          </Routes>
        </BrowserRouter>
      </header>
      {/* <ItemListContainer msj="APP de presentacion de Pablo Esquilache" aling="center" color="red" />
      <ItemDetailContainer /> */}
    </>
  );
}

export default App;
