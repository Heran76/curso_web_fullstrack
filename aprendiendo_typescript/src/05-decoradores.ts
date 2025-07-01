//decorador basico y decoradores con parametros


function DecoradorTurbo(target:any){
    console.log("El coches está equipado con un turbo",target.name)
}

function DecoradorConMensaje(mensaje:string){
    return function(target:any){
       console.log(`Mi ${target.name} te manda este mensaje: ${mensaje}`)
    }
}

function AgregarMetodo(target:any){
    target.prototype.acelerar = function(){
        console.log("acelerando desde un método extra en un decorador");
    }
}
/*
interface Coche {
    acelerar: ()=> void;
}
*/

//@DecoradorConMensaje("El Coche mas pontente de las galaxia")
@AgregarMetodo
class Coche{
    constructor(){
        console.log("Coche arrancado")
    }
}

let miCoche = new Coche();
(miCoche as any).acelerar();