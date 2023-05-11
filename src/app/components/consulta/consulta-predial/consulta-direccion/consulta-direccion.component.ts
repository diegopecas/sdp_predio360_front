import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-direccion',
  templateUrl: './consulta-direccion.component.html',
  styleUrls: ['./consulta-direccion.component.css']
})
export class ConsultaDireccionComponent {
  @Output() accion = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }
}
