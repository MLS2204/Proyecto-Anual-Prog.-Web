/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {useAuth} from "./AuthContext.jsx"
import { useState } from 'react';

AppRegistry.registerComponent(appName, () => App);
function FromsFirebase(){
    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        auth.register(emailRegister, passwordRegister)
    }
    return (
      <div class="container">
       <form className="form">
        <h1>¿Quien eres?</h1>
        <h3>Inicia Sesión</h3>
        <div class="input-group">
            <label for="username">Nombre de usuario: </label>
            <input onChange={(e)=>setEmail(e.target.value)} className='input' type="email" id="username" name="username" required style="width: 280px;" />
        </div>
        <div class="input-group">
            <label for="password">Su contraseña: </label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password"  style="width: 200px;"/>
        </div>
       </form>
        <div class="input-group">
            <button onClick={()=>handleRegister()} className='button' type="submit">Iniciar Sesión</button>
        </div>
        <div>
            <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com.ar%2F&ec=GAZAmgQ&hl=es-419&ifkv=AVQVeyw4-X2o_1LHi1YiT8E809xlrDpN4557TaZ23OYO6uhpqsfY5UZppirSWLl8Bx2NVxlFL4JUrQ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S973283765%3A1700081806900886&theme=glif">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
            </a>
            <a href="https://github.com/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </a>
        </div>
      </div>
    );
}