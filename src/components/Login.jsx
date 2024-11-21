import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../config/firebaseConfig"; // Asegúrate de que esta ruta sea correcta
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => { // Recibe onLogin como prop
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Inicia sesión con Google
      const result = await signInWithPopup(auth, provider);
      
      // Usuario autenticado
      const user = result.user;
 
      console.log("Usuario autenticado:", user);
      
      // Llamamos a onLogin para actualizar el estado de autenticación
      onLogin(); // Cambia el estado en App.jsx a true

      // Redirige después del login exitoso
      navigate("/home");  // Redirige a la página de "home"
    } catch (error) {
      console.error("Error durante la autenticación:", error);
    }
  };

  const handleFacebookClick = () => {
    console.log("Facebook Login Clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoogleClick}
        sx={{
          width: "250px",
          backgroundColor: "#db4437", // Color de Google
          "&:hover": {
            backgroundColor: "#c33d2e",
          },
        }}
      >
        Iniciar sesión con Google
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleFacebookClick}
        sx={{
          width: "250px",
          backgroundColor: "#4267B2", // Color de Facebook
          "&:hover": {
            backgroundColor: "#375a9b",
          },
        }}
      >
        Iniciar sesión con Facebook
      </Button>
    </Box>
  );
};

export default Login;
