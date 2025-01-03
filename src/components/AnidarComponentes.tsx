function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

//Palabra clave del componente principal en este archivo es export default
export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );
}