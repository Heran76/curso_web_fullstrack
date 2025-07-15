/*
Ejercicio 21

Calculadora:
-Pida dos numeros por pontalla
-Si metemos uno mal que no los vuelva a pedir
-En una alerta y por la consola el resultado de
sumar, restar, multiplicar, y dividir esad dos cifras.
*/

let n1;
let n2;

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Mete el primer numero"));
    n2 = parseInt(prompt("Mete el segundo numero"));
}
    let resultado = `
    Suma: ${n1 + n2}
    Resta: ${n1 - n2}
    Multiplicación ${n1 * n2}
    Resto ${n1 % n2}
    
    `;
    alert(resultado);
