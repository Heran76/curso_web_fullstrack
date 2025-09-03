import { Component } from '@angular/core';
import{ProductoComponent} from './producto/producto.componet';
import{VentasComponent} from './ventas/ventas.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UsuariosComponent } from "./usuarios/usuarios.component";
@Component({
  selector: 'app-root',
  imports: [ProductoComponent, VentasComponent, PortfolioComponent, UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto con angular';
}
