/*
Funciones anónimas.
es una función "sin nombre"
*/

const saludo = function(){
    console.log("Hola abuela, ¿Qué tal estás?")
} 

saludo();

//funciones callback
//Se pasan como  de otra funcion, para que la otra funcion la ejecete.

let veces = 0;

setInterval(function(){
    veces++;
    console.log("Se ha ejecuto el timeout"+veces+" veces");
},1000);

