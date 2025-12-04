import React, { useState } from 'react'
import "./Login.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthProvider';
import Header from '../../components/Header';


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
 
<Header/>

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
