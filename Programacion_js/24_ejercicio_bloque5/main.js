/*
¡¡¡ Super Ejercicio de Javascript !!!

Crea una apliación web en la que puedas añadir, mostrar y eliminar
tus peliculas javoritas.
Cada peli que guardes debe tener:
-titulo de la pelicula
-Fecha guardado
-Puntuación de pipularidad ( un valor aleatorio en 1 y 100).

Las peliculas deben mantenerse guardadas aunque se recarguen la página
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento

Tareeas :
 - Ejercicio 39 : Crea el formulario necesario
 - Ejercicio 40 : Función para guardar peliculas con los datos necesarios
 - Ejercicio 41 : función para mostrar peliculas extraidas del localStorage
 -Ejercicio 42 : Haz que las peliculas carguen automaiticamente al abrir la web
 -Ejercicio 43 : Función para eliminar peliculas.

*/

function guardar(){
    //Seleccionar la caja de texto y sacar su valor

    let titulo = document.querySelector("#titulo").value;
   //validacion

   if(titulo.trim() === ""){
    alert("Por favor, mete el titulo de la pelicula");
    return false;
   }

    //Conseguir la fecha actual
   const fecha = new Date();
   const fechaActual = fecha.toLocaleDateString()+" "+fecha.toLocaleTimeString();
 
    //Generar un numero aleatorio para la popularidad
   let popularidad = Math.floor(Math.random()*100)+1;
   console.log(popularidad)
 //Crear objeto pelicula

    //Sacar todas las peliculas (array de objetos)

    //Añadir el array la nueva peli

    //Guardar todo en el local strorage

    //limpiar el campo de texto

    //Mostrar las peliculas
}

let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    guardar();
})

