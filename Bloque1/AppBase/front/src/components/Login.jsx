import { useState } from "react";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const login = async () => {
    const respuesta = await fetch("http://TU_IP:5000/alumnos");
    const usuarios = await respuesta.json();

    const usuario = usuarios.find(
      u => u.correo === correo && u.password === password
    );

    if (usuario) {
      setMensaje(`Bienvenido ${usuario.nombre}`);
    } else {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

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

      <button onClick={login}>Entrar</button>

      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
