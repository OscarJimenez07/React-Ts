interface ListaNombresProps {
  nombres: string[];
}

export default function ListaNombres({ nombres }: ListaNombresProps) {
  return (
      <div>
          <ul>
              {nombres.map((nombre, index) => (<li key={index}>{nombre}</li>))}
          </ul>
      </div>
  );
}
