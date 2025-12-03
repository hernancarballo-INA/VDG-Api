// Importamos funciones necesarias de React 
//useEffect maneja el ciclo de vida del componente
//useContext sirve para proveer de funciones y estados a toda la aplicacion
import { createContext, useContext, useEffect, useState } from "react";
// Importamos useNavigate para poder redirigir rutas
import { useNavigate } from "react-router-dom";

// Creamos un contexto llamado AuthContext (Auth= actenticación)
const AuthContext = createContext();

// Componente proveedor de autenticación
export function AuthProvider({ children }) {

  // Estado que guarda el usuario logueado.
  // Intentamos cargarlo desde localStorage; si no hay nada, será null.
  //localStorage es la memoria del navegador
  //inicializo el estado con lo que encuentre del user en el localStorage o si no hay nada inicializa en null
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Estado que indica si el usuario está autenticado.
  // También se carga desde localStorage; si no hay dato, queda en false.
  const [autenticado, setAutenticado] = useState(
    JSON.parse(localStorage.getItem("autenticado")) || false
  );

  // Hook para redirigir al usuario después del login
  const navigate = useNavigate();

  // Lista de usuarios que vienen desde la API
  const [usuarios, setUsuarios] = useState([]);

  // useEffect se ejecuta cuando el componente se monta (solo una vez)
  useEffect(() => {
    // Realizamos la petición a MockAPI
    fetch("https://68fabd2eef8b2e621e80bb91.mockapi.io/usuarios")
      .then((resp) =>
        resp.json().then((data) => setUsuarios(data)) // Guardamos los usuarios en el estado
      );
  }, []); // [] significa que se ejecuta una sola vez al inicio

  // Mostramos los usuarios en consola (para ver si llega bien la data)
  console.log(usuarios);

  // Función que se ejecuta cuando el usuario quiere iniciar sesión
  const login = (userData) => {
    console.log("userData: ", userData); // Mostramos los datos ingresados

    // Buscamos en la lista de usuarios si coincide email + password
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === userData.email &&
        usuario.password === userData.password
    );

    // Si encontramos el usuario en la base de datos...
    if (usuarioEncontrado) {
      // Guardamos el usuario en localStorage
      localStorage.setItem("user", JSON.stringify(usuarioEncontrado));

      console.log("logeado: ", autenticado);

      // Marcamos que está autenticado
      setAutenticado(true);

      // Guardamos el usuario en el estado local
      setUser(usuarioEncontrado);

      // Guardamos en localStorage que el usuario está autenticado
      localStorage.setItem("autenticado", JSON.stringify(true));

      // Redirigimos a la página principal
      navigate("/");
    } else {
      // Si email / password NO coinciden
      console.log("datos incorrectos");

      // Marcamos que NO está autenticado
      setAutenticado(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    // Eliminamos el usuario del localStorage
    localStorage.removeItem("user");

    // Establecemos user en null
    setUser(null);

    // ✱ Nota: acá también podrías limpiar "autenticado" si querés
  };

  // Retornamos el proveedor
  // Todo lo que esté dentro de este Provider podrá acceder a user, login, logout y autenticado
  return (
    <AuthContext.Provider value={{ user, login, logout, autenticado }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useAuth() {
  return useContext(AuthContext);
}

