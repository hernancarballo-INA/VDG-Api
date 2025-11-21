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

      <main>
        <div>
          <section className="card">
            <h2>Sobre nosotros</h2>
            <p>
              Venta de Garage app busca poder llegar a más personas que quieran
              vender o comprar articulos nuevos o usados en buen estado.{" "}
              <strong>¿NO TENÉS TIEMPO?</strong> nosotros publicamos y
              publicitamos tu articulo hasta su venta. Contamos con varios
              canales de venta, grupos de WhatsApp, marketplace y clasificados.
            </p>
          </section>

          <section className="card">
            <h2>Productos y Articulos</h2>
            <p>
              Los productos y/o articulos para la venta deberán estar nuevos o
              usados en buen estado de conservación,
              <strong>No sucios o rotos.</strong> Se entiende que los articulos
              antiguos tengan desgastes propios del uso y el paso de los años.
            </p>
            {/* <a href="../productos/productos.html"> */}
            <button>Ver productos</button>
            {/* </a> */}
          </section>

          <section className="card">
            <h2>Contactanos</h2>
            <p>
              ¿Tenés cosas para vender? Completá el formulario o Escribinos a
              <a href="mail de contacto">vdg.cheap@outlook.com.ar</a> dejanos tu
              consulta y te responderemos a la brevedad.{" "}
            </p>
            <p>
              <strong>IMPORTANTE!!!</strong> No olvides decirnos:
            </p>
            <ul>
              {" "}
              <li>📍 Donde se encuentra el artículo.</li>
              <li>🆕 / 🔄 Estado (nuevo o usado).</li>
              <li>📏 Medidas (ancho, largo y alto).</li>
              <li>
                🚚 / 🤝 Si realiza entrega a domicilio y/o punto de encuentro.
              </li>
              <li>🛠️ Detalles adicionales (desgastes).</li>
            </ul>

            {/* <a href="../contacto/contacto.html"> */}
            <h5>👉​Enlace al Formulario</h5>
            {/* </a> */}
          </section>
        </div>

        <aside>
          <div className="resource">
            <h3>
              <strong>¿A cuanto vender?</strong>
            </h3>
            <p>
              El precio de venta lo estipulamos en base al estado del mismo,
              comparando con <strong> articulos o productos similares</strong>
              Aceptamos efectivo, transferencia o mercado pago.
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
