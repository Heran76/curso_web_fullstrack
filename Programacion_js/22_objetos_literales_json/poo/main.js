//programacion orienado a objetos - Poo

class Gato {
    constructor(nombre,raza,color){
        //Propiedades
        this.nombre = nombre;
        this.raza = raza;
        this.color= color;
    }
    //Métodos (acciones)
        saltar(){
            console.log(`${this.nombre} dice Miau`);
        }
        maullar(){
            console.log(`${this.nombre} ha saltado`)
        }
// metodo get y set
        getRaza(){
            return this.raza
        }
        setRaza(raza){
             this.raza = raza
        }
}



let myGato = new Gato("Michu","Persa","marron");
console.log(myGato.getRaza());
myGato.setRaza("Callejero")
console.log(`la raza de ${myGato.nombre} es ${myGato.getRaza()}`)

myGato.maullar();
myGato.saltar();