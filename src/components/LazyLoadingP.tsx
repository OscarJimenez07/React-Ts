import React, { lazy, Suspense } from "react";

const Formulario = lazy(() => import("./Formulario"));

function App() {
  const [mostrar, setMostrar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar Formulario</button>
      {mostrar && (
        <Suspense fallback={<div>Cargando formulario...</div>}>
          <Formulario />
        </Suspense>
      )}
    </div>
  );
}

export default App;
