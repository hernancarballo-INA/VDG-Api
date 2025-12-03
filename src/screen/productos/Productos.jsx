import React, { useEffect, useState } from "react";
import "./Productos.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Productos() {
const [productos, setProductos]= useState ([])

useEffect(() => {
  fetch("https://68fabd2eef8b2e621e80bb91.mockapi.io/articulos").then(resp=>resp.json( ).then(
    data=> setProductos(data)
  ))

  
}, [])




  return (
    <div>
      <Header/>

      <main className="container">
        <section className="productos">
        



       {
  productos.map((producto) => (
    <section className="card" key={producto.id}>
      <article className="prop-card">
        <img src={producto.image} alt={producto.name} className="product-img" />
        <div className="info">
          <h3>{producto.name}</h3>
          <p>{producto.new ? "nuevo" : "usado en buen estado"}</p>
          <p>{producto.description}</p>
          <span className="price">$ {producto.price}</span>
          <button
            className="add-to-cart"
            data-name={producto.name}
            data-price={producto.price}
            data-img={producto.image}
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
