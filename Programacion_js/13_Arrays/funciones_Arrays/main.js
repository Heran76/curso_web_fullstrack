/*
Funciones para Arrays
*/

const { displayPartsToString } = require("typescript");

//Crear una array

let dispositivos = ["pc","laptop","tablet","móvil","smartwatch"];

//longitud del array
console.log(dispositivos.length);

//añadir elementos

dispositivos.push("Ps5");
dispositivos.push("tostadora");
console.log(dispositivos);

//Eliminar ultimao elemento
dispositivos.pop();
console.log(dispositivos);

//Agregar elementos al principio
dispositivos.unshift("Ps4");
dispositivos.unshift("Psp");
console.log(dispositivos);

//Eliminiar primer elemento array
dispositivos.shift();
console.log(dispositivos);

//Busqueda devuelve indice

let indice = dispositivos.indexOf("laptop");
console.log(indice);

//Busqueda para ver si exite elemento

let exite = dispositivos.includes("Psp");
console.log(exite);

//filtrar array
dispositivos.push("MACETA");
dispositivos.push("MACETA1");
dispositivos.push("MACETA2");
dispositivos.push("MACETA3");
dispositivos.push("MACETA4");


let dispositivosconE = dispositivos.filter(dispositivo =>dispositivos.includes("E"));
    
    console.log(dispositivosconE);

//Reduce

let reducir = dispositivos.reduce((total, actual)=> total + ","+actual);
console.log(reducir);