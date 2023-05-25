import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
/*import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';*/
import { loadModules } from "esri-loader";

@Component({
  selector: "app-map3d",
  templateUrl: "./map3d.component.html",
  styleUrls: ["./map3d.component.css"],
})
export class Map3dComponent implements AfterViewInit {
  public opcion: string = "menu";
  public resultados: boolean = false;

  private capa2d: any;
  private capa3d: any;
  private capaGaleria:any;
  private simbolo3d: any;
  private simbolo3dOver: any;
  private view: any;
  private map: any;
  private vista2d3d = "3D";
  public valoresResultados: any;
  public valorPuntoClick:any;

  @ViewChild("mapViewNode", { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    loadModules([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/SceneLayer",
      "esri/layers/FeatureLayer",
      "esri/layers/GraphicsLayer",
      "esri/symbols/ExtrudeSymbol3DLayer",
      'esri/symbols/IconSymbol3DLayer',
      'esri/symbols/PointSymbol3D'
    ]).then(
      ([
        esriConfig,
        Map,
        SceneView,
        SceneLayer,
        FeatureLayer,
        GraphicsLayer,
        ExtrudeSymbol3DLayer,
        IconSymbol3DLayer,
        PointSymbol3D
      ]) => {
        esriConfig.apiKey =
          "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj";

        const urlServicio =
          "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/Mapa_demo_Predio_360_WFL1/FeatureServer/0";
        //  "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/catastro/construccion/MapServer/0";
        // const urlServicio = "https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0";

        this.capa2d = new FeatureLayer({
          id: "capa-construccion-2d",
          url: urlServicio,
          outFields: ["*"],
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "fill",
                  material: { color: [255, 237, 204] },
                  outline: { color: [133, 108, 62, 0.5] },
                },
              ],
            },
          },
          visible: false,
        });

        

        this.simbolo3d = {
          type: "polygon-3d", // autocasts as new PolygonSymbol3D()
          symbolLayers: [
            {
              type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
              material: {
                color: [229, 209, 169, 1],
              },
              edges: {
                type: "solid",
                color: [50, 50, 50, 0.8],
                size: 1,
              },
              size: (geometry: any, graphic: any) => {
                const height = 0; // graphic.attributes["NUMERO_PISO"] * 2; // Multiplicar por 2 para dar la altura en metros
                return height;
              },
              // Establecer la base de la extrusión en el suelo
              anchor: "relative-to-ground",
            },
          ],
        };

        this.simbolo3dOver = {
          type: "polygon-3d", // autocasts as new PolygonSymbol3D()
          symbolLayers: [
            {
              type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
              material: {
                color: [3, 255, 255, 1],
              },
              edges: {
                type: "solid",
                color: [50, 50, 50, 0.8],
                size: 1,
              },
              size: (geometry: any, graphic: any) => {
                const height = 0; // graphic.attributes["NUMERO_PISO"] * 2; // Multiplicar por 2 para dar la altura en metros
                return height;
              },
              // Establecer la base de la extrusión en el suelo
              anchor: "relative-to-ground",
            },
          ],
        };

        const symbolLayerBandera = new IconSymbol3DLayer({
          resource: {
            href: "/assets/images/flag.png"
          },
          size: 50
        });
        
        const symbolBandera = new PointSymbol3D({
          symbolLayers: [symbolLayerBandera]
        });

        this.capaGaleria = new FeatureLayer({
          url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
          renderer: {
            type: "simple",
            symbol: symbolBandera,
          }
        });

        this.capa3d = new FeatureLayer({
          id: "capa-construccion-3d",
          url: urlServicio, // "https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson",
          outFields: ["*"],
          renderer: {
            type: "simple",
            symbol: this.simbolo3d,
            visualVariables: [
              {
                type: "size",
                valueUnit: "meters",
                valueExpression: "return Abs($feature.NUMERO_PISOS) * 2.4;",
              },
            ],
          },
          visible: true,
        });

        // Create Map
        this.map = new Map({
          // basemap: "arcgis-light-gray",
          basemap: "streets-vector",
          ground: "world-elevation",
          layers: [this.capa2d, this.capa3d, this.capaGaleria],
        });

        // Create the SceneView
        this.view = new SceneView({
          container: "mapView",
          map: this.map,
          camera: {
            position: {
              latitude: 4.6,
              longitude: -74.11,
              z: 2800, // Altura en metros
            },
            heading: 0, // grados de rotación respecto del norte
            tilt: 70, // grados de rotación respecto de la superficie
          },
          qualityProfile: "high",
        });

        this.capa3d.visible = true;
        this.capa2d.visible = false;
        this.capaGaleria.visible = true;

        this.view.on("click", (event: any) => {
          this.valorPuntoClick = event;
          var screenPoint = {
            x: event.x,
            y: event.y,
          };
          const clickedPoint = this.view.toMap(event);
          
          // Centrar el mapa en el punto clicado
          this.view.center = clickedPoint;

          // Acercar 3 niveles de zoom
          this.view.goTo({
            target: clickedPoint,
            zoom: 21,
          });

          if (this.opcion === "consulta-seleccion") {
            this.view.hitTest(screenPoint).then((response: any) => {
              if (response.results.length) {



                let graphic = response.results.filter((result: any) => {
                  if (this.vista2d3d === "3D") {
                    return result.graphic.layer === this.capa3d; // 'capa-construccion-3d';
                  } else {
                    return result.graphic.layer === this.capa2d; // 'capa-construccion-3d';
                  }
                })[0].graphic;

                this.resultados = true;

                this.valoresResultados = {
                  opcion: this.opcion,
                  resultados: graphic.attributes,
                };
                
                // do something with the result graphic
                console.log("capa-construccion", graphic.attributes);
              }
            });
          }
        });

      }
    );
  }

  accionMenu(valor: any) {
    console.log(valor);
    this.opcion = valor;
  }

  accion2d3d(valor: any) {
    console.log(valor);
    this.vista2d3d = valor;
    console.log("CAMBIO", this.vista2d3d);
    if (this.vista2d3d === "3D") {
      this.capa3d.visible = true;
      this.capa2d.visible = false;
    } else {
      this.capa3d.visible = false;
      this.capa2d.visible = true;
    }
  }

  regresarResultados(valor: any) {
    if (valor) {
      this.resultados = false;
    }
  }
}
