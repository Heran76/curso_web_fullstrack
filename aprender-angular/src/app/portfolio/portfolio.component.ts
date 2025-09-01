import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: 'portfolio.component.html',
  styleUrl: 'portfolio.component.css'
})
export class PortfolioComponent {
  web = "https://portfolioantonioheredia.netlify.app/"
  redirigir = false;

  lenguajes = [
    {id:1, nombre:"Html"},
    {id:2, nombre:"CSS"},
    {id:3, nombre:"Javascript"},
    {id:4, nombre:"Python"}
  ];


  cambiarRedirigir(){
    if(this.redirigir == false){
      this.redirigir =true;
    }else{
      this.redirigir = false;
    }
  }
  
}
