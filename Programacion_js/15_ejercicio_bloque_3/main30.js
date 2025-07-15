/*
Ejercicio 30
Crea una funcion que reciba un número y devuelva su factorial
*/

let elfactorial = (numero) => {
   if(numero <= 1){
    return 1;
   }
   let factorial = 1;
   
   for(let i =2 ; i <= numero; i++ ){
    factorial = factorial * i;
   }
   

 return factorial;
} 
console.log(elfactorial(Number(prompt("Dime un numero y te digo su factorial",0))))