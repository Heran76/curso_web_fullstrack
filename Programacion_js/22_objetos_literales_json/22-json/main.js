//Json javascript pbejct notations
let palaDePadel = {
    nombre: "Metalbone",
    marca: "Adidas",
    anio: 2022,
    peso: 347,
    forma: "Diamante",
    dureza: "Media"
};
let palaDePadelJSON = JSON.stringify(palaDePadel)
console.log(palaDePadel)
console.log(palaDePadelJSON)

//Convertir un objeto JSON a un objeto literal

let objetoConvertido = JSON.parse(palaDePadelJSON);
console.log("*****[JSON convertido]******")
console.log(objetoConvertido);

//recorrer un objeto 
let caja = document.querySelector("#caja");
for(let clave in palaDePadel){
    caja.innerHTML += `<p>${clave}: ${palaDePadel[clave]}</p>`;
}