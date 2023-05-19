import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resultados-estadisticas',
  templateUrl: './resultados-estadisticas.component.html',
  styleUrls: ['./resultados-estadisticas.component.css']
})
export class ResultadosEstadisticasComponent {
  @ViewChild('contenido') contenido: ElementRef | undefined;

  desplazarIzquierda() {
    if(this.contenido) {
      this.contenido.nativeElement.style.transform = 'translateX(-30px)'; /* Ancho de los íconos de desplazamiento */
    }
  }

  desplazarDerecha() {
    if(this.contenido){
      this.contenido.nativeElement.style.transform = 'translateX(30px)'; /* Ancho de los íconos de desplazamiento */
    }
  }
}
