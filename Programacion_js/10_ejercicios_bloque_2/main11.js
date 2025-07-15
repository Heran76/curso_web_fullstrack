/*

Ejercicio 11

Nuestros usuarios tienen perros.
y quieren saber que edad de perro tienen sus mascotas.
Un año de humano equivale a siete de perro
Pregunta a los usuarios que edad tiene su perro y dile la edad canina.

*/

let edadPerro = 7
let preguntaedad = parseInt(prompt("¿Que edad tiene tu perro?"));
let resultado = edadPerro * preguntaedad;

alert(`Tu perro tiene ${resultado}  (caninos)`);