import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { environment } from 'src/environments/environment';
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
  selector: 'app-resultados-estadisticas',
  templateUrl: './resultados-estadisticas.component.html',
  styleUrls: ['./resultados-estadisticas.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class ResultadosEstadisticasComponent implements OnInit {
  
  ngOnInit(): void {
    this.estadisticas = environment.estadisticas;
    console.log('ESTADISTICAS', this.estadisticas)
  }

  @ViewChild('contenido') contenido: ElementRef | undefined;
  @ViewChild('panel') panel: ElementRef | undefined;

  public seccion = 'general';
  public estadisticas: any[] = [];
  
  private anchoSeccion = 344;
  private itemsSeccion = {
    general: 4,
    equipamiento: 4,
    parques:3,
    transporte:2,
    centros:1
  }

  desplazarIzquierda() {
    if(this.contenido && this.panel) {
      console.log(this.contenido.nativeElement.offsetWidth);
      console.log(this.panel.nativeElement.offsetWidth);
      console.log(this.panel.nativeElement.offsetWidth - this.contenido.nativeElement.offsetWidth);
      console.log((this.panel.nativeElement.offsetWidth - this.contenido.nativeElement.offsetWidth)/2);

      this.contenido.nativeElement.style.transform = 'translateX(30px)'; /* Ancho de los íconos de desplazamiento */
    }
  }

  desplazarDerecha() {
    if(this.contenido && this.panel){
      this.contenido.nativeElement.style.transform = 'translateX('+(this.panel.nativeElement.offsetWidth - this.contenido.nativeElement.offsetWidth - 30)+'px)'; // 'translateX(-150px)'; /* Ancho de los íconos de desplazamiento */
    }
  }

  subseccion(valor:any) {
    console.log('subseccion', valor);
    this.seccion = valor;
  }


  counter: number = 0;
  images = [
    'https://placeimg.com/300/300/nature/6',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];

  onNext() {
    if (this.counter != this.estadisticas.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
