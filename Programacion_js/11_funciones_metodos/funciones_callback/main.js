/*
Funciones Callback "avanzada"
Las funciones callback en JavaScript son funciones que
 se pasan como argumento a otra función y se ejecutan 
 dentro de esa función. Esto es útil cuando necesitas 
 realizar una acción después de que una operación 
 asíncrona (como una llamada a una API o la lectura de un archivo) 
haya terminado.
*/

// Definimos una función que toma otra función como argumento (callback)
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback(); // Aquí estamos llamando a la función callback
}

// Definimos la función callback
function despedir() {
    console.log("Adiós, nos vemos luego.");
}

// Llamamos a la función 'saludar' y le pasamos la función 'despedir' como callback
saludar("Juan", despedir);

/*
Explicación:
1 saludar es una función que toma dos argumentos: un nombre y una función (callback).
2 En el cuerpo de saludar, primero se muestra un mensaje de saludo, y luego se ejecuta la función callback.
3 despedir es la función callback que simplemente imprime "Adiós, nos vemos luego".
 4 Al llamar a saludar("Juan", despedir), primero se ejecuta el saludo, y después la función callback que imprime 
el mensaje de despedida.
*/

//Ejemplo con un callback en una operación asíncrona:
// En este ejemplo, simulamos una operación que tarda 2 segundos en completarse, y luego ejecutamos el callback:

function operacionAsincrona(callback) {
    console.log("Comenzando operación...");
    setTimeout(function() {
        console.log("Operación completada.");
        callback(); // Se llama a la función callback una vez que la operación termina
    }, 2000); // Simulamos una espera de 2 segundos
}

function resultadoFinal() {
    console.log("Este es el resultado final después de la operación.");
}

// Llamamos a la operación asincrónica y le pasamos la función callback
operacionAsincrona(resultadoFinal);
