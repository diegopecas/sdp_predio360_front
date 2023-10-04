import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-cedula',
  templateUrl: './consulta-cedula.component.html',
  styleUrls: ['./consulta-cedula.component.css']
})
export class ConsultaCedulaComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

  public cedula = "";
  
  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  consultar() {
    console.log("Se va a consultar por: ", this.cedula);
    this.accionConsultar.emit(this.cedula);
  }
}
