/*
Ejercicio 12
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
plus: si los numeros no son un numero o son menores o iguales a cero,
nos lo vuelva a pedir
*/

let num1 = parseInt(prompt("Introduce un numero",0));
let num2 = parseInt(prompt("introduce otro número",0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Introduce un  real",0));
    num2 = parseInt(prompt("introduce otro número real",0));
}

if(num1 > num2){
    console.log(`el numero ${num1} es mayor que ${num2}`)
}else if(num1 < num2){
    alert(`El numero ${num1} es menor que ${num2}`)
}else{
    alert(`El  numero 1 = ${num1} y el numero 2 =${num2} son iguales`)
}