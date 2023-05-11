import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-seleccion-espacial',
  templateUrl: './consulta-seleccion-espacial.component.html',
  styleUrls: ['./consulta-seleccion-espacial.component.css']
})
export class ConsultaSeleccionEspacialComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
