/*
Array tridemensional
*/
let cartaRestaurante = [
    ["Plato", "cantidad", "Precios", "Tamaños"],
    ["Menu pizza", 2, [8, 10, 15], ["Pequeño", "Mediano", "Grande"]],
    ["Menu burguer", 2, [10, 12, 17], ["Pequeño", "Mediano", "Grande"]],
    ["Menu Paella", 10, [14, 18, 25], ["Pequeño", "Mediano", "Grande"]]
];

for (let menu of cartaRestaurante) {
    console.log("-------------");
    for (let elemento of menu) {
        if (Array.isArray(elemento)) {
            for (let subElemento of elemento) {
                console.log(subElemento);
            }
        } else {
            console.log(elemento);
        }
    }
}
