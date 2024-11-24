//Historial
//esto se suele utilizar en la consola
/*
¿Qué es el objeto history?
El objeto history forma parte de la API del navegador y permite manipular el historial de navegación de una pestaña o ventana. Se utiliza para navegar hacia atrás o hacia adelante en el historial del navegador, así como para gestionar los estados de la aplicación en una página web sin recargarla.

Métodos principales de history
history.back()

Lleva al usuario a la página anterior en el historial, equivalente a presionar el botón "Atrás" del navegador.
history.forward()

Lleva al usuario a la siguiente página en el historial, equivalente a presionar el botón "Adelante" del navegador.
history.go(n)

Navega a una página específica del historial. El parámetro n es el número de pasos:
Si n es positivo, avanza hacia adelante.
Si n es negativo, retrocede.
history.pushState(state, title, url)

Añade un nuevo estado al historial sin recargar la página. Esto se utiliza para cambiar la URL de la página y mantener una navegación fluida en aplicaciones de una sola página (SPA).
Parámetros:
state: Datos asociados al nuevo estado.
title: Actualmente no se utiliza mucho, pero se deja para compatibilidad futura.
url: La nueva URL que aparecerá en el navegador.
history.replaceState(state, title, url)

Similar a pushState, pero en lugar de añadir un nuevo estado, reemplaza el actual.

*/
//Ejemplo práctico en JavaScript
//Supongamos que estás desarrollando una aplicación SPA:

//javascript

// Crear un nuevo estado en el historial
document.getElementById('add-state').addEventListener('click', () => {
    const newState = { page: 'about' }; // Datos del estado
    const title = 'About Page'; // Título (usualmente ignorado)
    const url = '/about'; // Nueva URL
    history.pushState(newState, title, url);
    console.log('Estado añadido:', history.state);
});

// Reemplazar el estado actual
document.getElementById('replace-state').addEventListener('click', () => {
    const updatedState = { page: 'home' };
    history.replaceState(updatedState, 'Home Page', '/');
    console.log('Estado reemplazado:', history.state);
});

// Manejar los cambios en el historial
window.addEventListener('popstate', (event) => {
    console.log('Cambio en el historial:', event.state);
});
/*
Explicación del código
pushState y replaceState:

El botón con id add-state añade un nuevo estado con la URL /about. No recarga la página, pero cambia la URL visible.
El botón con id replace-state reemplaza el estado actual con la URL /.
popstate:

Este evento se activa cuando el usuario navega hacia atrás o adelante en el historial. Permite manejar la lógica para actualizar el contenido dinámicamente según el estado actual.
Ventajas:

Ideal para aplicaciones SPA para manejar la navegación sin recargar.
Permite manipular la URL para reflejar los cambios en la interfaz de usuario.
*/