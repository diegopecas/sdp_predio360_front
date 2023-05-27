import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-direccion',
  templateUrl: './consulta-direccion.component.html',
  styleUrls: ['./consulta-direccion.component.css']
})
export class ConsultaDireccionComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

  public direccion = "";

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  consultar() {
    console.log("Se va a consultar por: ", this.direccion);
    this.accionConsultar.emit(this.direccion);
  }
}
