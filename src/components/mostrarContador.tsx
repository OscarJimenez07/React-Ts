interface mostrarContadorProps {
    contador:number;
} 

export default function mostrarContador({contador}: mostrarContadorProps) { //DESTRUCTURACION DE LOS PROPS

  return (
    <div>
        <h2>Valor actual del contador: {contador}</h2>
    </div>
  )
}
