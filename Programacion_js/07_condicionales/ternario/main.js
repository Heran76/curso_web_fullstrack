/*
Condicional ternario ?
se utliza para condiciones pequeñas y concretas;
*/

let nombre = 'Antonio';
let edad = parseInt(prompt("Intrdocu tu edad"));

let comprobacion = (edad >= 18) ? "Eres mayor de Edad" : "Eres menor de edad";

console.log(`${nombre} =  ${comprobacion}`);