import React from "react";
import "../../styles.css";

import "./Contacto.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Contacto() {
  return (
    <div>
      <Header />

      <main>
        <section className="form-container">
          <form className="formu"
            action="https://formsubmit.co/herni.soporte@gmail.com"
            method="POST"
          >
            <label htmlFor="nombreYapellido">Nombre y Apellido:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Juan Perez" required />

            <label htmlFor="celular">Celular:</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              pattern="[0-9]{10}"
              placeholder="(11) 00000000"
              required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@gmail.com"
              required
            />

            <label htmlFor="comentario">Consulta:</label>
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Hazme tu consulta..."
              required
            ></textarea>

            <input type="submit" value="Enviar" />
          </form>
        </section>
      </main>

      <footer>
        <p>
          <strong>VDG.cheap &copy; 2025 Todos los derechos reservados</strong>
        </p>

        <ul>
          <li>Seguinos en:</li>
          <li>
            <a
              href="https://www.facebook.com/ventadegarage.cheap"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ventadegarage.cheap/"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/1160350674" target="_blank">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
