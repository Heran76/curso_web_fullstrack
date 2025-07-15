/*
Ejercicio 6
-------------

En mi tienda de videojuegos tenemos una oferta.
Si compro un juego de 50 euros o mas, te hace un 20% de descuento.

si un cliente compra el tekken 15 que cuesta 50 euros 
¿Cuanto se le queda ?
*/

let precioJuego = 50;
let descuento = precioJuego * 0.2;
let preciofinal = precioJuego - descuento;

console.log (`El precio final con el descuento aplicado es de ${preciofinal}`)