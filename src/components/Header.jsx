import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  // actualizar isMobile al redimensionar
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false); // cerrar menú si pasa a desktop
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // estilos en línea (tal como pediste)
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 18px",
    backgroundColor: "#097028ff",
    color: "#fff",
    position: "relative",
  };

  const brandingStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoStyle = {
    width: "48px",
    height: "48px",
    objectFit: "contain",
  };

  const menuToggleStyle = {
    background: "white",
    border: "none",
    color: "Brown",
    fontSize: "28px",
    cursor: "pointer",
    padding: "6px",
  };

  const desktopNavStyle = {
    display: "flex",
    gap: "20px",
    fontSize: "16px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 500,
  };

  // menú mobile (desplegable)
  const mobileNavStyle = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    right: "12px",
    backgroundColor: "#19ce13ff",
    padding: "12px",
    borderRadius: "10px",
    gap: "12px",
    width: "200px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
    zIndex: 50,
  };

  return (
    <header style={headerStyle}>
      <div style={brandingStyle}>
        <img src="./imagenes/logoVDG.png" alt="Logo VDG" style={logoStyle} />
        <h1 style={{ margin: 0, fontSize: "20px" }}>VDG.cheap</h1>
      </div>

      {/* botón hamburguesa (solo en mobile) */}
      {isMobile ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            style={menuToggleStyle}
            type="button"
          >
            {/* si querés transformar a X cuando está abierto, podés reemplazar el icono aquí */}
            <i className={open ? "bx bx-x" : "bx bx-menu"} aria-hidden="true"></i>
          </button>
        </div>
      ) : null}

      {/* nav escritorio */}
      {!isMobile && (
        <nav style={desktopNavStyle} aria-label="Menú principal">
          <Link to="/" style={linkStyle}>
            <i className="bx bx-home" aria-hidden="true"></i> Inicio
          </Link>
          <Link to="/productos" style={linkStyle}>
            <i className="bx bx-shopping-bag" aria-hidden="true"></i> Productos
          </Link>
          <Link to="/Carrito" style={linkStyle}>
            <i className="bx bx-cart" aria-hidden="true"></i>
            <span id="cart-count" style={{ marginLeft: 4 }}>0</span> Ver Carrito
          </Link>
          <Link to="/contacto" style={linkStyle}>
            <i className="bx bx-mail-send" aria-hidden="true"></i> Formulario
          </Link>
        </nav>
      )}

      {/* nav mobile desplegable */}
      {isMobile && (
        <nav
          id="mobile-menu"
          style={mobileNavStyle}
          aria-label="Menú móvil"
          onClick={() => setOpen(false)} // cierra al click en cualquier link
        >
          <Link to="/" style={linkStyle}>
            <i className="bx bx-home" aria-hidden="true"></i> Inicio
          </Link>
          <Link to="/productos" style={linkStyle}>
            <i className="bx bx-shopping-bag" aria-hidden="true"></i> Productos
          </Link>
          <Link to="/Carrito" style={linkStyle}>
            <i className="bx bx-cart" aria-hidden="true"></i>
            <span id="cart-count" style={{ marginLeft: 4 }}>0</span> Ver Carrito
          </Link>
          <Link to="/contacto" style={linkStyle}>
            <i className="bx bx-mail-send" aria-hidden="true"></i> Formulario
          </Link>
        </nav>
      )}
    </header>
  );
}
