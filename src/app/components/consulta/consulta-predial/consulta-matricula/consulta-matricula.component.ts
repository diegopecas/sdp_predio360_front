import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-matricula',
  templateUrl: './consulta-matricula.component.html',
  styleUrls: ['./consulta-matricula.component.css']
})
export class ConsultaMatriculaComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

  public matricula="";

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  consultar() {
    console.log("Se va a consultar por: ", this.matricula);
    this.accionConsultar.emit(this.matricula);
  }
}
