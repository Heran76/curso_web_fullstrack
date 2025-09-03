import { Component } from '@angular/core';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-usuarios',
  imports: [VentasComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
usuario = {
  id: 1,
  nombre: "Antonio",
  apellido: "Heredia",
  edad: 44,
  rol: "User"
};
 
}
