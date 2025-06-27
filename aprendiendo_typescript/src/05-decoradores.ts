
function DecoradorTurbo(target:Fuction){
    console.log("El coches está equipado con un turbo",target.name)
}

@DecoradorTurbo
class Coche{
    constructor(){
        console.log("Coche arrancado")
    }
}

let miCoche = new Coche()