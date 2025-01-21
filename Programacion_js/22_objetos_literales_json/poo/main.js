//programacion orienado a objetos - Poo

class Gato {
    constructor(){
        //Propiedades
        this.nombre = "Bella";
        this.raza = "Michu";
        this.color= "Marron";
    }
    //Métodos (acciones)
        saltar(){
            console.log(`${this.nombre} dice Miau`);
        }
        maullar(){
            console.log(`${this.nombre} ha saltado`)
        }
}
let myGato = new Gato();
console.log(myGato);
myGato.maullar();
myGato.saltar();