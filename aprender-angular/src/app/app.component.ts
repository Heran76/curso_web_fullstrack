import { Component } from '@angular/core';
import{VentasComponent} from './components/ventas/ventas.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import{ProductoComponent} from './components/producto/producto.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import{ config } from './models/config';  
@Component({
  selector: 'app-root',
  imports: [VentasComponent, PortfolioComponent, UsuariosComponent, ProductoComponent, DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto con angular';
  titulo = config.title;
  descripcion = config.descripcion
}
