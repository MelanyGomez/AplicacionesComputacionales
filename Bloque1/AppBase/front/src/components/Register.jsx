import { useState } from "react";

function Register() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrar = async () => {
    if (!nombre || !correo || !password) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const respuesta = await fetch("http://TU_IP:5000/alumnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, password })
    });

    if (respuesta.ok) {
      setMensaje("Usuario registrado correctamente");
      setNombre("");
      setCorreo("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={e => setCorreo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={registrar}>Registrarse</button>

      <p>{mensaje}</p>
    </div>
  );
}

export default Register;
