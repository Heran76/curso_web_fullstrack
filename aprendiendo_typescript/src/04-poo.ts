class Gato {
  constructor(nombre, raza, color) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
  }

  maullar() {
    console.log(`${this.nombre} dice: ¡Miau Miau!`);  // Añadí signo de exclamación
  }

  saltar() {
    console.log(`${this.nombre} ha saltado`);
  }

  getRaza(){
   return this.raza
  }

  setRaza(raza){
    this.raza = raza;
  }

  set guardarColor(color){
    this.color = color;
  }

  get sacarColor(){
    return this.sacarColor;
  }
 
static saludar(){
    console.log("Hola colega como estas")
}

}

// Creación de instancias
let miGato = new Gato("ZASCA", "Persa", "Ocre");
let miGato2 = new Gato("Pepe", "Romano", "gris");

// Llamadas CORRECTAS (asegúrate de usar la variable correcta)
miGato.setRaza("Persa")
console.log(miGato.getRaza());  // Muestra "Persa"
miGato.maullar();          // Muestra "ZASCA dice: ¡Miau Miau!"
miGato.saltar();           // Muestra "ZASCA ha saltado"

console.log(miGato2.getRaza()); // Muestra "romano"
miGato2.maullar();         // Muestra "Pepe dice: ¡Miau Miau!"
miGato2.saltar();// Muestra "Pepe ha saltado"         // "Pepe ha saltado"

Gato.saludar();