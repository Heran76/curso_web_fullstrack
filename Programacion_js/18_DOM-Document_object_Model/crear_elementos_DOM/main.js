//Crear elementos DOM

const tarjeta = document.querySelector("#tarjeta");
console.log(tarjeta)

//agregar clase
tarjeta.classList.add("destacar");

//quitar clase
tarjeta.classList.remove("remarcar");

//togle quitar o pon segun si exite o no
tarjeta.classList.toggle("small")

//añadir elemento

const titular = document.createElement("h2");
titular.textContent="Hola caracola";
tarjeta.append(titular);

tarjeta.insertBefore(titular, tarjeta.firstChild);

