import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'proyecto001';
  nombre = 'Pedro';
  edad = 21;
  fumador = false;
  sueldo : number[] = [1200, 1500, 1700];

  esFumador() {
    return this.fumador?"Es fumador":"No es fumador";
  }
}


