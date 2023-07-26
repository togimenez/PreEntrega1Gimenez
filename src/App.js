import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './components/Navbar2';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import Menu from './components/Menu';
import Informacion from './components/Informacion';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/informacion" element={<Informacion />} />
      </Routes>
        
      <ItemListContainer greeting='Bienvenidos a Comidas Rapidas'/> 
    </BrowserRouter>
  );
}

export default App;
