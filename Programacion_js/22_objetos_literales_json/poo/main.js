//programacion orienado a objetos - Poo

class Gato {
    constructor(){
        //Propiedades
        this.nombre = "Bella";
        this.raza = "Saimino";
        this.color= "Marron"
    }  
    //Métodos ( acciones)
        maullar(){
            console.log(`${this.nombre} dice: Miau`)
        }
        saltar(){
            console.log(`${this.nombre} ha saltado`)
        }
}

let myGato = new Gato();
console.log(myGato.raza);
myGato.maullar();
myGato.saltar()