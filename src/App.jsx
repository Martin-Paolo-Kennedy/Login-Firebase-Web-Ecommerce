import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si está autenticado

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta para el login */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />} // Pasa la función de login
        />
        
        {/* Ruta para la página principal */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} // Redirige a /login si no está autenticado
        />

        {/* Redirige cualquier otra ruta al login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
