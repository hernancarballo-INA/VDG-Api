import React from "react";
import "./Inicio.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import Header from "../../components/Header";

export default function Inicio() {
const {autenticado}= useAuth()

  console.log("logeado: ",autenticado);

  return (
    <div>
      <Header/>

  <main className="inicio-layout">

  <div className="inicio-content">

    <section className="card">
      <h2>Sobre nosotros</h2>
      <p>
        Venta de Garage app busca poder llegar a más personas que quieran
        vender o comprar articulos nuevos o usados en buen estado.{" "}
        <strong>¿NO TENÉS TIEMPO?</strong> nosotros publicamos y
        publicitamos tu articulo hasta su venta.
      </p>
    </section>

    <section className="card">
      <h2>Productos y Artículos</h2>
      <p>
        Los productos y/o artículos para la venta deberán estar nuevos o
        usados en buen estado de conservación,
        <strong>No sucios o rotos.</strong>
      </p>
    </section>

    <section className="card">
      <h2>Contactanos</h2>
      <p>
        ¿Tenés cosas para vender? Completá el formulario o escribinos a
        <a href="mail to:vdg.cheap@outlook.com.ar"> vdg.cheap@outlook.com.ar</a>.
      </p>
      <ul>
        <li>📍 Dónde se encuentra el artículo.</li>
        <li>🆕 / 🔄 Estado (nuevo o usado).</li>
        <li>📏 Medidas.</li>
        <li>🚚 / 🤝 Entrega o punto de encuentro.</li>
        <li>🛠️ Detalles adicionales.</li>
      </ul>
    </section>

  </div>

  <aside className="inicio-aside">

    <div className="resource">
      <h3><strong>¿A cuánto vender?</strong></h3>
      <p>
        El precio lo estipulamos comparando con
        <strong> artículos similares.</strong>
      </p>
    </div>

    <div className="resource">
      <img
        src="../imagenes/folletovdg.png"
        alt="folletovdg"
        className="resource-img"
      />
    </div>

  </aside>

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
