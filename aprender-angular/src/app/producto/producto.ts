import { Component } from "@angular/core";

@Component({
    selector:"producto",
    templateUrl:"producto.html",
    styleUrl:"producto.css"
})

export class Producto{
    constructor(){
        console.log("Se ha cargado el componente");
        alert("Hola")
    }
}