const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

// Leer datos
app.get("/alumnos", (req, res) => {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  res.json(JSON.parse(data));
});

// Guardar datos
app.post("/alumnos", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  const nuevo = {
    id: data.length + 1,
    nombre: req.body.nombre
  };

  data.push(nuevo);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.json(nuevo);
});

app.listen(5000, () => {
  console.log("Servidor backend corriendo en http://localhost:5000");
});
