// Primera promesa
let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let correcto = true;
        if (correcto) {
            let miObjeto = {
                nombre: "Rider Republic",
                categoria: "Conducción",
                anio: 2021
            };
            resolve(miObjeto); // Resuelve con el objeto, no con una cadena
        } else {
            reject("No se ha cumplido la promesa :(");
        }
    }, 3500);
});

miPromesa
    .then(resultado => {
        console.warn(resultado); // Muestra el objeto
    })
    .catch(error => {
        console.warn("Error: ", error);
    });

// Promesas encadenadas
function serviPizza() {
    return new Promise(resolve => { // Añade return
        setTimeout(() => resolve("Pizza servida !!"), 15000);
    });
}

function servirHamburguesa() {
    return new Promise(resolve => { // Añade return
        setTimeout(() => resolve("Hamburguesa servida !!"), 15000);
    });
}

function servirSolomilloSalsaAcitunas() {
    return new Promise(resolve => { // Añade return
        setTimeout(() => resolve("Solomillo con salsa de aceitunas servido !!"), 15000);
    });
}

serviPizza()
    .then(resultado1 => {
        console.log(resultado1);
        return servirHamburguesa(); // Retorna la siguiente promesa
    })
    .then(resultado2 => {
        console.log(resultado2);
        return servirSolomilloSalsaAcitunas(); // Retorna la siguiente promesa
    })
    .then(resultado3 => { // Corrige el error tipográfico (,the -> .then)
        console.log(resultado3);
    })
    .catch(error => {
        console.log("Error en las comandas: ", error);
    });