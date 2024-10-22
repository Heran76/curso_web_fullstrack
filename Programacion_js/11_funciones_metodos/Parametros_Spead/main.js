/*
Operador ...SPEAD espande desenpaqueta dentro de otro;
*/

let numeros = [1,2,3,5];
let misNumeros = [...numeros, 6,7,8,9];

console.log(misNumeros)




function peliculas(pelicula1,pelicula2, ...restopeliculas){
    console.log(`${pelicula1}`);
    console.log(`${pelicula2}`);
    console.log(`${restopeliculas}`);
 
    return;
}
peliculas("Libertarias","Amacenes que no es poco","Solo en casa","Terminator","El vuelo del navegante")

let mispelifav=["Abre los ojos","Mar adentro"]
let lista = peliculas(...mispelifav)

console.log(lista)