//Eventos teclado.


let superformulario = document.querySelector("#superformulario");
superformulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#email").value; 

    alert(`El nombre es : ${nombre} \n El correo es : ${correo}`)
})
