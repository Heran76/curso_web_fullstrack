//Eventos teclado.
let superformulario = document.querySelector("#superformulario");
superformulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#email").value; 

    alert(`El nombre es : ${nombre} \n El correo es : ${correo}`)
})

//Eventos Input

let inputNombre = document.querySelector("#nombre");
inputNombre.addEventListener("input", ()=>{
    console.log("El usuario a escrito "+inputNombre.value)
})

//Evento Focus

let campoEmail = document.querySelector("#email")
campoEmail.addEventListener("focus",()=>{
    console.log("Acabas de entrar al campo de email Chaval")
})