/*
Ejercicio 25
Crea un array de ingredientes para una receta absurda
(como una pizza con chocolate y piña).
Muestra la receta completa de una frase divertida.
*/

const ingredientes = ["Massa", "chocolate", "Queso", "Piña", "Jamóm", "Oregano"];

let frase = `Receta absurda : pizza de ${ingredientes.join(", ")}, ¡UMMM que rica!`;
document.write("<h1>"+frase+"</h1>")