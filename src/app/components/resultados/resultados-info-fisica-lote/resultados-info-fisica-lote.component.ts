import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultados-info-fisica-lote',
  templateUrl: './resultados-info-fisica-lote.component.html',
  styleUrls: ['./resultados-info-fisica-lote.component.css']
})
export class ResultadosInfoFisicaLoteComponent implements OnChanges {
  @Input() valores: any;
  public identificacionPredio: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.identificacionPredio = changes["valores"]["currentValue"].resultados;
    
  }
}
