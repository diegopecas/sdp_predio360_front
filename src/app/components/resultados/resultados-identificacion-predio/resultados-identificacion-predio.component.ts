import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultados-identificacion-predio',
  templateUrl: './resultados-identificacion-predio.component.html',
  styleUrls: ['./resultados-identificacion-predio.component.css']
})
export class ResultadosIdentificacionPredioComponent implements OnChanges {
  
  @Input() valores:any;
  
  public identificacionPredio:any;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ResultadosIdentificacionPredioComponent', changes);
    this.identificacionPredio = changes["valores"]["currentValue"];
  }

  
}
