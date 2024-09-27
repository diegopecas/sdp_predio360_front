import { Component, EventEmitter, Output } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-consulta-direccion',
  templateUrl: './consulta-direccion.component.html',
  styleUrls: ['./consulta-direccion.component.css']
})
export class ConsultaDireccionComponent {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();

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

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  consultar() {
    console.log("Se va a consultar por: ", this.direccion);
    this.accionConsultar.emit([this.direccion, this.esquina]);
  }

  construirDireccion() {
    this.direccion =  (this.consDireccion.parte1 !== '' ? this.consDireccion.parte1 : '')
                      +(this.consDireccion.parte2 !== '' ? ' '+ this.consDireccion.parte2 : '')
                      +(this.consDireccion.parte3 !== '' ? this.consDireccion.parte3 : '')
                      +(this.consDireccion.parte4 ? ' BIS ' : '')
                      +(this.consDireccion.parte5 !== '' ? ' ' + this.consDireccion.parte5 : '')
                      +(this.consDireccion.parte6 !== '' ? ' ' + this.consDireccion.parte6 : '')
                      +(this.consDireccion.parte7 !== '' ? ' ' + this.consDireccion.parte7 : '')
                      +(this.consDireccion.parte8 !== '' ? this.consDireccion.parte8 : '')
                      +(this.consDireccion.parte9 !== '' ? ' ' + this.consDireccion.parte9 : '')
                      +(this.consDireccion.parte10 !== '' ? ' ' + this.consDireccion.parte10 : '');
      // this.accion.emit(this.direccion);
  }

  isPopupOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.consultar();
  }

  closePopupCancelar() {
    this.isPopupOpen = false;
  }

  cambioDireccion(ev:any){
    console.log(ev)
    this.direccion = ev[0];
    this.consDireccion = ev[1];
    this.esquina = ev[2];
  }
}
