/*
Funciones para Arrays
*/

//const { displayPartsToString } = require("typescript");

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

//ordenar

//dispositivos = ["almanaque","cenicero","batidora","freidora","berenjena","cocina",]
dispositivos.sort();
console.log(dispositivos);

//Revetir

dispositivos.reverse();
console.log(dispositivos);

//convinar arrays

let numeros =[2,53,42,5,8]

let union = dispositivos.concat(numeros);
console.log(union);

//Convertir en cadena

let etiquetas = dispositivos.join(", ");
console.log(etiquetas)

//copiar porion array
let misGadgestsFavs = dispositivos.slice(1,3);
console.log(misGadgestsFavs);

//Busquedas
let buscar = dispositivos.find(dispositivo => dispositivo.length >5);
console.log(buscar);

//buscar indice

let buscarIndice = dispositivos.findIndex(dispositivo => dispositivo.length > 7);
console.log(buscarIndice); 
