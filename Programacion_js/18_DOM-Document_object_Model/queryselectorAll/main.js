//QuerySelectorALL
let articulos = document.querySelectorAll(".articulo")
console.log(articulos);

articulos.forEach((articulo,i) =>{
    articulo.classList.add("articuloBase")
    //Añadir mas html
    articulo.innerHTML += "<a href='https://portfolioantonioheredia.netlify.app/'>leer más</a>";
    //Añadir un nodo del dom

    let enlace = document.createElement("a");
    enlace.setAttribute("href","https://portfolioantonioheredia.netlify.app/");
    enlace.setAttribute("target","_blank");
    enlace.style.color="green";
    let textoEnlace = document.createTextNode(" Sigue leyendo");
    enlace.append(textoEnlace);
    articulo.append(enlace);

    //articulos[i].style.border = '1px solid #ccc';
    //articulos[i].style.margin = '20px';
    //articulos[i].style.padding = '20px';
    if(i===0){
        articulo.classList.add("articuloAmarillo");
    }

    if(i===(articulos.length -1)){
        articulo.classList.add("articuloUltimo");
        articulo.innerHTML = "<h2>Sigue leyendo mas cosas en AntonioHeredia</h2>";
    }
});