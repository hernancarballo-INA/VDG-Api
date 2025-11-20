import React, { useState } from 'react'
import "./Login.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthProvider';

export default function Login() {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

const {login} = useAuth()



function enviarLogin() {
  console.log("logeandose")
  login({email,password})
}

  return (
      <div>
 
      <header className="clase-header">
  <div className="branding">
    {/* <a href="../Inicio/index.html"><img src="./imagenes/logoVDG.png" alt="Logo VDG" className="logo" /></a> */}
    <h1>VDG.cheap</h1>
  </div>

  
  <button className="menu-toggle" aria-label="Abrir menú">
    <i className="bx bx-menu"></i>
  </button>

  
   <nav className="menu">
          <Link to="/">
            <i className="bx bx-home"></i>Inicio
          </Link>
          <Link to= "/productos">
            <i className="bx bx-shopping-bag"></i>Productos
          </Link>
          <Link to= "/Carrito">
            <i className="bx bx-cart"></i>
            <span id="cart-count">0</span> Ver Carrito
          </Link>
          <Link to= "/contacto">
            <i className="bx bx-mail-send"></i>Formulario
          </Link>
        </nav>
</header>

<main>
        <section className="form-container">

          {/* 🔥 FORMULARIO LOGIN SIMPLE */}
          <div className="login-form">
            <h2>Iniciar Sesión</h2>

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              name="email"
              placeholder="correo@gmail.com"
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              name="password"
              placeholder="********"
              required
            />

            <button onClick={enviarLogin}>enviar</button>

          </div>

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
