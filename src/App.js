import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './components/Navbar2';
// import Catalogo from './components/Catalogo';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetail from './components/Detail/ItemDetail';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/catalogo/:id" element={<ItemDetail />} />
        <Route exact path='/checkout' element={<Checkout />}/>
        {/* <Route exact path="/catalogo/:marca" element={<Catalogo />} /> */}
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
