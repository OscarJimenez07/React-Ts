import React from 'react';
import { useTema } from '../TemaContexto';

const TemaToggle: React.FC = () => {
  const { temaOscuro, toggleTema } = useTema();

  return (
    <div>
      <p>El tema actual es {temaOscuro ? 'Oscuro' : 'Claro'}</p>
      <button onClick={toggleTema}>Cambiar Tema</button>
    </div>
  );
};

export default TemaToggle;
