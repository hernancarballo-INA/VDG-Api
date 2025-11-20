import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./screen/inicio/Inicio.jsx";
import Productos from "./screen/productos/Productos.jsx";
import Contacto from "./screen/contacto/Contacto.jsx";
import Carrito from "./screen/carrito/Carrito.jsx";
import Login from "./screen/Login/Login.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Inicio />
      </AuthProvider>
    ),
  },
  {
    path: "/productos",
    element: (
      <AuthProvider>
        <Productos />
      </AuthProvider>
    ),
  },
  {
    path: "/contacto",
    element: (
      <AuthProvider>
        <Contacto />
      </AuthProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/carrito",
    element: (
      <AuthProvider>
        <Carrito />
      </AuthProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
