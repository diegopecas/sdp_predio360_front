import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-chip',
  templateUrl: './consulta-chip.component.html',
  styleUrls: ['./consulta-chip.component.css']
})
export class ConsultaChipComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
