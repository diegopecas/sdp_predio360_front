import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-matricula',
  templateUrl: './consulta-matricula.component.html',
  styleUrls: ['./consulta-matricula.component.css']
})
export class ConsultaMatriculaComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
