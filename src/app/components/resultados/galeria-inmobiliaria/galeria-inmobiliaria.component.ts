import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { loadModules } from "esri-loader";

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

  ngOnChanges(changes: SimpleChanges): void {
    this.identificacionPredio = changes["valores"]["currentValue"].resultados;
    this.puntoClick = changes["valorPuntoClick"]["currentValue"];
    
    this.consultarProyectosCercanos(this.puntoClick);
  }

  consultarProyectosCercanos(punto: any) {
    loadModules(["esri/config", "esri/layers/FeatureLayer", 'esri/geometry/Point']).then(
      ([esriConfig, FeatureLayer, Point]) => {
        esriConfig.apiKey =
          "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj";

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
        });

        console.log('CAPA', punto, featureLayer);
        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        query.where = "1=1";
        query.distance = 500;
        query.units = "meters";

        // Coordenadas del punto de referencia
        const x = punto.mapPoint.longitude; // Longitud
        const y = punto.mapPoint.latitude; // Latitud

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
