import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    cargarAlumnos();
  }, []);

  function cargarAlumnos() {
    fetch("http://localhost:5000/alumnos")
      .then(res => res.json())
      .then(data => setAlumnos(data));
  }

  function guardar() {
    fetch("http://localhost:5000/alumnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    })
    .then(() => {
      setNombre("");
      cargarAlumnos();
    });
  }

  return (
    <div className="container">
      <h1>Registro de alumnos</h1>

      <div className="form">
        <input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre del alumno"
        />
        <button onClick={guardar}>Guardar</button>
      </div>

      <ul>
        {alumnos.map(a => (
          <li key={a.id}>{a.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
