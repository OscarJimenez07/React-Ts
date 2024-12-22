import { useState, useEffect } from "react";


export function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
      setContador(contador - 1);
    }

    const reset = () => {
      setContador(0);
    }

    useEffect(() => {
      console.log("El contador ha cambiado" +' '+ contador);
    });

    

  return (
    <div>
    <h2>Contador: {contador}</h2>
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={decrementar}>Decrementar</button>
    <button onClick={reset}>Reset</button>
   </div>


  )
}



