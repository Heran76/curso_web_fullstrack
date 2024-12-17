/*
Ejercicio 31

Crea un semáforo con tres luces (rojo, amarillo, y verde)
haz los circulos del semafaro con Html y Css.

Cuando un peaton quiera cruzar la calle debe pulsar un botón
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente ( de rojo a verde, pasando por amarillo).

Observaciones:
El semáforo siempre empieza en rojo.
Cuando haces click en el botón, pasará a amarillo.
al hacer click otra vez, pasa a verde y asi sucesivamente.
*/

let boton = document.querySelector("#btnsemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", ()=>{
//Retirar las luces activas
luces.forEach(luz => luz.classList.remove("activa"));

//Encneder una luz
luces[indice].classList.add("activa");
//cambiar el indice para la siguiente luz
indice++
if(indice > 2){
    indice = 0;
}
});

