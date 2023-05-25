import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resultados-estadisticas',
  templateUrl: './resultados-estadisticas.component.html',
  styleUrls: ['./resultados-estadisticas.component.css']
})
export class ResultadosEstadisticasComponent {
  @ViewChild('contenido') contenido: ElementRef | undefined;
  @ViewChild('panel') panel: ElementRef | undefined;

  public seccion = 'general';
  
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
}
