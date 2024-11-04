/*
Ejercicio 27
Crea una array de personajes de pelicualas
y clasifica en grupos (Héroes, villanos, etc)
Muestra un mensaje para cada grupo.
*/
const personajes = ["V:joker", 
    "H:Batman", 
    "V:Duende verde",
    "H:Spiderman", 
    "V:Voldemort", 
    "H:harrypoter", 
    "H:Frodo",
    "V:Sauron"];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("V:"));  

console.log("Heroes: ");
heroes.forEach(heroe =>{
    console.log(heroe.split(":")[1]);
});
console.log("--------------");
console.log("villanos:");

heroes.forEach(heroe =>{
    console.log(heroe.slice(2));
});