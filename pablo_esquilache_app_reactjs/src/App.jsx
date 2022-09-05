// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
//import ItemListContainer from './container/itemListContainer';

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        {/* <ItemListContainer msj="APP de presentacion de Pablo Esquilache" aling="center" color="red" /> */}
        <ItemDetailContainer/>
      </body>
    </>
  );
}

export default App;
