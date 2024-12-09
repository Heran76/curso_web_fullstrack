//Eventos de teclado 
//Keydown
let campoTexto = document.querySelector("#campotexto");
campoTexto.addEventListener("keydown", (event)=>{
    console.log("has pulsado la tecla"+event.key);
})

//keyup
campoTexto.addEventListener("keyup",(event)=>{
console.warn("Has soltado la tecla: "+event.key);
})

//keypress
campoTexto.addEventListener("keypress",(event)=>{
    console.error("Mantienes pulsada la tecla"+event.key)
})

