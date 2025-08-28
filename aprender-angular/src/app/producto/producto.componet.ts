import { Component } from "@angular/core";
import { UsuariosComponent } from "../usuarios/usuarios.component";
@Component({
    selector:"mi-producto",
    imports:[UsuariosComponent],
    templateUrl:"producto.component.html",
    styleUrl:"producto.componet.css"
})

export class ProductoComponent{
    public nombre: string;
    public marca: string;
    public descripcion: string;
    public precio: number;
    
    constructor(){
        this.nombre= "Portatiles";
        this.marca="Macbook";
        this.descripcion="Es un ordenador Apple";
        this.precio=2000;
    }
}