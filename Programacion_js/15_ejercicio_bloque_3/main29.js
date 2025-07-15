/*
Ejercicio 29
Crea una funcion que reciba una palabra y devuelva cuántas 
vocoales contiene.
*/

function misVocales(palabra){
 const vocales = "aeiouAEIOU"
 let count = 0;
 for(let letras of palabra){
     if(vocales.includes(letras))
        count++
 }
 return count;
}

document.write("El número de vocales es "+misVocales(prompt("Dime tu palabra y cuento las vocales")));
