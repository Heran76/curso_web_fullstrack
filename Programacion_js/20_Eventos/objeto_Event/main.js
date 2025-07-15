//Objeto Event nos da información sobre lo que se ejecuta.

let boton = document.querySelector("#boton");

boton.addEventListener("click",(event)=>{
    alert("haz hecho click");
    console.log(event);
})