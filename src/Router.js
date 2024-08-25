import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Producto from './components/productos/Producto';
import Carrito from './components/carrito/Carrito';
import BuscarItems from "./components/busqueda/BuscarItems";
import Pago from './components/pago/Producto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Producto />} />
        <Route path="/productos" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/busqueda" element={<BuscarItems />} />
        <Route path="/pagos/:valor" element={<Pago />} />
       
        
      </Routes>
    </Router>
  );
};

export default App;