import { render, screen } from '@testing-library/react';
import App from './App';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Evento cuando carga la pagina
window.addEventListener('load', (event) => {
  //Genera 2 números enteros al azar entre 1 y 10
  var numero1 = Math.floor((Math.random() * 10) + 1);
  var numero2 = Math.floor((Math.random() * 10) + 1);

  //Obtiene los spans donde irán los números generados
  let textoNumero1 = document.getElementById('numero1');
  let textoNumero2 = document.getElementById('numero2');

  //Imprime los números
  textoNumero1.innerHTML = numero1;
  textoNumero2.innerHTML = numero2;
});

function recibirDatos(){
  //Obtiene los datos de los input
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let suma = document.getElementById('suma').value;
  let numero1 = document.getElementById('numero1').innerHTML;
  let numero2 = document.getElementById('numero2').innerHTML;

  //Valida la suma
  let result = validarSuma(parseInt(suma), parseInt(numero1), parseInt(numero2));
  if (result){
      //Obtiene el tipo de los datos (string, number, boolean, etc)
      var tipoNombre = typeof nombre;
      var tipoApellido = typeof apellido;
      alert("Nombre: " + nombre + " / Apellido: " + apellido + " / Tipo Nombre: " + tipoNombre + " / Tipo Apellido: " + tipoApellido);
  } else {
      alert("Eres un robot!");
  }
}

function validarSuma(suma, numero1, numero2){
  let resultado = false;
  sumaT = numero1 + numero2;
  if (sumaT === suma){
      resultado = true;
  }
  return resultado;
}