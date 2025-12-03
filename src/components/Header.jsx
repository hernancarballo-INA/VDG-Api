// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="app-header" role="banner">
      <div className="branding">
        <img src="/imagenes/logoVDG.png" alt="Logo VDG" className="logo" />
        <h1 className="site-title">VDG.cheap</h1>
      </div>

      {isMobile ? (
        <div className="mobile-controls">
          <button
            className="menu-toggle"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <i className={open ? "bx bx-x" : "bx bx-menu"} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {/* nav escritorio */}
      {!isMobile && (
        <nav className="desktop-nav" aria-label="Menú principal">
          <Link to="/" className="nav-link">
            <i className="bx bx-home" aria-hidden="true"></i> Inicio
          </Link>
          <Link to="/productos" className="nav-link">
            <i className="bx bx-shopping-bag" aria-hidden="true"></i> Productos
          </Link>
          <Link to="/Carrito" className="nav-link">
            <i className="bx bx-cart" aria-hidden="true"></i>
            <span id="cart-count" className="cart-count">0</span> Ver Carrito
          </Link>
          <Link to="/contacto" className="nav-link">
            <i className="bx bx-mail-send" aria-hidden="true"></i> Formulario
          </Link>
        </nav>
      )}

      {/* nav mobile desplegable */}
      {isMobile && open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Menú móvil"
          onClick={() => setOpen(false)}
        >
          <Link to="/" className="nav-link">
            <i className="bx bx-home" aria-hidden="true"></i> Inicio
          </Link>
          <Link to="/productos" className="nav-link">
            <i className="bx bx-shopping-bag" aria-hidden="true"></i> Productos
          </Link>
          <Link to="/Carrito" className="nav-link">
            <i className="bx bx-cart" aria-hidden="true"></i>
            <span id="cart-count" className="cart-count">0</span> Ver Carrito
          </Link>
          <Link to="/contacto" className="nav-link">
            <i className="bx bx-mail-send" aria-hidden="true"></i> Formulario
          </Link>
        </nav>
      )}
    </header>
  );
}
