import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  @Output() buscar = new EventEmitter();

  public valor = null;

  enviar() {
    console.log("enviar", this.valor);
    this.buscar.emit(this.valor);
  }
}
