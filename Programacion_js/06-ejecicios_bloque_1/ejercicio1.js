/*
Ejercicio 1 :
Calcula cuántas hora le lleveria llegar a la luna a una
nave especial y guardar resultado en una variable.
la distancia desde la tierra hasta la luna es de 384.400 kilometro.
la velocidad de la nave es 1225 kilometros por hora.
*/

let distancia = 384400;
let velocidad = 1225;
let tiempo = distancia / velocidad;

console.log("la nave tardara  = "+Math.ceil(tiempo)+" horas en llegar");