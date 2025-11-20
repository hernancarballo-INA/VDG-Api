import React, { useEffect, useState } from "react";
import "./Productos.css";
import "../../styles.css";
import { Link } from "react-router-dom";

export default function Productos() {
const [productos, setProductos]= useState ([])

useEffect(() => {
  fetch("https://68fabd2eef8b2e621e80bb91.mockapi.io/articulos").then(resp=>resp.json( ).then(
    data=> setProductos(data)
  ))

  
}, [])




  return (
    <div>
      <header className="clase-header">
        <div className="branding">
          {/* <a href="../Inicio/index.html"> */}
            <img src="./imagenes/logoVDG.png" alt="Logo VDG" className="logo" />
          {/* </a> */}
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

      <main className="container">
        <section className="productos">
        



       {
        productos.map( producto => (
          <section className="card" key={producto.id}>
            <article className="prop-card">
              <img src={producto.image}style={{width:"300px"}} />
              <div className="info">
                <h3>{producto.name}</h3>
                <p>{producto.new ? "nuevo":"usado en buen estado"}</p>
                <p>{producto.description}</p>
                <span className="price">$ {producto.price}</span>
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

        ))
       }

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
