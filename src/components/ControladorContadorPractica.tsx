import {useState} from 'react'

export default function ControladorContadorPractica() {
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

  return (
    <div>
            <h2>Numero es= {contador}</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reset}>Resetear</button>
        {contador > 5 && <p>El numero es mayor a 5</p>}
    </div>
    
  )
}

