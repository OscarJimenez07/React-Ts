import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Contador from './pages/Contador'
import Formulario from './components/FormularioRegistro'
import ComponentePadre from './components/componentePadre';
import ComPadreRMemo from './components/comPadreRMemo'
import LayLoading from './components/LazyLoadingP'
import LazyLoaingImagen from './components/LazyLoadingImagen'
import ImagenesSinLazy from './components/ImagenesSinLazy'
import AnidarComponentes from './components/AnidarComponentes'

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
          <li><Link to="/comPadreRMemo">Optimizador</Link></li>     
          <li><Link to="/LayLoading">LayLoading</Link></li>    
          <li><Link to="/LazyLoaingImagen">LazyLoaingImagen</Link></li>    
          <li><Link to="/ImagenesSinLazy">ImagenesSinLazy</Link></li>    
          <li><Link to="/AnidarComponentes">AnidarComponentes</Link></li> 
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/ComponentePadre" element={<ComponentePadre />} />
        <Route path="/ComPadreRMemo" element={<ComPadreRMemo />} />
        <Route path="/LayLoading" element={<LayLoading />} />
        <Route path="/LazyLoaingImagen" element={<LazyLoaingImagen />} />
        <Route path="/ImagenesSinLazy" element={<ImagenesSinLazy />} />
        <Route path="/AnidarComponentes" element={<AnidarComponentes />} />
      </Routes>
    </Router>
  );
};

export default App;

