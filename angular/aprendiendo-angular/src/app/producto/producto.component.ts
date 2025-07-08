import {Component} from "@angular/core";

@Component({
 selector:"mi-producto",
 templateUrl:"producto.component.html",
 styleUrl:"producto.component.css"
})
export class ProductoComponent{
      constructor(){
        console.log("Se ha cargado el componente")
        alert("Hola")
      }
}
