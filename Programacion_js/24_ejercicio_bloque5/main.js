/*
¡¡¡ Super Ejercicio de Javascript !!!

Crea una apliación web en la que puedas añadir, mostrar y eliminar
tus peliculas javoritas.
Cada peli que guardes debe tener:
-titulo de la pelicula
-Fecha guardado
-Puntuación de pipularidad ( un valor aleatorio en 1 y 100).

Las peliculas deben mantenerse guardadas aunque se recarguen la página
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento

Tareeas :
 - Ejercicio 39 : Crea el formulario necesario
 - Ejercicio 40 : Función para guardar peliculas con los datos necesarios
 - Ejercicio 41 : función para mostrar peliculas extraidas del localStorage
 -Ejercicio 42 : Haz que las peliculas carguen automaiticamente al abrir la web
 -Ejercicio 43 : Función para eliminar peliculas.

*/
function mostrar() {
    let listado = document.querySelector("#listado");
    listado.innerHTML = "";

    // Sacar las pelis del localStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    // Si no hay pelis, mostrar mensaje
    if (!pelisGuardadas || pelisGuardadas.length === 0) {
        listado.innerText = "No hay películas para mostrar";
        return false;
    }

    // Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {
        const peliArticle = document.createElement("article");
        peliArticle.innerHTML = `
          <h3>${pelicula.titulo}</h3>
          <p>Fecha : ${pelicula.fecha}</p>
          <p>Popularidad : ${pelicula.popularidad}</p>
          <p>
             <button id="eliminar${indice}" data-id="${indice}">Eliminar</button>
          </p>
          <hr>
        `;
        listado.appendChild(peliArticle);

        // Agregar evento para eliminar
        peliArticle.querySelector("button").addEventListener("click", () => eliminar(indice));
    });

    return true;
}

function guardar() {
    let campoTitulo = document.querySelector("#titulo");
    let titulo = campoTitulo.value.trim();

    if (titulo === "") {
        alert("Por favor, mete el título de la película");
        return false;
    }

    // Conseguir la fecha actual
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    // Generar un número aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    // Crear objeto película
    let pelicula = { titulo, fecha: fechaActual, popularidad };

    // Sacar todas las películas (array de objetos)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    pelisGuardadas.push(pelicula);

    // Guardar todo en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Limpiar el campo de texto
    campoTitulo.value = "";

    // Mostrar las películas
    mostrar();

    return true;
}

// Función para eliminar películas
function eliminar(indice) {
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    pelisGuardadas.splice(indice, 1); // Eliminar del array

    // Guardar cambios en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Volver a mostrar la lista actualizada
    mostrar();
}

// Capturar el formulario y escuchar el evento submit
let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    guardar();
});

// Cargar las películas al abrir la web

function mostrar() {
    let listado = document.querySelector("#listado");
    listado.innerHTML = "";

    // Sacar las pelis del localStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    // Si no hay pelis, mostrar mensaje
    if (!pelisGuardadas || pelisGuardadas.length === 0) {
        listado.innerText = "No hay películas para mostrar";
        return false;
    }

    // Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {
        const peliArticle = document.createElement("article");
        peliArticle.innerHTML = `
          <h3>${pelicula.titulo}</h3>
          <p>Fecha : ${pelicula.fecha}</p>
          <p>Popularidad : ${pelicula.popularidad}</p>
          <p>
             <button id="eliminar${indice}" data-id="${indice}">Eliminar</button>
          </p>
          <hr>
        `;
        listado.appendChild(peliArticle);

        // Agregar evento para eliminar
        peliArticle.querySelector("button").addEventListener("click", () => eliminar(indice));
    });

    return true;
}

function guardar() {
    let campoTitulo = document.querySelector("#titulo");
    let titulo = campoTitulo.value.trim();

    if (titulo === "") {
        alert("Por favor, mete el título de la película");
        return false;
    }

    // Conseguir la fecha actual
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    // Generar un número aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    // Crear objeto película
    let pelicula = { titulo, fecha: fechaActual, popularidad };

    // Sacar todas las películas (array de objetos)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    pelisGuardadas.push(pelicula);

    // Guardar todo en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Limpiar el campo de texto
    campoTitulo.value = "";

    // Mostrar las películas
    mostrar();

    return true;
}

// Función para eliminar películas
function eliminar(indice) {
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    pelisGuardadas.splice(indice, 1); // Eliminar del array

    // Guardar cambios en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Volver a mostrar la lista actualizada
    mostrar();
}

// Capturar el formulario y escuchar el evento submit
let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    guardar();
});

// Cargar las películas al abrir la web
mostrar();

