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
import swal from "sweetalert2";

@Component({
  selector: "app-map3d",
  templateUrl: "./map3d.component.html",
  styleUrls: ["./map3d.component.css"],
})
export class Map3dComponent implements AfterViewInit {
  public opcion: string = "menu";
  public resultados: boolean = false;
  public proyectoSeleccionado = 0;

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
      "esri/geometry/Polyline",
      "esri/symbols/SimpleLineSymbol",
      "esri/Color",
      "esri/symbols/ObjectSymbol3DLayer",
    ]).then(
      ([
        esriConfig,
        Map,
        SceneView,
        FeatureLayer,
        GraphicsLayer,
        IconSymbol3DLayer,
        PointSymbol3D,
        Graphic,
        Point,
        SimpleMarkerSymbol,
        Polyline,
        SimpleLineSymbol,
        Color,
        ObjectSymbol3DLayer,
      ]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;

        this.capa2d = this.crearCapa2d(FeatureLayer);
        this.capa3d = this.crearCapa3d(FeatureLayer);
        this.capaPuntosSeleccionados = new GraphicsLayer();
        this.capaGaleria = this.crearCapaGaleria(
          IconSymbol3DLayer,
          PointSymbol3D,
          FeatureLayer,
          ObjectSymbol3DLayer
        );
        this.map = this.crearMapa(Map);
        this.view = this.crearVista(SceneView);
        this.view.on("click", (event: any) => {
          this.valorPuntoClick = event;
          this.clickEnVista(event, Graphic);
        });

        this.capa3d.visible = true;
        this.capa2d.visible = false;
        this.capaGaleria.visible = true;
        this.capaPuntosSeleccionados.visible = true;
      }
    );
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

  agregarPuntoSeleccionado(x: any, y: any, z: any) {
    loadModules([
      "esri/symbols/PointSymbol3D",
      "esri/Graphic",
      "esri/geometry/Point",
      "esri/symbols/ObjectSymbol3DLayer",
    ]).then(([PointSymbol3D, Graphic, Point, ObjectSymbol3DLayer]) => {
      const objectSymbol = new PointSymbol3D({
        symbolLayers: [
          new ObjectSymbol3DLayer({
            width: 2,
            height: z,
            resource: {
              primitive: "inverted-cone",
            },
            material: {
              color: "#FFD700",
            },
          }),
        ],
      });

      const point = new Point({
        longitude: x,
        latitude: y,
      });

      const graphicPoint = new Graphic({
        geometry: point,
        symbol: objectSymbol,
      });

      this.capaPuntosSeleccionados.removeAll();
      this.capaPuntosSeleccionados.add(graphicPoint);
    });
  }

  crearCapaGaleria(
    IconSymbol3DLayer: any,
    PointSymbol3D: any,
    FeatureLayer: any,
    ObjectSymbol3DLayer: any
  ) {
    const objectSymbol = new PointSymbol3D({
      symbolLayers: [
        new ObjectSymbol3DLayer({
          width: 5,
          height: 40,
          resource: {
            primitive: "cone",
          },
          material: {
            color: "#00FF00",
          },
        }),
      ],
    });

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
      id: "capa-galeria",
      renderer: {
        type: "simple",
        // symbol: symbolBandera,
        symbol: objectSymbol,
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
        this.capaPuntosSeleccionados,
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

  clickEnVista(event: any, Graphic: any) {
    this.valorPuntoClick = event;
    // Centrar el mapa en el punto seleccionado y hacer zoom
    const clickedPoint = this.view.toMap(event);
    this.view.center = clickedPoint;

    this.view.goTo({
      target: clickedPoint,
      zoom: 21,
    });

    switch (this.opcion) {
      case "consulta-seleccion":
        this.seleccionarPredio(
          {
            x: event.x,
            y: event.y,
          },
          event
        );
        break;
      case "consulta-galeria":
        this.seleccionarProyecto(
          {
            x: event.x,
            y: event.y,
          },
          event
        );
        break;
    }
    /*if (this.opcion === "consulta-seleccion") {
      this.seleccionarPredio(
        {
          x: event.x,
          y: event.y,
        },
        event
      );
    }*/
  }

  seleccionarPredio(screenPoint: any, event: any) {
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
        console.log("VALORES RESULTADOS", this.valoresResultados);

        this.agregarPuntoSeleccionado(
          event.mapPoint.longitude,
          event.mapPoint.latitude,
          (this.valoresResultados.resultados.NUMERO_PISOS + 1) * 2.4
        );
      }
    });
  }

  seleccionarProyecto(screenPoint: any, event: any) {
    console.log("seleccionarProyecto");
    this.view.hitTest(screenPoint).then((response: any) => {
      console.log("response", response);
      if (response.results.length) {
        let graphic = response.results.filter((result: any) => {
          console.log("result", result);
          return result.graphic.layer === this.capaGaleria;
        })[0].graphic;

        if (graphic) {
          this.proyectoSeleccionado = graphic.attributes.cod_proyecto;
          console.log(
            "VALORES RESULTADOS PROYECTO",
            graphic,
            this.proyectoSeleccionado
          );
          if (this.proyectoSeleccionado) {
            this.consultarProyectos();
          }
        }
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

  consultarProyectos() {
    loadModules(["esri/config", "esri/layers/FeatureLayer"]).then(
      ([esriConfig, FeatureLayer]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: environment.urlServicioGaleria,
        });

        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        query.where = "cod_proyecto=" + this.proyectoSeleccionado; // Establecer una condición opcional para filtrar los resultados
        query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

        featureLayer
          .queryFeatures(query)
          .then((result: any) => {
            // Manipular los resultados obtenidos
            const features = result.features;
            // Realizar acciones con los datos devueltos
            console.log("PROOO", features);
            if (features.length > 0) {
              // const datos = features.map((m:any)=>m.attributes);
              const datos = features[0].attributes;

              swal.fire({
                html: `
                <p>Código de proyecto: ${datos.cod_proyecto}</p>
                <p>Código lote: ${datos.cod_lote}</p>
                <p><strong>Proyecto: ${datos.proyecto}</strong></p>
                <p>Vendedor: ${datos.vendedor}</p>
                <p>Constructor: ${datos.constructor}</p>
                <p>Dirección: ${datos.direccion}</p>
                <p>Estrato: ${datos.estrato}</p>
                <p>Zona: ${datos.zona}</p>
                <p>Barrio: ${datos.barrio}</p>
                <p>Subzona: ${datos.subzona}</p>
                <p>Fecha inicio: ${datos.fecha_inicio}</p>
                <p>Estado: ${datos.estado}</p>
                <p>Activo: ${datos.activo}</p>
                <p>Unidades totales: ${datos.unidades_totales}</p>
                <p>Unidades ofertadas: ${datos.unidades_ofertadas}</p>
                <p>Unidades por lanzar: ${datos.unidades_por_lanzar}</p>
                <p>Unidades vendidas: ${datos.unidades_vendidas}</p>
                <p>Unidades disponibles: ${datos.unidades_dispobibles_proy}</p>
                <p>Última etapa lanzada: ${datos.ult_etapa_lanzada}</p>
                <p>Sótanos: ${datos.sotanos}</p>
                <p>Semisótanos: ${datos.semisotanos}</p>
                <p>Pisos de parqueadero: ${datos.pisos_parqueadero}</p>
                <p>Pisos de parqueadero en edificio: ${datos.pisos_parqueadero_edificio_vivi}</p>
                <p>Incremento de precio por piso: ${datos.incremento_precio_pisos}</p>
                <p>Otro uso: ${datos.otro_uso}</p>
                <p>Fecha de entrega: ${datos.fecha_entrega}</p>
                <p>Entrega con acabados: ${datos.acabados_entrega}</p>
                <p>Tipo de inmueble: ${datos.tipo_inmueble}</p>
                <p>Es vivienda VIS: ${datos.vivienda_vis}</p>
                <p>Fecha desistido: ${datos.fecha_desistido}</p>
                <p>Unidades desistidas: ${datos.unidades_desistidas}</p>
                <p>Certificado sostenible: ${datos.certificado_sostenible}</p>
                `,
                showCancelButton: false,
                confirmButtonColor: "#acc962",
                confirmButtonText: "Cerrar",
              });
            }
          })
          .catch((error: any) => {
            // Manejar cualquier error ocurrido durante la consulta
            console.error("Error al consultar la tabla:", error);
          });
      }
    );
  }

  consultaDireccion(dir:any) {
    loadModules(["esri/config", "esri/layers/FeatureLayer"]).then(
      ([esriConfig, FeatureLayer]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: environment.urlTablaPredios,
        });

        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        //query.where = `"DIRECCION LIKE %27"`+dir+`"%27"`; // Establecer una condición opcional para filtrar los resultados
        query.where = "direccion = 'CL 9 30 74'";
        query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

        featureLayer
          .queryFeatures(query)
          .then((result: any) => {
            // Manipular los resultados obtenidos
            const features = result.features;
            // Realizar acciones con los datos devueltos
            console.log("CONSULTA POR DIRECCION", features);
            if (features.length > 0) {
              // const datos = features.map((m:any)=>m.attributes);
              const jsonResult = features.map((feature:any) => feature.toJSON());
              console.log("JSONNNN", jsonResult);
              const datos = jsonResult[0].attributes;
              console.log("CONSULTA POR DIRECCION DATOS", datos);

              this.resultados = true;

                this.valoresResultados = {
                  opcion: this.opcion,
                  resultados: datos,
                };

            }
          })
          .catch((error: any) => {
            // Manejar cualquier error ocurrido durante la consulta
            console.error("Error al consultar la tabla:", error);
          });
      }
    );
    /*this.agregarPuntoSeleccionado(
      event.mapPoint.longitude,
      event.mapPoint.latitude,
      (this.valoresResultados.resultados.NUMERO_PISOS + 1) * 2.4
    );*/
  }
}
