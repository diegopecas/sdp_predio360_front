import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-predial',
  templateUrl: './consulta-predial.component.html',
  styleUrls: ['./consulta-predial.component.css']
})
export class ConsultaPredialComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
