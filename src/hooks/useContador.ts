import {useState} from 'react'

export default function useContador(valorInicial: number=0) {
    const [contador, setContador] = useState(valorInicial)

    const incrementar = ( ) => setContador(contador + 1);
    const decrementar = ( ) => setContador(contador - 1);
    const reset = ( ) => setContador(valorInicial);

    return {contador, incrementar, reset, decrementar}
}

