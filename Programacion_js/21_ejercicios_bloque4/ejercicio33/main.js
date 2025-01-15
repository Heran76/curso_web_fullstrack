/*
Ejercicio 33 :
Crea un programa donde tengas un botón que cuente cuantos
veces lo has publicado.
cuando llegue a 17 clics, se muestre un mensaje de "¡Limite alcanzado!"
Si se  sobrepasa, el contador se resetea y el contador comienza de nuevo
*/

let contador = 0;

let numero = document.querySelector("#numeroClicks");
let boton = document.querySelector("#cuentaClicks");

boton.addEventListener("click",()=>{
    contador ++
    if(contador === 17){
        contador = 0;
        numero.textContent = "¡ Limite alcanzado!"
    }else{
        numero.textContent = contador + " clicks"
    }
    
})