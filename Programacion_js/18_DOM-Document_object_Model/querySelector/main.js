//querySelector selecciona atraves de los selectores class e Id

let seccionArticulos = document.querySelector("#articulos");
seccionArticulos.style.background = "lightblue";
seccionArticulos.style.padding='40px';
console.log(seccionArticulos);

//querySelector y clases

let primerArticulo = document.querySelector(".article"); //solo cambia la primera clase.
primerArticulo.style.borderRadius = "10px";
primerArticulo.style.background="gray"
primerArticulo.style.padding='10px'
console.log(primerArticulo)


