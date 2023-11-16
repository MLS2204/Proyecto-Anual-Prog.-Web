// Definir las opciones de respuesta
const opcionesRespuesta = [ { label: 'Si', value: 'Resp1Si' },
{ label: 'No', value: 'Resp1No' } ];

// Crear una función para mostrar el cuadro de diálogo de selección
function mostrarFormularioConBotones() {
  const opcionesString = opcionesRespuesta.map((opcion, index) => `${index + 1}. ${opcion.label}`).join('\n');
  const respuestaIndex = prompt(`Selecciona una opción:\n${opcionesString}`);
  
  const opcionSeleccionada = opcionesRespuesta[parseInt(respuestaIndex) - 1];

  if (opcionSeleccionada) {
      alert(`Seleccionaste: ${opcionSeleccionada.label}`);
  } else {
      alert('Respuesta no válida');
  }
}

// Llamar a la función para mostrar el formulario
mostrarFormularioConBotones();