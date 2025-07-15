import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Producto2Component } from './producto2/producto2.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoComponent,UsuarioComponent,Producto2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto angular';
}
