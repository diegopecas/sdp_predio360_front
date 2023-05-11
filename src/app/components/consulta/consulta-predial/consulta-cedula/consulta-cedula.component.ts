import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-cedula',
  templateUrl: './consulta-cedula.component.html',
  styleUrls: ['./consulta-cedula.component.css']
})
export class ConsultaCedulaComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
