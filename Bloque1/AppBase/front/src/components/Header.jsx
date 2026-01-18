function Header({ cambiarVista }) {
  return (
    <header className="header">
      <h1>Mi Negocio</h1>
      <nav>
        <nav>
        <button onClick={() => cambiarVista("landing")}>
          Inicio
        </button>

        <button onClick={() => cambiarVista("register")}>
          Registro
        </button>

        <button onClick={() => cambiarVista("login")}>
          Login
        </button>
      </nav>
      </nav>
    </header>
  );
}

export default Header;
