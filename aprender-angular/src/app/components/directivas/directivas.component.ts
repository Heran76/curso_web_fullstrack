import { Component } from '@angular/core';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-directivas',
  imports: [PeliculasComponent,NgClass],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
   public colorear:boolean=true;
}
