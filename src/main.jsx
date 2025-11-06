import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from  "react-router-dom" ; 
import Inicio from './screen/inicio/Inicio.jsx';
import Productos from './screen/productos/Productos.jsx';
import Contacto from './screen/contacto/Contacto.jsx';
import Carrito from './screen/carrito/Carrito.jsx';


const router= createBrowserRouter([ 
  {
    path:"/",
    element: <Inicio/>,
  },
  {
    path:"/productos",
    element: <Productos/>
  },
  {
    path: "/contacto",
    element: <Contacto/>
  },
  {
path:"/Carrito",
element: <Carrito/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)

 


