import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [autenticado, setAutenticado] = useState(
    JSON.parse(localStorage.getItem("autenticado")) || false
  );
  const navigate = useNavigate();


  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://68fabd2eef8b2e621e80bb91.mockapi.io/usuarios").then((resp) =>
      resp.json().then((data) => setUsuarios(data))
    );
  }, []);

  
console.log(usuarios);


  const login = (userData) => {
    console.log("userData: ", userData);

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === userData.email &&
        usuario.password === userData.password
    );

    if (usuarioEncontrado) {
      localStorage.setItem("user", JSON.stringify(usuarioEncontrado));
      console.log("logeado: ", autenticado);

      setAutenticado(true);

      setUser(usuarioEncontrado);
      localStorage.setItem("autenticado", JSON.stringify(true));
      navigate("/");
    } else {
      console.log("datos incorrectos");

      setAutenticado(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, autenticado }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
