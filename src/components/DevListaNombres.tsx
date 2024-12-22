
interface ListaNombresProps {
    nombres: string [];
}
export default function DevListaNombres({nombres}:ListaNombresProps) {
  return (
    <div>
        <ul>
            {nombres.map((nombres, index)=>(<li key={index}>{nombres}</li>))}
        </ul>
    </div>
  )
}
