import { Component } from '@angular/core';
import{VentasComponent} from './ventas/ventas.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UsuariosComponent } from "./usuarios/usuarios.component";
import{ProductoComponent} from './producto/producto.component';
import { DirectivasComponent } from './directivas/directivas.component';
@Component({
  selector: 'app-root',
  imports: [VentasComponent, PortfolioComponent, UsuariosComponent, ProductoComponent, DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto con angular';
}
