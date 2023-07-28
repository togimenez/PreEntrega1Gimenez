import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './components/Navbar2';
import Home from './components/Home';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalogo" element={<Catalogo />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
