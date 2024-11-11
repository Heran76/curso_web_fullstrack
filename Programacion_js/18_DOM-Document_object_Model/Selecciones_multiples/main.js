//getElementByClassName - Seleccionar multiples elementos con una clase

let articulos = document.getElementsByClassName("articulos");
console.log(articulos);

for(let i = 0; i < articulos.length; i++){
    
    articulos[i].classList.add("articuloBase")
    //Añadir mas html
    articulos[i].innerHTML += "<a href='https://portfolioantonioheredia.netlify.app/'>leer más</a>";
    //Añadir un nodo del dom

    let enlace = document.createElement("a");
    enlace.setAttribute("href","https://portfolioantonioheredia.netlify.app/");
    enlace.setAttribute("target","_blank");
    enlace.style.color="green";
    let textoEnlace = document.createTextNode(" Sigue leyendo");
    enlace.append(textoEnlace);
    articulos[i].append(enlace);

    //articulos[i].style.border = '1px solid #ccc';
    //articulos[i].style.margin = '20px';
    //articulos[i].style.padding = '20px';
    if(i===0){
        articulos[i].classList.add("articuloAmarillo");
    }

    if(i===(articulos.length -1)){
        articulos[i].classList.add("articuloUltimo");
        articulos[i].innerHTML = "<h2>Sigue leyendo mas cosas en AntonioHeredia</h2>";
    }


}





//getElementByTag