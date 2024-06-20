import { Component, EventEmitter, Output } from '@angular/core';
import { MapService } from 'src/app/common/services/map.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  @Output() accion = new EventEmitter();

  constructor(
    private mapService: MapService
  ) {}

  seleccion(opcion: any) {
    if(opcion == 'consulta-galeria') {
      this.mapService.switchGaleria(true);
    } else {
      this.mapService.switchGaleria(false);
    }
    this.accion.emit(opcion);
  }
}
