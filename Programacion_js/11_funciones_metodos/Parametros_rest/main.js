/*
Parámetros Rest
*/

function peliculas(pelicula1,pelicula2, ...restopeliculas){
          document.write(`<h2>${pelicula1}</h2>`);
          document.write(`<h2>${pelicula2}</h2>`);
          document.write(`<h2>${restopeliculas[0]}</h2>`);
          document.write(`<h2>${restopeliculas[1]}</h2>`);
          document.write(`<h2>${restopeliculas[2]}</h2>`)
          return;
}

peliculas("Libertarias","Amacenes que no es poco","Solo en casa","Terminator","El vuelo del navegante")