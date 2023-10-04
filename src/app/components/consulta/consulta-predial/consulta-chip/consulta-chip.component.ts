import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-chip',
  templateUrl: './consulta-chip.component.html',
  styleUrls: ['./consulta-chip.component.css']
})
export class ConsultaChipComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

  public chip="";
  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  consultar() {
    console.log("Se va a consultar por: ", this.chip);
    this.accionConsultar.emit(this.chip);
  }
}
