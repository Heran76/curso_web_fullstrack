/*
Ejercicio 18.
Tenemos una colección de números desde el 1 al 17
y el usuario tiene que adivnar cual es el alegido
haz un programa para que pueda adivinar el numero.

*/

const numeroAdivinar = 7;

let intento;

while(numeroAdivinar != intento){
     intento= parseInt(prompt("Adina el numero del 1 al 17: "));
     if(numeroAdivinar == intento){
        alert("Enhorabuna has acertado, era el "+numeroAdivinar);
     }else{
        alert("Sigue intentando !!!");
     }
}