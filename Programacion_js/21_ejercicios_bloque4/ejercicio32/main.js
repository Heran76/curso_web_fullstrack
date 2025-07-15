/*
Ejercicio 32.

Crea una lista de la compra en la que  el usuario pueda
añdir nuevos productos para comprar, con un campo de  y un botón

cada vez que se añade un producto, este aparece en la lista con un botón
para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
cada producto añadido tiene un botón para barrarlo de la lista.
*/
document.addEventListener("DOMContentLoaded", () => {
    let nuevoProducto = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#agregar");
    let listaCompra = document.querySelector("#listaCompra");
    let emailDestino = document.querySelector("#emailDestino");
    let btnEnviarEmail = document.querySelector("#enviarEmail");
  
    btnAgregar.addEventListener("click", () => {
      let productoParaAgregar = nuevoProducto.value.trim();
      if (productoParaAgregar) {
        const productoFinal = document.createElement("li");
        productoFinal.textContent = productoParaAgregar;
  
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "x";
  
        btnEliminar.addEventListener("click", () => {
          productoFinal.remove();
        });
  
        productoFinal.appendChild(btnEliminar);
        listaCompra.appendChild(productoFinal);
        nuevoProducto.value = "";
      }
    });
  
    btnEnviarEmail.addEventListener("click", () => {
      const email = emailDestino.value.trim();
      if (email && listaCompra.children.length > 0) {
        // Crear el contenido del correo
        let productos = [];
        for (let item of listaCompra.children) {
          productos.push(item.textContent.replace("x", "").trim());
        }
  
        const asunto = "Mi lista de la compra";
        const cuerpo = productos.join("%0D%0A"); // %0D%0A es el salto de línea en URL encoding
  
        // Crear el enlace mailto
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
          asunto
        )}&body=${cuerpo}`;
  
        // Abrir el cliente de correo predeterminado
        window.location.href = mailtoLink;
      } else {
        if (!email) {
          alert("Por favor, introduce un correo electrónico válido");
        } else {
          alert("La lista está vacía");
        }
      }
    });
  });
  