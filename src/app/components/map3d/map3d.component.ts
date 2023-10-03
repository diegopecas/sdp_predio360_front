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
import { NgxSpinnerService } from "ngx-spinner";
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
  private capaSinupot: any;

  @ViewChild("mapViewNode", { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor(private spinner: NgxSpinnerService) {}

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

        /*let count = 0;
        esriConfig.request.interceptors.push({
          / / urls: /^https?:\/\/serviciosgeopr.sdp.gov.co\/. * /,
          urls: /^https?:\/\/ * /,
          before: (params:any) => {
            this.spinner.show();
            console.log('inicia contador', params)
            count++;
          },
          after: (response:any) => {
            count--;
            if ( count === 0 ) {
              this.spinner.hide ();
              console.log('termina contador', response)
            }
          },
          error: (response:any) => {
            count--;
            if ( count === 0 ) {
              this.spinner.hide ();
              console.log('error contador', response)
            }
          }
        });*/

        this.capa2d = this.crearCapa2d(FeatureLayer);
        this.capa3d = this.crearCapa3dClas(FeatureLayer);
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
          // this.valorPuntoClick = event;
          this.clickEnVista(event, Graphic);
        });

        this.capa3d.visible = true;
        this.capa2d.visible = false;
        this.capaGaleria.visible = true;
        this.capaPuntosSeleccionados.visible = true;
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

  /*crearCapa3d(FeatureLayer: any) {
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
            valueExpression: "return Abs(Number($feature.NUMERO_PISOS)) * 2.4;",
          },
        ],
      },
      visible: true,
    });
    return featureLayer;
  }*/

  crearCapa3dClas(FeatureLayer: any) {
    const renderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "polygon-3d", // autocasts as new PolygonSymbol3D()
        symbolLayers: [
          {
            type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
          },
        ],
      },
      visualVariables: [
        {
          type: "size",
          field: "NUMERO_PISOS",
          stops: [
            {
              value: 1,
              size: 2.4,
              label: "1 piso",
            },
            {
              value: 80,
              size: 192,
              label: "80 o más pisos",
            },
          ],
        },
        {
          type: "color",
          field: "NUMERO_PISOS",
          legendOptions: {
            title: "Número de pisos",
          },
          stops: [
            {
              value: 1,
              color: "#FFFCD4",
              label: "1 piso",
            },
            {
              value: 20,
              color: [153, 83, 41],
              label: "80 o más pisos",
            },
          ],
        },
      ],
    };

    const povLayer = new FeatureLayer({
      url: environment.urlServicioPredios,
      renderer: renderer,
      title: "Predio {CODIGO_PREDIO}",
      outFields: ["*"],
      popupTemplate: {
        // autocasts as new PopupTemplate()
        title: "Código predio: {CODIGO_PREDIO}",
      },
      // definitionExpression: defExp.join(" OR ") // only display counties from states in defExp
    });

    return povLayer;
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
      // basemap: "gray-vector",
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
    // this.valorPuntoClick = event;
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
        console.log('SELECCIONAR PREDIO', this.valoresResultados);
      }
    });
  }

  seleccionarProyecto(screenPoint: any, event: any) {
    
    this.view.hitTest(screenPoint).then((response: any) => {
      
      if (response.results.length) {
        let graphic = response.results.filter((result: any) => {
          
          return result.graphic.layer === this.capaGaleria;
        })[0].graphic;

        if (graphic) {
          this.proyectoSeleccionado = graphic.attributes.cod_proyecto;
          
          if (this.proyectoSeleccionado) {
            this.consultarProyectos();
          }
        }
      }
    });
  }

  accionMenu(valor: any) {
    this.opcion = valor;
  }

  accion2d3d(valor: any) {
    this.vista2d3d = valor;
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
          })
          .catch((error: any) => {
            // Manejar cualquier error ocurrido durante la consulta
            console.error("Error al consultar la tabla:", error);
          });
      }
    );
  }

  consultaDireccion(dir: any) {
    console.log('CONSULTA POR DIRECCION', dir)
    this.valoresResultados = {
      opcion: this.opcion,
      // resultados: graphic.attributes,
      direccion: dir
    };
    this.resultados = true;
    /*loadModules(["esri/config", "esri/layers/FeatureLayer"]).then(
      ([esriConfig, FeatureLayer]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: environment.urlTablaPredios,
        });

        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        query.where = `"DIRECCION LIKE %27"` + dir + `"%27"`; // Establecer una condición opcional para filtrar los resultados
        // query.where = "direccion = 'CL 9 30 74'";
        query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

        featureLayer
          .queryFeatures(query)
          .then((result: any) => {
            // Manipular los resultados obtenidos
            const features = result.features;
            // Realizar acciones con los datos devueltos
            if (features.length > 0) {
              // const datos = features.map((m:any)=>m.attributes);
              const jsonResult = features.map((feature: any) =>
                feature.toJSON()
              );
              const datos = jsonResult[0].attributes;
              
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
    );*/
    /*this.agregarPuntoSeleccionado(
      event.mapPoint.longitude,
      event.mapPoint.latitude,
      (this.valoresResultados.resultados.NUMERO_PISOS + 1) * 2.4
    );*/
  }

  controlCapaSinupot() {
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      if (!this.capaSinupot) {
        this.capaSinupot = new FeatureLayer({
          url: environment.urlSinupot,
          id: "capa-sinupot",
        });
        this.map.add(this.capaSinupot);
      }
    });
  }

  cargarCapasDeReferencia(event: any) {
    
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      environment.capasSinupot.forEach((capa:any) => {
        this.capaSinupot = new FeatureLayer({
          url: capa.url,
          id: capa.nombre,
        });
        this.map.add(this.capaSinupot);
      });
    });
  }

  private capasN = 0;

  anadirCapaReferencia(event: any) {
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      const nuevaCapa = new FeatureLayer({
        url: event,
        title: 'capaN-'+this.capasN
      });
      this.capasN++;
      this.map.add(nuevaCapa);
    });
  }
}
