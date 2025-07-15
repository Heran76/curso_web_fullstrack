import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer Proyecto con Angular';
}
