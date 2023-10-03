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

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.css"],
})
export class ResultadosComponent implements OnChanges {
  @Output() accion = new EventEmitter();
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
  public currentIndex = 0;
  public predioSeleccionado = {} as any;

  ngOnChanges(changes: SimpleChanges): void {
    /*this.identificacionPredio = changes["valores"]["currentValue"];
    this.puntoClick = changes["valorPuntoClick"]["currentValue"];
    console.log("ngOnChanges ResultadosComponent", this.identificacionPredio.resultados);*/
    this.params = changes["parametros"]["currentValue"];
    if (this.params) {
      console.log("PARAMS", this.params);
      switch(this.params.opcion) {
        case "consulta-seleccion":
          this.id = this.params.resultados.CODIGO_LOTE;
          this.consultarPrediosByLote(this.params);
        break;
        case "consulta-direccion":
          this.direccion = this.params.direccion;
          this.consultarPrediosByDireccion();
          break;
      }
        /*if(this.params.chip) {
          this.chip = this.params.chip;
          this.consultarPrediosByChip();
        }
        if(this.params.cedula) {
          this.cedula = this.params.cedula;
          this.consultarPrediosByCedula();
        }
        if(this.params.matricula) {
          this.matricula = this.params.matricula;
          this.consultarPrediosByMatricula();
        }
      }*/
    }
  }

  regresar() {
    console.log("Regresar de resultados");
    this.accion.emit(true);
  }

  consultarPrediosByLote(params: any) {
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

      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByDireccion() {
    loadModules([
      "esri/config",
      "esri/layers/FeatureLayer",
    ]).then(([esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;

      const featureLayer = new FeatureLayer({
        url: environment.capaConsultaPredio.porDireccion.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        environment.capaConsultaPredio.porDireccion.atributo+" like '"+this.direccion.replaceAll(' ','%')+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;
      console.log('consulta por dirección', query)
      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
          }
          this.currentIndex = 0;
        })
        .catch((error: any) => {
          console.error("Error al consultar la tabla:", error);
        });
    });
  }

  consultarPrediosByChip() {
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
        environment.capaConsultaPredio.porChip.atributo+" like '"+this.direccion+"'";
      query.outFields = "OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION";
      query.returnGeometry = false;

      featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          
          if (features.length > 0) {
            this.datos = features.map((m: any) => m.attributes);
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
  isGIPanelExpanded: boolean = false;
  /* panelIPHeight: number = 0;
  panelIFLHeight: number = 0;
  panelLOCHeight: number = 0;
  panelNORHeight: number = 0;
  panelIEHeight: number = 0;
  panelURBHeight: number = 0;*/
  panelGIHeight: number = 0;

  togglePanel(opcion: any) {
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
        this.panelGIHeight = this.isGIPanelExpanded ? 500 : 0;
        break;
    }
  }

  seleccionarPredio() {
    this.predioSeleccionado = this.datos[this.currentIndex];
    console.log(this.predioSeleccionado);
  }

}
