import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-localizacion',
  templateUrl: './resultados-localizacion.component.html',
  styleUrls: ['./resultados-localizacion.component.css']
})
export class ResultadosLocalizacionComponent {

  
  consultarSV() {
    // const url = "http://maps.google.com/?cbll=" + lat + "," + lon + "&cbp=12,90,0,0,5&layer=c";; // Reemplaza esto con tu URL real
    const url = "http://maps.google.com/?cbll=4.6071447,-74.1078082&cbp=12,90,0,0,5&layer=c";; // Reemplaza esto con tu URL real
    window.open(url, '_blank');
  }
}
