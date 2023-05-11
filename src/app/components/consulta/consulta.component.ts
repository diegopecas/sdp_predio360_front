import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
