/*
Ejercicio 10
-------------
El otro dia fui con mi amigo Pepe y Manolo a un restaurante
de smash burguer
yo me comi 2, pepe se comio 3 y Manolo, como es culturista se comio 6;
¿Cuantas hamburguesas nos comimos en total?
y...¿Es cierto que yo me comi menos que pepe?
*/

const hamburguesa = 1;
let yo = 2 * hamburguesa;
let pepe = 3 * hamburguesa;
let manolo = 6 * hamburguesa;

let escierto = yo < pepe;

let total = yo + pepe + manolo;

{
 console.log(`Total de hamburguesas es = ${total}
¿Es cierto que victor comion menos que pepe? ${escierto}
    `)
}
