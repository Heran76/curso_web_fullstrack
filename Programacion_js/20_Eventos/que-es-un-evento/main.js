//¿Que es un evento?
/*
Los eventos en JavaScript son acciones o sucesos que ocurren en el navegador y que pueden ser detectados por tu código para responder a ellos. Pueden ser desencadenados por el usuario (como un clic o un teclado), el navegador (como cargar una página), o por el propio JavaScript.

Tipos comunes de eventos
Eventos del mouse:

click: Se produce cuando el usuario hace clic en un elemento.
dblclick: Se produce al hacer doble clic.
mouseover: Cuando el puntero pasa sobre un elemento.
mouseout: Cuando el puntero abandona un elemento.
Eventos del teclado:

keydown: Se dispara cuando se presiona una tecla.
keyup: Se dispara cuando se suelta una tecla.
Eventos de formulario:

submit: Ocurre cuando se envía un formulario.
change: Ocurre cuando el valor de un campo cambia.
input: Se activa mientras el usuario escribe en un campo.
Eventos de documento o ventana:

load: Cuando una página o recurso (como imágenes) se ha cargado completamente.
resize: Cuando la ventana cambia de tamaño.
scroll: Cuando el usuario hace scroll en la página.

*/
//evento click
let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", ()=>{
    alert("Haz dado click")
})