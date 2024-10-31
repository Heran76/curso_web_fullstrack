/*
Método SOME
*/
let dispositivos =["ssss","sss","tostadora","menaje"];
let letrasE = dispositivos.some(dispositivos => dispositivos.includes("e") );
console.log(letrasE)

/*
Método EVERY
*/

let letrasA = dispositivos.every(dispositivos => dispositivos.includes("A") );
console.log(letrasA)

//Aplanar

let anios =[
    [1990,1991,1992],
    [2001,2002,2005],
    [2010,2011,2015,[2020,2021,2024,[2025,2026,2027]]]   
]

let arrayplana= anios.flat(3);
console.log(arrayplana);

// copywithin
let fechas = ["01-01-1991","02-02-1992","03-03-1933","04-04-1994","05-05-1995"]
fechas.copyWithin(0,3);
console.log(fechas);

//convertir string en array

let nombre = "Antonio";
let arrayString = Array.from(nombre);
console.log(arrayString);

//Desestructuracion.

let [uno, dos, tres] = [1,2,3];
console.log(tres);

let [actor, ...restoActores]=["Robert de niro","Robert Pattison","Bruce Willis","Antonio Banderas"]
console.log(restoActores)

//expandir array

let array1 = [1,2,3];
let array2 = [4,5,6];

let arrayCompleto = [...array1, ...array2];
console.log(arrayCompleto);

//De array a string

console.log(dispositivos.toString());

//de string a array

let frase = "Bienvendios a Huesa pueblo de la Sierra De Cazorla";
let palabras = frase.split(" ");
console.log(palabras)

//Pasar a seo slug

let slug = palabras.join("-").toLowerCase();
console.log(slug);