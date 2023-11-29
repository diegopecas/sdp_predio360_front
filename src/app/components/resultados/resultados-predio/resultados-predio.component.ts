import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadModules } from "esri-loader";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-resultados-predio',
  templateUrl: './resultados-predio.component.html',
  styleUrls: ['./resultados-predio.component.css']
})
export class ResultadosPredioComponent implements OnInit, OnChanges {
  
  @Input() predio: any;
  
  public paneles = [] as any;
  public panelEstadisticas = false;
  public predioEvaluado: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // // console.log(environment.panelesResultados)
    this.paneles = environment.panelesResultados.map(pr => {
      return {
          id: pr.id,
          nombre: pr.nombre,
          activo: false,
          atributos: []
      }
    });
    this.configurarAtributos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.predioEvaluado = changes["predio"]["currentValue"];
    if(this.predioEvaluado) {
      // // console.log('cambio de predio',this.predioEvaluado);
      // this.configurarAtributos();
      this.cargarInformacion();
    }
  }
  
  configurarAtributos() {
    this.paneles.forEach((panel:any) => {
      environment.serviciosResultados.forEach((sr:any) => {
        sr.atributos.forEach((sra:any) => {
          if(panel.id == sra.panel) {
            panel.atributos.push({clave: sra.alias, valor: 0, name: sra.name, formato: sra.formato, orden: sra.orden });
          }
        })
      })
    });
  }

  togglePanel(panel:any) {
    panel.activo = !panel.activo;
  }
  
  togglePanelEstadisticas() {
    this.panelEstadisticas = !this.panelEstadisticas;
  }

  cargarInformacion() {
    environment.serviciosResultados.forEach(sr => {

        loadModules([
          "esri/config",
          "esri/layers/FeatureLayer",
          "esri/geometry/Point",
        ]).then(([esriConfig, FeatureLayer, Point]) => {
          esriConfig.apiKey = environment.esriConfigApiKey;
    
          const featureLayer = new FeatureLayer({
            url: sr.url,
          });
    
          const query = featureLayer.createQuery();
          query.where =
            sr.filter[0]+" like '"+this.predioEvaluado[sr.filter[1]]+"'";
          query.outFields = "*";
          query.returnGeometry = false;
    
          featureLayer
            .queryFeatures(query)
            .then((result: any) => {
              const features = result.features;
              if (features.length > 0) {
                const attr = features[0].attributes;
                this.paneles.forEach((p:any) => {
                  p.atributos.forEach((a:any) => {
                    const valor = attr[a.name];
                    if(valor){
                      a.valor = valor;
                    }
                  })
                })
              }
              
            })
            .catch((error: any) => {
              console.error("Error al consultar el servicio:", error);
            });
        });
      

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
