/*
Ejercicio 19

Muestra todos los numeros divisores de un numero que se mete en un prompt
*/

let numero = parseInt(prompt("Mete un numero y te digo los divisores", 1));
for(let contador = 1; contador <= numero; contador++){
    if(numero % contador == 0){
        console.log(`El ${contador}es divisor de ${numero}`);
    }
}