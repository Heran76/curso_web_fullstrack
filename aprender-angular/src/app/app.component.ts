import { Component } from '@angular/core';
import{ProductoComponent} from './producto/producto.componet';
import{UsuariosComponent} from './usuarios/usuarios.component';
import{PeliculasComponent} from './peliculas/peliculas.component';
@Component({
  selector: 'app-root',
  imports: [ProductoComponent, UsuariosComponent, PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto con angular';
}
