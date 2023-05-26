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
import { environment } from "src/environments/environment";

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
  private capaGaleria: any;
  private capaPuntosSeleccionados: any;
  private simbolo3d: any;
  private simbolo3dOver: any;
  private view: any;
  private map: any;
  private vista2d3d = "3D";
  public valoresResultados: any;
  public valorPuntoClick: any;

  @ViewChild("mapViewNode", { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    loadModules([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/FeatureLayer",
      "esri/layers/GraphicsLayer",
      "esri/symbols/IconSymbol3DLayer",
      "esri/symbols/PointSymbol3D",
      "esri/Graphic",
      "esri/geometry/Point",
      "esri/symbols/SimpleMarkerSymbol",
    ]).then(([esriConfig, Map, SceneView, FeatureLayer, GraphicsLayer, IconSymbol3DLayer, PointSymbol3D, Graphic, Point, SimpleMarkerSymbol]) => {
      esriConfig.apiKey = environment.esriConfigApiKey;
      this.capa2d = this.crearCapa2d(FeatureLayer);
      this.capa3d = this.crearCapa3d(FeatureLayer);
      this.capaPuntosSeleccionados = new GraphicsLayer();
      this.capaGaleria = this.crearCapaGaleria(IconSymbol3DLayer,PointSymbol3D,FeatureLayer);
      this.map = this.crearMapa(Map);
      this.view = this.crearVista(SceneView);
      this.view.on("click", (event: any) => {
        this.valorPuntoClick = event;
        this.agregarPuntoSeleccionado(event,1000, Graphic, Point, SimpleMarkerSymbol);
        this.clickEnVista(event, Graphic);
      });
      
      this.capa3d.visible = true;
      this.capa2d.visible = false;
      this.capaGaleria.visible = true;
      this.capaPuntosSeleccionados.visible = true;
    });
  }

  _initMap(): void {
    loadModules([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/SceneLayer",
      "esri/layers/FeatureLayer",
      "esri/layers/GraphicsLayer",
      "esri/symbols/ExtrudeSymbol3DLayer",
      "esri/symbols/IconSymbol3DLayer",
      "esri/symbols/PointSymbol3D",
      "esri/geometry/Point",
      "esri/Graphic",
      "esri/symbols/SimpleMarkerSymbol",
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
        PointSymbol3D,
        Point,
        Graphic,
        SimpleMarkerSymbol,
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
            href: "/assets/images/flag.png",
          },
          size: 50,
        });

        const symbolBandera = new PointSymbol3D({
          symbolLayers: [symbolLayerBandera],
        });

        this.capaGaleria = new FeatureLayer({
          url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
          renderer: {
            type: "simple",
            symbol: symbolBandera,
          },
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

        this.capaPuntosSeleccionados = new GraphicsLayer({
          renderer: {
            type: "simple",
            symbol: symbolBandera,
          },
        });

        // Create Map
        this.map = new Map({
          // basemap: "arcgis-light-gray",
          basemap: "streets-vector",
          ground: "world-elevation",
          layers: [
            this.capa2d,
            this.capa3d,
            this.capaGaleria,
            this.capaPuntosSeleccionados,
          ],
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
        this.capaPuntosSeleccionados.visible = true;

        this.view.on("click", (event: any) => {
          this.valorPuntoClick = event;
          var screenPoint = {
            x: event.x,
            y: event.y,
          };

          /********** */
          
          /*
          var point = new Point({
            longitude: event.mapPoint.longitude,
            latitude: event.mapPoint.latitude
          });

          var markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40], // color en RGB
            size: 12,
            outline: {
              color: [255, 255, 255], // color del borde en RGB
              width: 1
            }
          });

          const graphicPoint = new Graphic({
            geometry: point,
            symbol: markerSymbol
          });

          this.capaPuntosSeleccionados.removeAll();
          this.capaPuntosSeleccionados.add(graphicPoint); // Agrega el gráfico a la capa de gráficos
          */
          /********** */

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

  crearCapa2d(FeatureLayer: any) {
    return new FeatureLayer({
      id: "capa-construccion-2d",
      url: environment.urlServicioPredios,
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
  }

  crearCapa3d(FeatureLayer: any) {
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

    const featureLayer = new FeatureLayer({
      id: "capa-construccion-3d",
      url: environment.urlServicioPredios,
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

    return featureLayer;
  }

  agregarPuntoSeleccionado(event:any,z:any,Graphic:any, Point:any, SimpleMarkerSymbol:any){
    console.log('agregarPuntoSeleccionado', event);
    this.capaPuntosSeleccionados.removeAll();
    const x = event.mapPoint.longitude;
    const y = event.mapPoint.latitude;

    const point = new Point({
      longitude: x,
      latitude: y,
      z: z
    });

    /*const markerSymbol = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 2
      }
    });*/

    const markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 40],
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2
      }
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    
    // this.capaPuntosSeleccionados.add(pointGraphic);
    this.view.graphics.add(pointGraphic);
/*
    const polyline = {
      type: "polyline", // autocasts as new Polyline()
      paths: [
        [x, y, 0],
        [x, y, z]
      ]
    };

    const lineSymbol = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      color: [226, 119, 40],
      width: 4
    };

    const polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: lineSymbol
    });

    this.capaPuntosSeleccionados.add(polylineGraphic);*/
  }

  crearCapaGaleria(IconSymbol3DLayer:any, PointSymbol3D:any, FeatureLayer:any){
    const symbolLayerBandera = new IconSymbol3DLayer({
      resource: {
        href: "/assets/images/flag.png",
      },
      size: 50,
    });

    const symbolBandera = new PointSymbol3D({
      symbolLayers: [symbolLayerBandera],
    });

    return new FeatureLayer({
      url: environment.urlServicioGaleria,
      renderer: {
        type: "simple",
        symbol: symbolBandera,
      },
    });
  }

  crearMapa(Map: any) {
    return new Map({
      // basemap: "arcgis-light-gray",
      basemap: "streets-vector",
      ground: "world-elevation",
      layers: [
        this.capa2d,
        this.capa3d,
        this.capaGaleria,
        this.capaPuntosSeleccionados
      ],
    });
  }

  crearVista(SceneView: any) {
    return new SceneView({
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
  }

  clickEnVista(event: any, Graphic:any) {
    this.valorPuntoClick = event;
    // Centrar el mapa en el punto seleccionado y hacer zoom
    const clickedPoint = this.view.toMap(event);
    this.view.center = clickedPoint;

    this.view.goTo({
      target: clickedPoint,
      zoom: 21,
    });

    if (this.opcion === "consulta-seleccion") {
      this.seleccionarPredio({
        x: event.x,
        y: event.y
      });
    }
  }

  seleccionarPredio(screenPoint:any) {
    this.view.hitTest(screenPoint).then((response: any) => {
      if (response.results.length) {
        let graphic = response.results.filter((result: any) => {
          if (this.vista2d3d === "3D") {
            return result.graphic.layer === this.capa3d;
          } else {
            return result.graphic.layer === this.capa2d;
          }
        })[0].graphic;

        this.resultados = true;

        this.valoresResultados = {
          opcion: this.opcion,
          resultados: graphic.attributes,
        };
      }
    });
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
