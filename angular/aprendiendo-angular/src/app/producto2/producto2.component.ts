import { Component } from '@angular/core';
import { VentasComponent } from '../ventas/ventas.component';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-producto2',
  imports: [VentasComponent, UsuarioComponent],
  templateUrl: './producto2.component.html',
  styleUrl: './producto2.component.css'
})
export class Producto2Component {

}
