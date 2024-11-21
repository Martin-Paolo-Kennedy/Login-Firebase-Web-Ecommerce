// src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEyLBex90-UeDuafmHStK9IrUVAN-y-uM",
  authDomain: "login-ecommerce-95455.firebaseapp.com",
  projectId: "login-ecommerce-95455",
  storageBucket: "login-ecommerce-95455.appspot.com",  // Cambié .app por .com
  messagingSenderId: "967111930063",
  appId: "1:967111930063:web:2263164a895f49b2ebc7ba"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el servicio de autenticación
const auth = getAuth(app);

export default auth;
