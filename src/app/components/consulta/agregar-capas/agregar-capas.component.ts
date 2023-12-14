import { Component, EventEmitter, Output } from '@angular/core';
import { MapService } from 'src/app/common/services/map.service';

@Component({
  selector: 'app-agregar-capas',
  templateUrl: './agregar-capas.component.html',
  styleUrls: ['./agregar-capas.component.css']
})
export class AgregarCapasComponent {
  @Output() accion = new EventEmitter();

  servicio = {
    url: "",
    nombre: ""
  }

  constructor(private mapService: MapService){

  }

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  agregar(){
    this.mapService.agregarCapaRest(this.servicio.nombre, this.servicio.url);
  }
}
