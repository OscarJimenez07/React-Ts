import { useState } from "react"; // Importamos useState, un hook de React para manejar el estado.

interface FormularioState {
  nombre: string; // Campo para almacenar el nombre del usuario.
  email: string; // Campo para almacenar el email del usuario.
  contraseña: string; // Campo para almacenar la contraseña del usuario.
}

// Componente principal que representa el formulario de registro
export default function FormularioRegistro() {
  // Estado inicial del formulario. 'formulario' almacena los datos actuales y 'Hola' actualiza el estado.
  const [formulario, Hola] = useState<FormularioState>({
    nombre: "", // Valor inicial vacío para el nombre.
    email: "", // Valor inicial vacío para el email.
    contraseña: "", // Valor inicial vacío para la contraseña.
  });

  // Función que se ejecuta cuando el usuario escribe en un input.
  const manejarCambio = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const campo = evento.target.name; // Obtenemos el nombre del campo que cambió (nombre, email, o contraseña).
    const nuevoValor = evento.target.value; // Obtenemos el nuevo valor ingresado por el usuario.
    Hola({
      ...formulario, // Mantenemos los valores actuales del formulario.
      [campo]: nuevoValor, // Actualizamos solo el campo que cambió con su nuevo valor.
    });
  };

  // Función que se ejecuta cuando el formulario es enviado.
  const manejarEnvio = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault(); // Evita que la página se recargue al enviar el formulario.
    console.log("Datos enviados:", formulario); // Muestra los datos del formulario en la consola para depuración.
    alert("Formulario enviado con éxito"); // Muestra una alerta indicando que el formulario fue enviado correctamente.
  };

  // JSX que define la estructura del formulario.
  return (
    <form onSubmit={manejarEnvio}> {/* Asigna manejarEnvio como el manejador para el evento de envío del formulario. */}
      <div>
        <label htmlFor="nombre">Nombre:</label> {/* Etiqueta para el campo de nombre. */}
        <input
          type="text" // El input es de tipo texto.
          id="nombre" // Identificador único para el campo.
          name="nombre" // Nombre que usaremos para identificar este campo en el estado.
          value={formulario.nombre} // Valor actual del campo tomado del estado.
          onChange={manejarCambio} // Manejador que se ejecuta cuando el usuario escribe en este campo.
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label> {/* Etiqueta para el campo de email. */}
        <input
          type="email" // El input es de tipo email.
          id="email" // Identificador único para el campo.
          name="email" // Nombre que usaremos para identificar este campo en el estado.
          value={formulario.email} // Valor actual del campo tomado del estado.
          onChange={manejarCambio} // Manejador que se ejecuta cuando el usuario escribe en este campo.
        />
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña:</label> {/* Etiqueta para el campo de contraseña. */}
        <input
          type="password" // El input es de tipo contraseña (oculta los caracteres).
          id="contraseña" // Identificador único para el campo.
          name="contraseña" // Nombre que usaremos para identificar este campo en el estado.
          value={formulario.contraseña} // Valor actual del campo tomado del estado.
          onChange={manejarCambio} // Manejador que se ejecuta cuando el usuario escribe en este campo.
        />
      </div>
      <button type="submit">Registrar</button> {/* Botón para enviar el formulario. */}
    </form>
  );
}
