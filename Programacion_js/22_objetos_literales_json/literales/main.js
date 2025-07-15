//objetos literales
//Es una estructura de datos que agurpa propiedades y métodos
//bajo el mismo nombre



let pelicula = {
    titulo : "Terminator",
    anio : 1984,
    genero : "Ciencia ficción",
    prota : "Arnold Schwarzenegger",
    elenco : ["Arnold","Linda","otros"],
    descripcion : function(){  //obejto this
        return `${this.titulo} es una pelicula
                de ${this.prota}, hecha en el año ${this.anio}
               `
    },
    mostrarElenco:  ()=>{
        pelicula.elenco.forEach(nombre =>{
            console.log(nombre);
        })
    }

}

console.log(pelicula)
console.log("*******")
console.log(
    pelicula.titulo,
    pelicula.prota
) 
//cambiar propiedad 
pelicula.anio = 2025;
console.log("Cambiar propiedad anio")
console.log(pelicula)

//añadir clave valor al objeto
pelicula.secuela = "terminator 2";
console.log("Añadir clave valor al objeto")
console.log(pelicula)

//utilizar this para acceder a los valores
console.log("*****[this]*****")
console.log(pelicula.descripcion())

//utilizar array
console.log("****[Array]*****")
console.log(pelicula.elenco)

//eliminar un objeto delete
delete pelicula.genero;
console.log("*****[delete//genero*****]");
console.log(pelicula)