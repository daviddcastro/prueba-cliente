import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  valor!:number;  // Operador de acertividad, promete que se ingresara un valor

  constructor() {
    this.valor = this.generarAleatorio();
  }

  generarAleatorio() {
    return Math.floor(Math.random() * 6)+1;
  }
}
