/*
Funciones
una función agrupa una serie de instruciones para poder usarlas
varias veces, es una agrupación reutilizable de un conjunto de instruciones
*/

//Sintaxis

function saludo(){
    console.log("!Hola, abuela¡");
    console.log("¿Qué tal estas?");
    console.log("¿Me pasas la receta de la toritilla de patatas?");

    return("Saludo realizado");
}

let mensajeFinal=saludo();

saludo();
alert(mensajeFinal);

/*
El valor de retorno de una función (return) solo se muestra 
si lo usas explícitamente, como cuando lo asignas a una 
variable y luego usas alert(), console.log() o lo manejas 
de alguna otra forma. Si solo llamas a la función sin asignarla, el return simplemente
 "devuelve" el valor, pero no lo verás a menos que lo captures o muestres.

En tu caso, el alert(mensajeFinal) mostrará "Saludo realizado" porque 
almacenaste el valor devuelto 
de la función en mensajeFinal.
*/