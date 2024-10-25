/*
Practica Array
*/

let superheroes = ["Super man", "Siperdman","Hook","Catwoman"];
let elemento=prompt("¿Qué usuario quieres descubrir, elige del 0 al 3",0);

if(elemento >= superheroes.length){
    alert("Ese numero no es de SuperHeroe")
}else{
    alert("El super heroes es : ".concat(superheroes[elemento]));
}