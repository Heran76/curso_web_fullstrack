//¿Que es el BOM ?
/*
El BOM (Browser Object Model) es un conjunto de objetos que 
el navegador web proporciona para interactuar con el entorno 
del navegador. A diferencia del DOM (que se centra en la
 estructura del contenido HTML), el BOM está más relacionado 
 con las características del navegador, como las ventanas, 
 la barra de direcciones, la consola, entre otros.

Elementos principales del BOM:
window: Representa la ventana del navegador y es el objeto global. Todas las demás propiedades del BOM (como document, navigator, location, etc.) son accesibles a través de él.
document: Aunque pertenece más al DOM, se accede a través del BOM y permite manipular el contenido del HTML.
navigator: Proporciona información sobre el navegador (por ejemplo, su nombre, versión, idioma, etc.).
location: Permite obtener o cambiar la URL de la página actual.
history: Permite interactuar con el historial de navegación.
screen: Proporciona información sobre la resolución de la pantalla.

 */
// Mostrar información sobre el navegador
console.log("Información del Navegador:");
console.log("Navegador: " + navigator.userAgent); // Información del navegador
console.log("Idioma: " + navigator.language); // Idioma configurado
console.log("Plataforma: " + navigator.platform); // Sistema operativo

// Mostrar información sobre la pantalla
console.log("\nInformación de la Pantalla:");
console.log("Ancho: " + screen.width + "px");
console.log("Alto: " + screen.height + "px");
console.log("Profundidad de color: " + screen.colorDepth + " bits");

// Mostrar información sobre la URL actual
console.log("\nInformación de la URL:");
console.log("URL actual: " + location.href);

// Manipulación del BOM: redirigir a otra página
// location.href = "https://google.com"; // Esto redirigiría al usuario

/*
¿Qué hace este código?
Utiliza objetos del BOM como navigator, screen y location para obtener información del navegador, la pantalla y la URL actual.
La información se imprime directamente en la consola del navegador.
¿Cómo probarlo?
Abre cualquier navegador.
Ve a la consola de desarrolladores (usualmente con F12 o Ctrl+Shift+I).
Pega este código en la consola y presiona Enter.

*/