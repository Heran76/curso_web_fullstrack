import { Component } from '@angular/core';
import { VentasComponent } from '../ventas/ventas.component';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common'; 
@Component({
  selector: 'app-usuarios',
  imports: [VentasComponent, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
usuario = {
  id: 1,
  nombre: "Antonio",
  apellido: "Heredia",
  edad: 44,
  rol: "admin"
};
 fecha = new Date(2025,4,9);
}
