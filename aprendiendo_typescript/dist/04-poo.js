"use strict";
//Programación orienteada a obejtos (POO)
//molde
class Gato {
    constructor(nombres, raza, color) {
        this.nombres = nombres;
        this.raza = raza;
        this.color = color;
    }
    //metodos(accione)
    maullar() {
        console.log(`${this.nombres} dice:¡Miau Miau`);
    }
    saltar() {
        console.log(`${this.nombres} ha saltado`);
    }
}
let miGato = new Gato("ZASCA", "Persa", "Ocre");
console.log(miGato.raza);
miGato.maullar();
miGato.saltar();
let miGato2 = new Gato("Pepe", "romano", "gris");
console.log(miGato2.raza);
miGato.maullar();
miGato.saltar();
