/*
Ejercicio 16
Escribe un programa que muestre la tabla de multiplicar del 
numero que te diga el usuario
*/

let numero = parseInt(prompt("¿Que tabla deseas?"));
let resultado = "la tabla del "+numero;

for(let i = 1; i <= 10; i++){
    let multiplicacion = i * numero;
    resultado += "\n"+ i+" x "+numero+" = "+multiplicacion;
}
alert(resultado);