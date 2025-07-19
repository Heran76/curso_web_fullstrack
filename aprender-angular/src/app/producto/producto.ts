import { Component, OnInit } from "@angular/core";
import { UsuarioComponent } from "../usuario/usuario.component";
import { PeliculasComponent } from "../peliculas/peliculas.component";

@Component({
    selector:"producto",
    imports:[UsuarioComponent, PeliculasComponent],
    templateUrl:"producto.html",
    styleUrl:"producto.css"
})

export class Producto implements OnInit{
    
    public nombre: string;
    public marca: string;
    public precio: number;
    
    constructor(){
        
        this.nombre = "PC Portatil";
        this.marca ="Asus";
        this.precio= 4948;
        console.log("Esta cargado el componente");
        //alert("Hola")
    }

    ngOnInit(){
        console.log("El componente sea cargado")
    }

}