import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MapService } from 'src/app/common/services/map.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agregar-capas',
  templateUrl: './agregar-capas.component.html',
  styleUrls: ['./agregar-capas.component.css']
})
export class AgregarCapasComponent implements OnInit {
  @Output() accion = new EventEmitter();

  public capas = [] as any[];

  servicio = {
    url: "",
    nombre: ""
  }

  constructor(private mapService: MapService){

  }

  ngOnInit() {
    this.capas = environment.capasPrecargadas
  }

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  agregar(){
    this.mapService.agregarCapaRest(this.servicio.nombre, this.servicio.url);
  }

  agregarCapa(capa:any) {
    this.mapService.agregarCapaRestPrecargada(capa);
    capa.estado = 1;
  }

  removerCapa(capa:any) {
    this.mapService.removerCapaRestPrecargada(capa);
    capa.estado = 0;
  }
}

