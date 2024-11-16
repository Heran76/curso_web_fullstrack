
const tarjeta = document.querySelector("#tarjeta");
console.log(tarjeta)

tarjeta.textContent = "Contenido nuevo de mi tarjeta";
tarjeta.innerHTML = "<strong>Contenido en html</strong>";
tarjeta.setAttribute("data-id",12);
tarjeta.setAttribute("class","hola");
console.log(tarjeta.getAttribute("id"));

tarjeta.style.border  = "1px solid blue";
tarjeta.style.background = "steelblue";