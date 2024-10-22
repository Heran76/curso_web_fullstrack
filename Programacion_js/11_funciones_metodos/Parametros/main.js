/*
Parametros
*/

function saludo(nombre,plato){ //parametros nombre y plato
   console.log("!Hola, abuela "+nombre)//ponemos parametro nombre;
   console.log("¿Me das la receta de las "+plato+"?")//ponemos parametro plato;
   console.log("Gracias abuelita "+nombre);
   console.log("**********************");
 
   return("Abuela saludada");
}
let mensajeFinal=saludo()

saludo("Reme","Miguas");
saludo("Rosalia","Tortilla");
saludo("Paca","Canelones");
saludo("Pepa","Potaje")

alert(mensajeFinal)