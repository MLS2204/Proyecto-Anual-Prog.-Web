import React, { createContext, useContext, useState } from "react";

// Crea el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder al contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}

// Proveedor de autenticación que envuelve a toda tu aplicación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Puedes inicializar el usuario según tu lógica de autenticación

  // Define funciones de inicio de sesión, cierre de sesión, etc., según tu aplicación

  const value = {
    user,
    // Agrega tus funciones de inicio de sesión, cierre de sesión, etc. aquí
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
