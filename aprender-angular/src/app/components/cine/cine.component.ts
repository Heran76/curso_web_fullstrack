import { Component } from '@angular/core';
import { pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cine',
  imports: [FormsModule], 
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
    public titulo = "string";
    public peliculas: Array<pelicula>;
    
    //Trabajando con formularios.
    public mi_pelicula:string ="";

    constructor(){
        this.titulo = "Componente de cine";
        this.peliculas = [
            new pelicula(1,'Spiderman', 'Accion', 'Sam Raimi', 2002, 'Disney+', false),
            new pelicula(2,'Batman', 'Accion', 'Christopher Nolan', 2008, 'HBO Max', true),
            new pelicula(3,'Gran Torino', 'Drama', 'Clint Eastwood', 2008, 'Disney+', true),
            new pelicula(4,'Looper', 'Ciencia Ficcion', 'Rian Johnson', 2012, 'Netflix', false),
            new pelicula(5,'El Padrino', 'Drama', 'Francis Ford Coppola', 1972, 'Amazon Prime Video', true),
        ];
    }
    ngOnInit(){
      console.log(this.peliculas);
    }
}
