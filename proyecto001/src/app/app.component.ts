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
  edad = 16;
  fumador = false;
  sueldos : number[] = [1200, 1500, 1700];
  provincias = [
    {id: 1, nombre: "Sevilla"},
    {id: 2, nombre: "Almeria"},
    {id: 3, nombre: "Huelva"},
    {id: 4, nombre: "Cadiz"},
    {id: 5, nombre: "Cordoba"},

  ];
  contador = 0;

  esFumador() {
    return this.fumador?"Es fumador":"No es fumador";
  }

  diHola() {
    alert("Hola amego");
  }

  incrementar() {
    this.contador++;
  }

  descrementar() {
    this.contador--;
  }
}


