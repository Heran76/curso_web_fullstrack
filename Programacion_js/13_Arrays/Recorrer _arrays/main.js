/*
Bucles para recorrer arrays
*/

//Bucle for

let actores = ["Ana belen","Emma Suarez","Dicaprio","Bradpi","Penelope Cruz","Paco Leon"];

for(let i = 0; i <= actores.length; i++){ // importante .length
    //console.log(actores[i]);
}

//Bucle for OF

for(let actor of actores){
    //console.log("con for of "+actor);
}

//Bucle for IN

for(let indice in actores){
   //console.log(indice, actores[indice]);
}

// Bucle ForEACH

actores.forEach((actor,indice) =>{
//console.log(indice,actor);
});

//Bucle map

actores.map((actor, indice)=>{
    console.log(indice,actor);
})

