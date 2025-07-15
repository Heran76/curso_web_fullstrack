/*
  Parametros opcionales.
 ---------------------
Los parámetros opcionales en una función de JavaScript 
son aquellos que pueden o no ser proporcionados cuando 
la función es llamada. Si no se proporcionan, 
la función puede asignarles un valor predeterminado o 
dejarlos como undefined. Esto permite que la función sea 
más flexible y pueda manejar diferentes escenarios de uso.
*/

function saludo(nombre = "abuela", mensaje = "¿Qué tal estas?") {
    console.log(`¡Hola, ${nombre}!`);
    console.log(mensaje);
    console.log("¿Me pasas la receta de la tortilla de patatas?");
    console.log("*************************")
    return "Saludo realizado";
}

//Llamada sin parámetros:
saludo();
//Llamada con un solo parámetro:
saludo("Carlos");
//Llamada con ambos parámetros:
saludo("Carlos", "¡Qué bueno verte!");