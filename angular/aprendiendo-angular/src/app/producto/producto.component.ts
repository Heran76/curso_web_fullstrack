import {Component} from "@angular/core";

@Component({
 selector:"mi-producto",
 templateUrl:"producto.component.html",
 styleUrl:"producto.component.css"
})
export class ProductoComponent{
      public nombre: string;
      public marca: string;
      public precio: number;
  
     constructor(){
         this.nombre = "Portatil"
         this.marca="Asus"
         this.precio=4848
      
    
     }
}
