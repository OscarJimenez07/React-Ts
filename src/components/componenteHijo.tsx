import React from 'react'

interface componenteHijoProps {
    hola: string;
}
const ComponenteHijo: React.FC <componenteHijoProps> = ({hola}) => {
  return (
    <h2>{hola}</h2>
  )
}

export default ComponenteHijo;