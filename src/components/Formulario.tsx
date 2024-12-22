import { useState } from "react";

interface DatosFormulario {
  nombre: string;
  email: string;
}

export default function FormularioSimple() {
  const [datos, setDatos] = useState<DatosFormulario>({ nombre: "", email: "" });
  const [errores, setErrores] = useState<{ nombre?: string; email?: string }>({});

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validaciones
    const nuevosErrores: { nombre?: string; email?: string } = {};
    if (datos.nombre.length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!/\S+@\S+\.\S+/.test(datos.email)) {
      nuevosErrores.email = "Por favor ingresa un email válido.";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores); // Mostrar errores si los hay
    } else {
      setErrores({});
      console.log("Datos enviados:", datos);
      alert("Formulario enviado con éxito");
    }
  }
// 
  return (
    <form onSubmit={manejarEnvio}>
      <input type="text" name="nombre" placeholder="Nombre" value={datos.nombre} onChange={manejarCambio}/>
      {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      <input type="email" name="email" placeholder="Email" value={datos.email} onChange={manejarCambio}/>
      {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
