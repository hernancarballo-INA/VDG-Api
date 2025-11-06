import React from 'react'
import "./Carrito.css";
import "../../styles.css";

export default function 
() {
  return (
    <div>
        
<header className="site-header">
  <div className="branding">
    <a href="../Inicio/index.html"><img src="../imagenes/logoVDG.png" alt="Logo VDG" className="logo" /></a>
    <h1>VDG.cheap</h1>
  </div>

 
  <button className="menu-toggle" aria-label="Abrir menú">
    <i className="bx bx-menu"></i>
  </button>

 
  <nav className="menu">
    <a href="../Inicio/index.html"><i className="bx bx-home"></i>Inicio</a>
    <a href="../productos/productos.html"><i className="bx bx-shopping-bag"></i>Productos</a>
    <a href="../carrito/carrito.html" className="cart-link">
      <i className="bx bx-cart"></i><span id="cart-count">0</span> Ver Carrito
    </a>
    <a href="../contacto/contacto.html"><i className="bx bx-mail-send"></i>Formulario</a>
  </nav>
</header>


<main className="cart-container">
  <h2><i className="bx bx-cart"></i> Carrito de Compras</h2>

  <section className="cart-items" id="cart-items">
   
  </section>

  <section className="cart-summary">
    <h3>Resumen</h3>
    <p>Total: <span id="cart-total">$0</span></p>
    <button id="checkout-btn">Finalizar Compra</button>
  </section>
</main>




  <footer>
    <p><strong>VDG.cheap &copy; 2025 Todos los derechos reservados</strong></p>
    <ul>
      <li>Seguinos en:</li>
      <li><a href="https://www.facebook.com/ventadegarage.cheap" target="_blank"><i className="bx bxl-facebook-circle"></i></a></li>
      <li><a href="https://www.instagram.com/ventadegarage.cheap/" target="_blank"><i className="bx bxl-instagram"></i></a></li>
      <li><a href="https://wa.me/1160350674" target="_blank"><i className="bx bxl-whatsapp"></i></a></li>
    </ul>
  </footer>



    </div>
  )
}
