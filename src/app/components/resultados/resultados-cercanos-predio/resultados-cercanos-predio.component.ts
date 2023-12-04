import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapService } from 'src/app/common/services/map.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resultados-cercanos-predio',
  templateUrl: './resultados-cercanos-predio.component.html',
  styleUrls: ['./resultados-cercanos-predio.component.css']
})
export class ResultadosCercanosPredioComponent implements OnInit, OnChanges {

  @Input() predio: any;
  
  public capas = [] as any[];
  public currentIndexCapa = -1;
  public predioEvaluado: any;

  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    this.capas = environment.capasBuffer;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.predioEvaluado = changes["predio"]["currentValue"];
    console.log("cercanos", this.predioEvaluado)
  }
  
  seleccionarCapaBuffer() {
    const capa = this.capas[this.currentIndexCapa];
    this.mapService.agregarCapaBuffer(capa);
    // this.cambioCapaBuffer.emit(this.capas[this.currentIndexCapa]);
  }

}
