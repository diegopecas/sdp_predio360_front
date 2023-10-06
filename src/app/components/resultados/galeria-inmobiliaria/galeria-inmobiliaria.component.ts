import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { loadModules } from "esri-loader";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-galeria-inmobiliaria",
  templateUrl: "./galeria-inmobiliaria.component.html",
  styleUrls: ["./galeria-inmobiliaria.component.css"],
})
export class GaleriaInmobiliariaComponent implements OnChanges {
  @Input() valores: any;
  @Input() valorPuntoClick: any;

  public identificacionPredio: any;
  public puntoClick: any;

  public datos: any;
  public currentIndex = 0;

  public verMasGaleria = false;

  ver(){
    this.verMasGaleria = !this.verMasGaleria;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes["valores"] && !(changes["valores"]["previousValue"] === changes["valores"]["currentValue"])) {
      console.log('Se ha producido un cambio en "Valores"');
      this.identificacionPredio = changes["valores"]["currentValue"].resultados;
    }

    if (changes["valorPuntoClick"] && !(changes["valorPuntoClick"]["previousValue"] === changes["valorPuntoClick"]["currentValue"])) {
      console.log('Se ha producido un cambio en "valorPuntoClick"');
      this.puntoClick = changes["valorPuntoClick"]["currentValue"];
      this.consultarProyectosCercanos(this.puntoClick);
    }
  }

  consultarProyectosCercanos(punto: any) {
    if(punto.latitude) {
      loadModules(["esri/config", "esri/layers/FeatureLayer", 'esri/geometry/Point']).then(
        ([esriConfig, FeatureLayer, Point]) => {
          esriConfig.apiKey = environment.esriConfigApiKey;
  
          // Crear un FeatureLayer con la URL del servicio de tabla
          const featureLayer = new FeatureLayer({
            // url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
            url: environment.urlServicioGaleria
          });
  
          console.log('CAPA', punto, featureLayer);
          // Consultar la tabla y obtener los resultados
          const query = featureLayer.createQuery();
          query.where = "1=1";
          query.distance = 500;
          query.units = "meters";
  
          // Coordenadas del punto de referencia
          const x = punto.mapPoint ? punto.mapPoint.longitude : punto.longitude; // Longitud
          const y = punto.mapPoint ? punto.mapPoint.latitude : punto.latitude; // Latitud
  
          // Crear la geometría de punto de referencia
          const referenceGeometry = new Point({
            x: x,
            y: y,
            //spatialReference: view.spatialReference // Referencia espacial de la vista del mapa
          });
  
          query.geometry = referenceGeometry;
  
          console.log("QUERY", query);
          featureLayer
            .queryFeatures(query)
            .then((result: any) => {
              // Manipular los resultados obtenidos
              console.log("RESULTADOS QUERY", result);
              const features = result.features;
              // Realizar acciones con los datos devueltos
  
              if (features.length > 0) {
                this.datos = features.map((m: any) => m.attributes);
              }
            })
            .catch((error: any) => {
              // Manejar cualquier error ocurrido durante la consulta
              console.error("Error al consultar la tabla:", error);
            });
        }
      );
    }
  }
}
