import React from "react";

interface Props {
  contador: number;
}

const comHijoRMemo: React.FC<Props> = ({ contador }) => {
  console.log("Renderizando comHijoRMemo...");
  return <div>Contador: {contador}</div>;
};

// Envuelve el componente con React.memo
export default React.memo(comHijoRMemo);
