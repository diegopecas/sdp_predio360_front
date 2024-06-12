import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  constructor(private mapService: MapService){

  }
  
  cambio3D() {
    console.log("Cambio a 3D");
    this.mapService.switchView("3D");
  }

  cambio2D() {
    console.log("Cambio a 2D");
    this.mapService.switchView("2D");
  }
}
