import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Contador from './pages/Contador'
import Formulario from './components/FormularioRegistro'
import ComponentePadre from './components/componentePadre';
import ComPadreRMemo from './components/ComPadreRMemo'
import LayLoading from './components/LazyLoadingP'
import LazyLoaingImagen from './components/LazyLoadingImagen'
import ImagenesSinLazy from './components/ImagenesSinLazy'
import AnidarComponentes from './components/AnidarComponentes'
import RenderListas from './components/RenderListas'
import FormShipping from './components/FormShipping'

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/React-Ts/">Inicio</Link></li>
          <li><Link to="/React-Ts/acerca">Acerca de</Link></li>
          <li><Link to="/React-Ts/contacto">Contacto</Link></li>
          <li><Link to="/React-Ts/contador">Contador</Link></li>        
          <li><Link to="/React-Ts/formulario">Formulario</Link></li>  
          <li><Link to="/React-Ts/ComponentePadre">Props</Link></li>     
          <li><Link to="/React-Ts/comPadreRMemo">Optimizador</Link></li>     
          <li><Link to="/React-Ts/LayLoading">LayLoading</Link></li>    
          <li><Link to="/React-Ts/LazyLoaingImagen">LazyLoaingImagen</Link></li>    
          <li><Link to="/React-Ts/ImagenesSinLazy">ImagenesSinLazy</Link></li>    
          <li><Link to="/React-Ts/AnidarComponentes">AnidarComponentes</Link></li> 
          <li><Link to="/React-Ts/RenderListas">RenderListas</Link></li> 
          <li><Link to="/React-Ts/FormShipping">FormShipping</Link></li> 
        </ul>
      </nav>
      <Routes>
        <Route path="/React-Ts/" element={<Inicio />} />
        <Route path="/React-Ts/acerca" element={<Acerca />} />
        <Route path="/React-Ts/contacto" element={<Contacto />} />
        <Route path="/React-Ts/contador" element={<Contador />} />
        <Route path="/React-Ts/formulario" element={<Formulario />} />
        <Route path="/React-Ts/ComponentePadre" element={<ComponentePadre />} />
        <Route path="/React-Ts/ComPadreRMemo" element={<ComPadreRMemo />} />
        <Route path="/React-Ts/LayLoading" element={<LayLoading />} />
        <Route path="/React-Ts/LazyLoaingImagen" element={<LazyLoaingImagen />} />
        <Route path="/React-Ts/ImagenesSinLazy" element={<ImagenesSinLazy />} />
        <Route path="/React-Ts/AnidarComponentes" element={<AnidarComponentes />} />
        <Route path="/React-Ts/RenderListas" element={<RenderListas />} />
        <Route path="/React-Ts/FormShipping" element={<FormShipping />} />
      </Routes>
    </Router>
  );
};

export default App;

