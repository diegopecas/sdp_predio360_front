import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from 'src/app/common/services/map.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resultados-urbanistico',
  templateUrl: './resultados-urbanistico.component.html',
  styleUrls: ['./resultados-urbanistico.component.css']
})
export class ResultadosUrbanisticoComponent implements OnInit, OnChanges {

  @Input() predio: any;
  
  public licencias: any[] = [];
  public licenciasAll: any[] = [];
  public metaLicencias: any;
  public currentIndex=-1;
  private predioEvaluado: any;
  public pot = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.predioEvaluado = changes["predio"]["currentValue"];
    if(this.predioEvaluado) {
      this.currentIndex=-1;
      this.pot = 0;
      this.licencias = [];
      this.consultarLicencias();
    }
  }

  ngOnInit(): void {
    this.metaLicencias = environment.capaDatosUrbanisticos;
  }

  constructor(private mapService: MapService,
    private sanitizer: DomSanitizer) {
  }

  private consultarLicencias(){
    this.mapService.consultarLicencias(this.predioEvaluado.GN_CODIGO_LOTE)
    .then((response:any) => {
      this.licenciasAll = response;
    })
    .catch((error:any) => {
      console.log('ESTADISTICAS SRV ERROR', error);
    });  
  }

  cambioPot(pot:any){
    this.pot = pot;
    switch(this.pot) {
      case 190:
        this.licencias = this.licenciasAll.filter(lic => lic[environment.capaDatosUrbanisticos.filterPot] < this.convertirFechaNumero("29/12/2021"));
        console.log("filtrar licencias 190", this.licenciasAll, new Date("29/12/2021").getTime(), this.licencias)
        // menor a 29/12/2021
        break;
      case 555:
        this.licencias = this.licenciasAll.filter(lic => lic[environment.capaDatosUrbanisticos.filterPot] >= this.convertirFechaNumero("29/12/2021"));
        console.log("filtrar licencias 555", this.licenciasAll, new Date("29/12/2021").getTime(), this.licencias)
        // desde 29/12/2021
        break;  
    }
  }

  convertirFechaNumero(fechaString:String) {
    // Parsear la cadena como fecha (formato: dd/mm/yyyy)
    const partesFecha = fechaString.split('/');
    const fecha = new Date(parseInt(partesFecha[2]), parseInt(partesFecha[1]) - 1, parseInt(partesFecha[0]));
    return fecha.getTime();
  }

  htmlSecure(unsafeHtml:any){
    return this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
  }

  tituloHtml(value:any){
    return this.htmlSecure(value+': ');
  }
  
  sortBy(values:any[], prop: string) {
    return values.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
