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