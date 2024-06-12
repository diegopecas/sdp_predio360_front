import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-predial',
  templateUrl: './consulta-predial.component.html',
  styleUrls: ['./consulta-predial.component.css']
})
export class ConsultaPredialComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  public direccion = "";
  private esquina = "";

  public consDireccion = {
    parte1: '',
    parte2: '',
    parte3: '',
    parte4: false, // BIS
    parte5: '',
    parte6: '', // ESTE - SUR
    parte7: '',
    parte8: '',
    parte9: '',
    parte10: ''
  }

  isPopupOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.consultar();
  }

  consultar() {
    console.log("Se va a consultar por: ", this.direccion);
    this.accion.emit('consulta-direccion');
    this.accionConsultar.emit([this.direccion, this.esquina]);
  }

  cambioDireccion(ev:any){
    console.log(ev)
    this.direccion = ev[0];
    this.consDireccion = ev[1];
    this.esquina = ev[2];
  }
}
