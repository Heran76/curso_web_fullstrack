/*
Ejercicio 24:
Crea una array con 10 números aleatorios de 1 al 100
Luego pide al usuario que adivini un numero.
si acierta, muestra un mensaje de felicitacion,
si no un mensaje de error.
*/

let num1 = [10,20,30,40,50,60,70,80,90,100];
let elije = parseInt(prompt("Averigua el número"));

if(num1.includes(elije)){
    alert("!Enhorabuna, Has acertado el número")
}else{
    alert("Sigue intentandolo");
}