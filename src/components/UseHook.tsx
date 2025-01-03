import React from 'react';
import useContador from '../hooks/useContador';

const ContadorConHook: React.FC = () => {
  const { contador, incrementar, decrementar, reset } = useContador();

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ContadorConHook;
