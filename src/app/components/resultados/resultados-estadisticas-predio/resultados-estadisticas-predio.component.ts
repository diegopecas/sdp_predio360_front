import { Component } from '@angular/core';
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
  selector: 'app-resultados-estadisticas-predio',
  templateUrl: './resultados-estadisticas-predio.component.html',
  styleUrls: ['./resultados-estadisticas-predio.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class ResultadosEstadisticasPredioComponent {

  public estadisticas: any[] = [];

  ngOnInit(): void {
    this.estadisticas = environment.estadisticas;
    console.log('ESTADISTICAS', this.estadisticas)
  }

  counter: number = 0;
  
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

  verDetalle(i:any) {
    
  }

}
