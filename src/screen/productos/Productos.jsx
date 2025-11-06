import React from "react";
import "./Productos.css";
import "../../styles.css";

export default function Productos() {
  return (
    <div>
      <header className="site-header">
        <div className="branding">
          <a href="../Inicio/index.html">
            <img src="./imagenes/logoVDG.png" alt="Logo VDG" className="logo" />
          </a>
          <h1>VDG.cheap</h1>
        </div>

        <button className="menu-toggle" aria-label="Abrir menú">
          <i className="bx bx-menu"></i>
        </button>

        <nav className="menu">
          <a href="../Inicio/index.html">
            <i className="bx bx-home"></i>Inicio
          </a>
          <a href="../productos/productos.html">
            <i className="bx bx-shopping-bag"></i>Productos
          </a>
          <a href="../carrito/carrito.html" className="cart-link">
            <i className="bx bx-cart"></i>
            <span id="cart-count">0</span> Ver Carrito
          </a>
          <a href="../contacto/contacto.html">
            <i className="bx bx-mail-send"></i>Formulario
          </a>
        </nav>
      </header>

      <main className="container">
        <section className="productos">
          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>

          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>

          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>

          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>

          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>

          <section className="card">
            <article className="prop-card">
              <img src="./imagenes/antiques.jpg" />
              <div className="info">
                <h3>Producto 1</h3>
                <p>usado en buen estado</p>
                <span className="price">$ 320.000</span>
                <button
                  className="add-to-cart"
                  data-name="Producto 1"
                  data-price="320000"
                  data-img="./imagenes/antiques.jpg"
                >
                  Agregar al carrito
                </button>
              </div>
            </article>
          </section>
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
