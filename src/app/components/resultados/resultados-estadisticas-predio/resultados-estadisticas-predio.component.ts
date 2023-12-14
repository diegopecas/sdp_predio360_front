import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/common/services/map.service';
import { DecimalPipe } from '@angular/common';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];
@Component({
  selector: 'app-resultados-estadisticas-predio',
  templateUrl: './resultados-estadisticas-predio.component.html',
  styleUrls: ['./resultados-estadisticas-predio.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
  providers: [DecimalPipe]
})
export class ResultadosEstadisticasPredioComponent implements OnInit, OnChanges {

  @Input() predio: any;
  
  public estadisticas: any[] = [];
  public estadisticasAtributos: any;
  private predioEvaluado: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.predioEvaluado = changes["predio"]["currentValue"];
    console.log('Se cambia el predio evaluado', this.predioEvaluado);
    if(this.predioEvaluado) {
      this.consultarEstadisticas();
    }
  }

  ngOnInit(): void {
    this.estadisticas = environment.estadisticas;
    this.estadisticasAtributos = environment.capaEstadisticas.atributos;
  }

  constructor(private mapService: MapService) {
  }

  private consultarEstadisticas(){
    this.mapService.consultarEstadisticas(this.predioEvaluado.GN_CODIGO_LOTE)
    .then((response:any) => {
      if(response.features){
        const respuesta = response.features.map((r:any) => r.attributes)
        this.estadisticas.forEach(e => {
          e.valores = respuesta.filter((f:any) => f.TIPO_SERVICIO == e.categoria);
        });
      }
    })
    .catch((error:any) => {
      console.log('ESTADISTICAS SRV ERROR', error);
    });  
  }

  TimeConversion(TimeValue: number): string {

    let hours = Math.floor(TimeValue / 60);

    let minutesResago = Math.floor(TimeValue % 60);

    let minutes = Math.floor(minutesResago / 60);

    let seconds= Math.floor(minutes % 60);
    
    return hours + ':' + minutes + ':' + seconds ;
}

}
