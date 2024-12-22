import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definimos los tipos para el contexto
interface TemaContextoProps {
  temaOscuro: boolean;
  toggleTema: () => void;
}

// Creamos el contexto con valores iniciales
const TemaContexto = createContext<TemaContextoProps | undefined>(undefined);

interface TemaProviderProps {
  children: ReactNode;
}

// Componente proveedor del contexto
export const TemaProvider: React.FC<TemaProviderProps> = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const toggleTema = () => {
    setTemaOscuro((prevTema) => !prevTema);
  };

  return (
    <TemaContexto.Provider value={{ temaOscuro, toggleTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

// Custom hook para usar el contexto
export const useTema = () => {
  const context = useContext(TemaContexto);
  if (!context) {
    throw new Error('useTema debe ser usado dentro de un TemaProvider');
  }
  return context;
};
