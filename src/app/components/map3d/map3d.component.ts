import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
/*import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';*/
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map3d',
  templateUrl: './map3d.component.html',
  styleUrls: ['./map3d.component.css'],
})
export class Map3dComponent implements AfterViewInit {
  public opcion: string = 'menu';

  private capa2d: any;
  private capa3d: any;
  private simbolo3d:any;
  private view:any;
  private map:any;

  @ViewChild('mapViewNode', { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  /*initMap(): void {
    loadModules([
      'esri/config',
      'esri/Map',
      'esri/views/SceneView',
      'esri/layers/SceneLayer',
      'esri/layers/FeatureLayer',
      'esri/renderers/SimpleRenderer',
      'esri/symbols/PolygonSymbol3D',
      'esri/symbols/ExtrudeSymbol3DLayer',
      "esri/layers/MapImageLayer"
    ]).then(
      ([
        esriConfig,
        Map,
        SceneView,
        SceneLayer,
        FeatureLayer,
        SimpleRenderer,
        PolygonSymbol3D,
        ExtrudeSymbol3DLayer,
        MapImageLayer
      ]) => {
        esriConfig.apiKey =
          'AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj';

        const footprintBuildings = new FeatureLayer({
          url: 'https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'polygon-3d',
              symbolLayers: [
                {
                  type: 'fill',
                  material: { color: [255, 237, 204] },
                  outline: { color: [133, 108, 62, 0.5] },
                },
              ],
            },
          },
          visible: false,
        });

        const extrudedBuildings = new FeatureLayer({
          url: 'https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0',
          spatialReference: { wkid: 4686 },
          elevationInfo: {
            mode: 'relative-to-ground',
            featureExpressionInfo: {
              expression: '$feature.NUMERO_PISO*2',
            },
            unit: 'meters',
          },
          renderer: {
            type: 'simple',
            symbol: {
              type: 'polygon-3d',
              symbolLayers: [
                {
                  type: 'extrude',
                  material: { color: [255, 237, 204] },
                  edges: {
                    type: 'solid',
                    color: [133, 108, 62, 0.5],
                    size: 1,
                  },
                },
              ],
            },
            visualVariables: [
              {
                type: 'size',
                field: 'NUMERO_PISO',
                valueUnit: 'meters',
              },
            ],
          },
          visible: true,
        });

        var renderer = new SimpleRenderer({
          symbol: new PolygonSymbol3D({
            symbolLayers: [
              new ExtrudeSymbol3DLayer({
                material: {
                  color: '#ffffff',
                },
                size: {
                  type: 'expression',
                  expression: '($feature.NUMERO_PISO * 2.4)', // expresión para calcular la altura
                },
              }),
            ],
          }),
        });

        var mapImageLayer = new MapImageLayer({
          url: "https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer",
          sublayers: [
            {
              id: 0,
              renderer: renderer
            }
          ]
        });

        // Create Map
        const map = new Map({
          basemap: 'arcgis-light-gray',
          ground: 'world-elevation',
          layers: [],
        });

        map.add(mapImageLayer);

        // Create the SceneView
        var view = new SceneView({
          container: 'mapView',
          map: map,
          camera: {
            position: [-74.11, 4.55, 15000],
            tilt: 78.61,
          },
          qualityProfile: 'high',
        });
      }
    );
  }*/

  initMap(): void {
    loadModules([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/SceneLayer",
      "esri/layers/FeatureLayer",
      "esri/symbols/ExtrudeSymbol3DLayer",
    ]).then(
      ([esriConfig,
        Map,
        SceneView,
        SceneLayer,
        FeatureLayer,
        ExtrudeSymbol3DLayer]) => {
          esriConfig.apiKey =
            "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj";
    
            const urlServicio = "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/catastro/construccion/MapServer/0";
            // const urlServicio = "https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0";
    
          this.capa2d = new FeatureLayer({
            url: urlServicio,
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
    
          // Crear un símbolo para la extrusión de los polígonos
          /*const extrusionSymbol = new ExtrudeSymbol3DLayer({
            material: {
              color: [255, 0, 0, 0.7],
            },
            size: (geometry:any, graphic:any) => {
              const height = 5; //graphic.attributes["NUMERO_PISO"] * 2; // Multiplicar por 2 para dar la altura en metros
              return height;
            },
            // Establecer la base de la extrusión en el suelo
            anchor: "relative-to-ground",
          });*/
    
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
                  size: 1
                },
                size: (geometry:any, graphic:any) => {
                  const height = 0; // graphic.attributes["NUMERO_PISO"] * 2; // Multiplicar por 2 para dar la altura en metros
                  return height;
                },
                // Establecer la base de la extrusión en el suelo
                anchor: "relative-to-ground",
              },
            ],
          };
    
          this.capa3d = new FeatureLayer({
            url: urlServicio,// "https://sinupot.sdp.gov.co/serverp/rest/services/CATASTRAL/Division_Fisica/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson",
            renderer: {
              type: "simple",
              symbol: this.simbolo3d,
              visualVariables: [
                {
                  type: "size",
                  // field: "CONNPISOS", // "NUMERO_PISO",
                  valueUnit: "meters",
                  valueExpression: "return Abs($feature.CONNPISOS) * 2.4;"
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
            layers: [this.capa2d, this.capa3d]
          });
    
          // Create the SceneView
          this.view = new SceneView({
            container: 'mapView',
            map: this.map,
            camera: {
              position: [-74.08643, 4.6543, 314.88439],
              // heading: 356.82,
              heading: 15000,
              tilt: 80
            },
            qualityProfile: "high",
          });
          // let type = "cartographic";
          
          this.capa3d.visible = true;
          this.capa2d.visible = true;
          
        }

    )
  }

  accionMenu(valor: any) {
    console.log(valor);
    this.opcion = valor;
  }
}
