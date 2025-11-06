import { useState } from 'react'
import Inicio from './screen/inicio/Inicio'
import Productos from './screen/productos/Productos'
import Contacto from './screen/contacto/Contacto'
import Carrito from './screen/carrito/Carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
     <Inicio/> 
     <Productos/>
     <Contacto/>
     <Carrito/>
</div>
    
  )
}

export default App
