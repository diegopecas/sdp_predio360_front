import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { loadModules } from "esri-loader";
import { environment } from "src/environments/environment";
import swal from 'sweetalert2';

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.css"],
})
export class ResultadosComponent implements OnChanges {
  @Output() accion = new EventEmitter();
  @Output() loteSeleccionado = new EventEmitter();
  // @Input() valores: any;
  // @Input() valorPuntoClick: any;
  @Input() parametros: any;

  // public identificacionPredio: any;
  // public puntoClick: any;
  public datos = [] as any[];
  private params = {} as any;
  public id: any;
  public direccion: any;
  public chip: any;
  public cedula: any;
  public matricula: any;
  public currentIndex = -1;
  public predioSeleccionado = {} as any;
  public puntoGaleria = {} as any;

  ngOnChanges(changes: SimpleChanges): void {
    this.params = changes["parametros"]["currentValue"];
    if (this.params) {
      console.log("PARAMS", this.params);
      switch(this.params.opcion) {
        case "consulta-seleccion":
          this.id = this.params.resultados.CODIGO_LOTE;
          this.consultarPrediosByLote();
          this.obtenerUbicacionLote(this.params.resultados.CODIGO_LOTE);
        break;
        case "consulta-direccion":
          this.direccion = this.params.direccion;
          this.consultarPrediosByDireccion(this.direccion[0]);
          break;
        case "consulta-chip":
          this.chip = this.params.chip;
          this.consultarPrediosByChip();
          break;
        case "consulta-matricula":
          this.matricula = this.params.matricula;
          this.consultarPrediosByMatricula();
          break;
        case "consulta-cedula":
          this.cedula = this.params.cedula;
          this.consultarPrediosByCedula();
          break;
      }
    }
  }

  regresar() {
    // console.log("Regresar de resultados");
    this.accion.emit(true);
  }

  consultarPrediosByLote() {
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
      "esri/geometry/Point",
    ]).then(([esriConfig, FeatureLayer, Point]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porLote.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        environment.capaConsultaPredio.porLote.atributo+" like '"+this.id+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;
      console.log("consultar predio por lote query", query);
      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
            console.log("datos", this.datos);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByDireccion(direccionConsulta:any) {
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
    ]).then(([esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porDireccion.url,
      });

      const query = featureLayer.createQuery();
      // query.where =
      //  environment.capaConsultaPredio.porDireccion.atributo+" like '"+this.direccion.replaceAll(' ','%')+"'";
      query.where =
        environment.capaConsultaPredio.porDireccion.atributo+" like '"+direccionConsulta+"%'"; //this.direccion[0]
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;
      // console.log('consulta por dirección', query)
      featureLayer
        .queryFeatures(query)
        .then(async (result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
            this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
            this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
            this.currentIndex = -1;
          } else if(direccionConsulta !== this.direccion[1]) {


            /* inputOptions can be an object or Promise */
            /*const inputOptions = new Promise((resolve) => {
              setTimeout(() => {
                resolve({
                  'Esquina': this.direccion[1],
                  'Aproximada': this.direccion[1].replace('KR','AK').replace('CL','AC'),
                  'Comomdin': 'Comodín'
                })
              }, 1000)
            });*/

            swal.fire({
              title: 'No se encontraron resultados, desea hacer una búsqueda aproximada?',
              input: 'radio',
              inputOptions: {
                'Esquina': this.direccion[1].replaceAll('%',' '),
                'Aproximada': this.direccion[0].replaceAll('%',' ').replace('KR','AK').replace('CL','AC'),
                'Comomdin': 'Comodín: '+this.direccion[0].replaceAll(' ','%')
              },
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: 'Buscar',
              denyButtonText: 'No',
            }).then((result:any) => {
              console.log(result);
              if (result.isConfirmed) {
                switch(result.value) {
                  case 'Esquina': 
                    this.consultarPrediosByDireccion(this.direccion[1]);
                    break;
                  case 'Aproximada': 
                    this.consultarPrediosByDireccion(this.direccion[0].replace('KR','AK').replace('CL','AC'));
                    break;
                  case 'Comodin': 
                    this.consultarPrediosByDireccion(this.direccion[0].replaceAll(' ','%'));
                    break;
                }
                this.currentIndex = -1;
              }
            })

            /*if (color) {
              Swal.fire({ html: `You selected: ${color}` })
            }*/

            /*swal.fire({
              title: 'No se encontraron resultados, desea hacer una búsqueda aproximada?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Sí',
              denyButtonText: 'No',
            }).then((result:any) => {
              if (result.isConfirmed) {
                this.consultarPrediosByDireccion(this.direccion[1]);
                this.currentIndex = -1;
              }
            })*/
            
          }
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByChip() {
    // console.log('consultarPrediosByChip()')
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
    ]).then(([esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porChip.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        environment.capaConsultaPredio.porChip.atributo+" like '"+this.chip+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;
      // console.log('QUERY', query);
      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
            this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
            this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByCedula() {
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
    ]).then(([esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porCedula.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        environment.capaConsultaPredio.porCedula.atributo+" like '"+this.cedula+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;

      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
            this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
            this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByMatricula() {
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
    ]).then(([esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porMatricula.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        environment.capaConsultaPredio.porMatricula.atributo+" like '"+this.matricula+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;

      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
            this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
            this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }



  /*
  isIPPanelExpanded: boolean = false;
  isIFLPanelExpanded: boolean = false;
  isLOCPanelExpanded: boolean = false;
  isNORPanelExpanded: boolean = false;
  isIEPanelExpanded: boolean = false;
  isURBPanelExpanded: boolean = false;*/
  public isGIPanelExpanded: boolean = false;
  public isESPanelExpanded: boolean = false;
  /* panelIPHeight: number = 0;
  panelIFLHeight: number = 0;
  panelLOCHeight: number = 0;
  panelNORHeight: number = 0;
  panelIEHeight: number = 0;
  panelURBHeight: number = 0;*/
  public panelGIHeight: number = 0;

  togglePanel(opcion: any) {
    console.log('CAMBIO PANEL', opcion);
    switch (opcion) {
      /*case 'IP':
        this.isIPPanelExpanded = !this.isIPPanelExpanded;
        this.panelIPHeight = this.isIPPanelExpanded ? 500 : 0;
        break;
      case 'IFL':
        this.isIFLPanelExpanded = !this.isIFLPanelExpanded;
        this.panelIFLHeight = this.isIFLPanelExpanded ? 500 : 0;
        break;
      case 'LOC':
        this.isLOCPanelExpanded = !this.isLOCPanelExpanded;
        this.panelLOCHeight = this.isLOCPanelExpanded ? 500 : 0;
        break;
      case 'NOR':
        this.isNORPanelExpanded = !this.isNORPanelExpanded;
        this.panelNORHeight = this.isNORPanelExpanded ? 500 : 0;
        break;
      case 'IE':
        this.isIEPanelExpanded = !this.isIEPanelExpanded;
        this.panelIEHeight = this.isIEPanelExpanded ? 500 : 0;
        break;
      case 'URB':
        this.isURBPanelExpanded = !this.isURBPanelExpanded;
        this.panelURBHeight = this.isURBPanelExpanded ? 500 : 0;
        break;*/
      case "GI":
        this.isGIPanelExpanded = !this.isGIPanelExpanded;
        console.log('CAMBIO PANEL VALOR', this.isGIPanelExpanded);
        // this.panelGIHeight = this.isGIPanelExpanded ? 500 : 0;
        break;
      case "ES":
        this.isESPanelExpanded = !this.isESPanelExpanded;
        console.log('CAMBIO PANEL VALOR', this.isESPanelExpanded);
        // this.panelGIHeight = this.isGIPanelExpanded ? 500 : 0;
        break;
    }
  }

  seleccionarPredio() {
    this.predioSeleccionado = this.datos[this.currentIndex];
    console.log("predioSeleccionado",this.predioSeleccionado);
    this.loteSeleccionado.emit(this.predioSeleccionado.GN_CODIGO_LOTE);
  }

  obtenerUbicacionLote(lote:any) {
    console.log("obtenerUbicacionLote", lote);
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
      "esri/geometry/Point",
    ]).then(([esriConfig, FeatureLayer, Point]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const capa = new FeatureLayer({
        url: environment.urlServicioPredios,
      });
    
    const query = capa.createQuery();
      query.where = "CODIGO_LOTE like '"+lote+"'";
      query.outFields = "CODIGO_LOTE";
      query.returnGeometry = true;
      query.returnCentroid = true;
      
      capa
        .queryFeatures(query)
        .then((result: any) => {
          if(result.features.length > 0) {
            this.puntoGaleria = result.features[0].geometry.centroid;            
            console.log("puntoGaleria", this.puntoGaleria);
          }
        })
        .catch((error: any) => {
          console.error("Error al consultar el servicio:", error);
        });
      });
    
  }

}
