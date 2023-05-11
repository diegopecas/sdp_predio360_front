import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-upl',
  templateUrl: './consulta-upl.component.html',
  styleUrls: ['./consulta-upl.component.css']
})
export class ConsultaUplComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
