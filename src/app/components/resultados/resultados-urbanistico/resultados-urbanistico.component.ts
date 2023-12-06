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
  public metaLicencias: any;
  public currentIndex=-1;
  private predioEvaluado: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.predioEvaluado = changes["predio"]["currentValue"];
    if(this.predioEvaluado) {
      this.currentIndex=-1;
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
    console.log("consultar licencias del predio", this.predioEvaluado.GN_CODIGO_LOTE);
    this.mapService.consultarLicencias(this.predioEvaluado.GN_CODIGO_LOTE)
    .then((response:any) => {
      this.licencias = response;
      console.log("Lista de licencias", this.licencias);
    })
    .catch((error:any) => {
      console.log('ESTADISTICAS SRV ERROR', error);
    });  
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
