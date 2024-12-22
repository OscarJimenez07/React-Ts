import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Contador from './pages/Contador'
import Formulario from './components/FormularioRegistro'
import ComponentePadre from './components/componentePadre';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca de</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/contador">Contador</Link></li>        
          <li><Link to="/formulario">Formulario</Link></li>  
          <li><Link to="/ComponentePadre">Props</Link></li>     
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/ComponentePadre" element={<ComponentePadre />} />
      </Routes>
    </Router>
  );
};

export default App;

