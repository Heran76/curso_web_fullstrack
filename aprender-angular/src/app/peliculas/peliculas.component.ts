import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
     public nombre:string;
  
   constructor() {
       this.nombre = "ole"
     }
}
