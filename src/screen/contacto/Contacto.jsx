import React from 'react'
import "./Contacto.css";
import "../../styles.css";

export default function Contacto() {
  return (
      <div>
 
      <header className="site-header">
  <div className="branding">
    <a href="../Inicio/index.html"><img src="./imagenes/logoVDG.png" alt="Logo VDG" className="logo" /></a>
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

<main>
    
    <section className="form-container">
        
    <form action="https://formsubmit.co/herni.soporte@gmail.com" method="POST">
            <label htmlFor="nombreYapellido">Nombre y Apellido:</label>
        <input type="text" id="nombre" name="nombre" required/>
        
        <label htmlFor="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" pattern="[0-9]{10}" placeholder="(11)00000000" required/>
        
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="correo@gmail.com" required/>
        
        <label htmlFor="comentario">Comentario:</label>
        <textarea id="comentario" name="comentario" placeholder="Hazme tu consulta..." required></textarea>
        
        <input type="submit" value="Enviar"/>
    </form>
</section>
</main>
   
<footer>
    <p>
        <strong>VDG.cheap &copy; 2025 Todos los derechos reservados</strong>
    </p>
    
    <ul>
        <li>Seguinos en:</li>
        <li><a href="https://www.facebook.com/ventadegarage.cheap" target="_blank"><i className="bx bxl-facebook-circle"></i></a></li>
        <li><a href="https://www.instagram.com/ventadegarage.cheap/"target="_blank"><i className="bx bxl-instagram"></i></a></li>
        <li><a href="https://wa.me/1160350674" target="_blank"><i className="bx bxl-whatsapp"></i></a></li>
    </ul>
</footer>
</div>

  );
}
