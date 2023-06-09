import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Link, useNavigate} from "react-router-don";
import {useAuth} from ".../context/AuthContext";
import {Alert} from "./Alert";

function App() {
  return (
          <>
          <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/altoUsuario" element={<AltoUsuario/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/altaprofesor" element={<AltaProfesor/>}/>

                <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <AltoCurso/>
                        </ProtectedRoute>
                      }
                      />
                      <Route path="/register " element={<Register/>}/>
            </Routes>
          </AuthProvider>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
