/* 
Funciones para texto
--------------------
*/

//longitud length = para saber cuantos caracteres tiene el texto
let names = "Antonio Heredia"
console.log(`la cadena de texto tiene ${names.length}`);

//conversion texto

let num = 42;
console.log(typeof num.toString());

//convertir texto a mayusculas

let web = "Antonioheredia.com"
let uppweb = web.toUpperCase();
console.log(uppweb);

//convertir a minuscula

let plato = "PIZZA NAPOLITANA";
console.log(plato.toLocaleLowerCase());

//Conseguir una letra concreta

let frase = "Soy muy guay del paraguay";
console.log(frase.charAt(14))

// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor, pero seguramente si seré al que mejor entiendas";
if(eslogan.includes("seguramente")){
     console.log("La palabra SEGURAMENTE si exite en eslogan")
}else{
    console.log("que dices loco!! esa palabra no existe")
}

//buscar la posicion de una palabra

let mensaje = "Estas aprendiendo Javascript como un autentico loco";

console.log(mensaje.indexOf("autentico"));
console.log(mensaje.charAt(37));

// Extraer parte de un texto;

let curso = "Master en javascript";
console.log(curso.slice(10));

//Remplazar parte de un texto
//con .replace solo una sustitucion
//con replaceAll sustitucion todo.
let pelicula = "Dos tonto my tontos";
console.log(pelicula.replaceAll("tontos","listos"));

//trim o eliminar espacios en blanco

let email = "   antonio@heredia.com"

console.log(email.trim());

//Separar cadena por parte

let lista = "Huevos, hamburguesa, yogures, lechuga";
let listaArray = lista.split(",");
console.log(listaArray);

//substring
let cursoDos = "Master en React";
console.log((cursoDos.substring(0,6)));

//Unir cadenas de texto

let ciudad = "Huesa";
let pais = "España";

let fraseFinal = "Mi ciudad es"+ciudad+"y esta en"+pais;
fraseFinal = "".concat("Mi ciudad es ", ciudad,"y esta en ", pais);
console.log(fraseFinal);

//Comienza por una palabra especifica

let fraseDos = "Bienvenidos a mi nuevo curso de programacion"
console.log( fraseDos.startsWith("Bienvenidos"));

//Repertir palabras

let mensajito = "javascript mola mucho";
console.log(mensajito.repeat(10))
