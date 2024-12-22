interface SaludoProps {
    nombre: string;
}

const Saludo = ({ nombre }: SaludoProps) =>(
    <div>
        <h1>Hola, {nombre} !</h1>
    </div>
);

export default Saludo;

