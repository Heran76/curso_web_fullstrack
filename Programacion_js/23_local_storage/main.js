//Localstorage
//Disponibilidad
if(typeof(Storage) !== "undefined"){
    console.log("Local Storage disponible !!")
}else{
    console.log("local strorage no disponible")
}
// introducir datos
localStorage.setItem("age","49")
//sacar por el DOM el dato del local storage
document.querySelector("#edad").textContent = localStorage.getItem("age");
//guardar objetos en el local storage.

let animal = {
    especie : "Elefante",
    nombre : "Dumbo",
    color : "Gris",
}

localStorage.setItem("animal", JSON.stringify(animal));

//Recuperar objeto
let animalJson = JSON.parse(localStorage.getItem("animal"))
console.log(animalJson)

//Eliminar elemento
localStorage.removeItem(animal);

//Vaciar local Storoge
document.querySelector("#vaciar").addEventListener("click", ()=>{
    localStorage.clear()
})

