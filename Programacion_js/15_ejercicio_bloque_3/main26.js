/*
Ejercicio 26:
Dado un array de palabras, cuenta atrás letras tiene cada palabra
y crea un nuevo array que contenga solo números.
*/

function cuentaLetras(datos){
  let nuevosDatos = datos.map(elemento => elemento.length);
  return nuevosDatos;


}

const frutas = ["naranja", "manzana", "sandia", "cereza"]

console.log(cuentaLetras(frutas));