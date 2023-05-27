import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { loadModules } from "esri-loader";

@Component({
  selector: "app-resultados-identificacion-predio",
  templateUrl: "./resultados-identificacion-predio.component.html",
  styleUrls: ["./resultados-identificacion-predio.component.css"],
})
export class ResultadosIdentificacionPredioComponent implements OnChanges {
  @Input() valores: any;

  private identificacionPredio: any;
  public datos = [] as any[];
  public direccion:any;
  public currentIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambioooooo", changes["valores"]["currentValue"]);
    this.identificacionPredio = changes["valores"]["currentValue"].resultados;
    if(!this.identificacionPredio.DIRECCION) {
      this.consultarDatosPredio(this.identificacionPredio.CODIGO_LOTE);
    } else {
      if(this.identificacionPredio) {
        this.datos.push(this.identificacionPredio);
      }
    }
  }

  consultarDatosPredio(codigo: any) {
    loadModules(["esri/config", "esri/layers/FeatureLayer"]).then(
      ([esriConfig, FeatureLayer]) => {
        esriConfig.apiKey =
          "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj";

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/Mapa_demo_Predio_360_WFL1/FeatureServer/1",
        });

        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        query.where = "PREDIO="+codigo; // Establecer una condición opcional para filtrar los resultados
        query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

        featureLayer
          .queryFeatures(query)
          .then((result: any) => {
            // Manipular los resultados obtenidos
            const features = result.features;
            // Realizar acciones con los datos devueltos
            
            if(features.length>0) {
              this.datos = features.map((m:any)=>m.attributes);
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
