/*
Ejercicio 28

1. Pide 6 numeros por pantalla y mételos en un array
2. Muestra el array entero (todo sus elementos)
   en el cuerpo de la página y en la consola
3. Ordenalo y muestralo
4. Invierte su orden y muestralo
5. Muestra cuantos elementos tiene el array
6. Busca uno de los valores que ha metido el usuario;
7. Refactoriza todo lo posible usando funciones   
*/

//Pedir seis números
let numeros = [];

for(let contador = 1; contador <= 6; contador++){
   let numerito = Number(prompt("Introduce 6 numeros : ",0));
   numeros.push(numerito);
   

}
//. Mostrar array entero
function mostrar(coleccion){
    console.log(coleccion);

    
    document.write("<ul>");

    coleccion.forEach(elemento => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");

    return coleccion;
}
document.write("<h1>Contenido del array</h1>");
mostrar(numeros);

//ordenar y mostrar.

document.write("<h1>Ordenar y mostrar</h1>")
numeros.sort((a,b)=> a-b);
mostrar(numeros);

//inventir y mostrar

document.write("<h1> Invertir y mostrar</h1>")
numeros.reverse();
mostrar(numeros); 

//mostrar cuantos elementos tiene
document.write("<h1>¿Cuantos elementos tiene?</h1>")
document.write(`<h1> El array tiene ${numeros.length} elementos`)

//Busqueda
document.write("<h1>Busqueda de un número</h1>")
let busqueda = Number(prompt("Busca un numero",0));
let posicion = numeros.findIndex(numero => numero === busqueda);

if(posicion && posicion != -1){
    document.write("!ENCONTRADO¡ la posición de la busqueda es: "+posicion);
}else{
    document.write("Numero no encontrado");
}
