import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [vista, setVista] = useState("landing"); // Cambia este valor a "register" o "login" para probar otras vistas
  return (
    <>
      <Header cambiarVista={setVista} />
      {vista === "landing" && <Hero />}
      {vista === "register" && <Register />}
      {vista === "login" && <Login />}
      <Footer />
    </>
  );
}

export default App;
