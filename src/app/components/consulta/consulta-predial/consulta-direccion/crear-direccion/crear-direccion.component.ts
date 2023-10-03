import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.css']
})
export class CrearDireccionComponent {
  
  @Output() accion = new EventEmitter();

  public direccion = "";

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

  construirDireccion() {
    this.direccion =  (this.consDireccion.parte1 !== '' ? this.consDireccion.parte1+' ' : '')
                      +(this.consDireccion.parte2 !== '' ? this.consDireccion.parte2+ ' ' : '')
                      +(this.consDireccion.parte3 !== '' ? this.consDireccion.parte3+ ' ' : '')
                      +(this.consDireccion.parte4 ? 'BIS ' : '')
                      +(this.consDireccion.parte5 !== '' ? this.consDireccion.parte5+ ' ' : '')
                      +(this.consDireccion.parte6 !== '' ? this.consDireccion.parte6+ ' ' : '')
                      +(this.consDireccion.parte7 !== '' ? this.consDireccion.parte7+ ' ' : '')
                      +(this.consDireccion.parte8 !== '' ? this.consDireccion.parte8+ ' ' : '')
                      +(this.consDireccion.parte9 !== '' ? this.consDireccion.parte9+ ' ' : '')
                      +(this.consDireccion.parte10 !== '' ? this.consDireccion.parte10+ ' ' : '');
      this.accion.emit(this.direccion);
  }
}
