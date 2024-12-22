import React from 'react'
import ComponenteHijo from './componenteHijo'

 const ComponentePadre: React.FC = () => {
    const mensaje: string = "Transferencia de mensaje"
  return (
    <ComponenteHijo hola={mensaje} />
  )
}
export default ComponentePadre;
