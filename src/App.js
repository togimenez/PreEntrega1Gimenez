import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './components/Navbar2';
// import Catalogo from './components/Catalogo';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/catalogo/:CatalogoId" element={<ItemListContainer />} />
        {/* <Route exact path="/catalogo" element={<Catalogo />} /> */}
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
