//eventos de raton

//evento de click

let botonClick = document.querySelector("#botonclick");
botonClick.addEventListener("click",()=>{
    alert("Has hecho un evento click");
});


let dobleClick = document.querySelector("#dobleclick");
dobleClick.addEventListener("dblclick", ()=>{
    alert("Haz hecho un doble click");
})