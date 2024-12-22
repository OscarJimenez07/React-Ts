import { useState } from 'react'
import MostradorContador from './mostrarContador';

export default function ControladorContador() {

        const [contador, setContador] = useState(0);

        const incrementar = () => {
            setContador(contador + 1);
        }

        const decrementar = () => {
            setContador(contador - 1);
        }

        const reset = () => {
            setContador(0);
          };
                    
  return (
    <div>
    <MostradorContador contador={contador} />
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={decrementar}>Decrementar</button>
    <button onClick={reset}>Reset</button>
    {contador > 5 && <p>El contador es mayor que 5</p> }
  </div>
  )
}

