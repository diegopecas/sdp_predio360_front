import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.css']
})
export class CrearDireccionComponent {

  @Input() direccionInput: any;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.consDireccion = changes["direccionInput"]["currentValue"];
    
  }

  @Output() accion = new EventEmitter();

  public direccion = "";
  private esquina = "";

  public consDireccion = {
    parte1: '', // CL, KR
    parte2: '', // número
    parte3: '', // Letra
    parte4: false, // BIS
    parte5: '', // Letra
    parte6: '', // ESTE - SUR
    parte7: '', // número
    parte8: '',// letra
    parte9: '',// número
    parte10: ''// ESTE - SUR
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
      this.esquina = this.consDireccion.parte1 + '%' + this.consDireccion.parte2 + '%' + this.consDireccion.parte7 + '%';
      this.accion.emit([this.direccion, this.consDireccion, this.esquina]);
  }
}
