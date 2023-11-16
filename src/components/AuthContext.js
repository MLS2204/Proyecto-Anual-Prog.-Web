import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    singOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    singInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";

import firebase from 'firebase/app';


// Configura Firebase con tu información de proyecto
const firebaseConfig = {
    apiKey: "AIzaSyCuBCVQyn3w_VrKnfIteuk_AwwLQXPqWhI",
    authDomain: "developers-e3595.firebaseapp.com",
    databaseURL: "https://developers-e3595-default-rtdb.firebaseio.com",
    projectId: "developers-e3595",
    storageBucket: "developers-e3595.appspot.com",
    messagingSenderId: "267490011169",
    appId: "1:267490011169:web:114b6716ae0fe476259b60",
    measurementId: "G-SJ0VR23DRB"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // El usuario está autenticado
        setUser(authUser);
      } else {
        // El usuario no está autenticado
        setUser(null);
      }
      setIsLoading(false);
    });

    // Limpia el listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
