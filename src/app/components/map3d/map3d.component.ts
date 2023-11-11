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
import { SlideInOutAnimation } from "./animations";
import { RenderedSymbols } from "src/app/common/symbols/rendered-symbols";

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
  private capa2dView: any;
  private capa3d: any;
  private capa3dSelected: any;
  private capa3dView: any;
  private capa3dSelectedView: any;
  private capaGaleria: any;
  private capaArbolado: any;
  private capaParques: any;
  private capaSitiosInteres: any;
  private capaPuntosSeleccionados: any;
  private simbolo3d: any;
  private simbolo3dOver: any;
  private view: any;
  private map: any;
  private vista2d3d = "3D";
  public valoresResultados: any;
  public valorPuntoClick: any;
  private capaSinupot: any;
  private _FeatureFilter: any;
  private FeatureLayer: any;
  private Query: any;
  private highlight = null;
  private highlightOtros = null;
  private Point: any;
  private lotesSeleccionados: any[] = [];

  public countSpinner = 0;

  @ViewChild("mapViewNode", { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor(
    private spinner: NgxSpinnerService,
    private renderedSymbols: RenderedSymbols
  ) {}

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
      "esri/layers/support/FeatureFilter",
      "esri/geometry/Point",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/geometry/Polyline",
      "esri/symbols/SimpleLineSymbol",
      "esri/Color",
      "esri/symbols/ObjectSymbol3DLayer",
      "esri/core/reactiveUtils",
      "esri/symbols/WebStyleSymbol",
      "esri/widgets/LayerList",
      "esri/rest/support/Query",
      "esri/widgets/Slider",
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
        FeatureFilter,
        Point,
        SimpleMarkerSymbol,
        Polyline,
        SimpleLineSymbol,
        Color,
        ObjectSymbol3DLayer,
        reactiveUtils,
        WebStyleSymbol,
        LayerList,
        Query,
        Slider,
      ]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;
        this._FeatureFilter = FeatureFilter;
        this.Query = Query;
        this.Point = Point;
        this.FeatureLayer = FeatureLayer;
        // let count = 0;
        esriConfig.request.interceptors.push({
          // urls: /^https?:\/\/serviciosgeopr.sdp.gov.co\/.,
          // urls: "/^https?:\/\/serviciosgeopr.sdp.gov.co\/server\/rest\/services\/predio360\/.",
          urls: environment.serviciosResultados.map((s) => s.url),
          before: () => {
            this.countSpinner++;
            // console.log("spinner", this.countSpinner);
          },
          after: () => {
            this.countSpinner--;
            if (this.countSpinner < 0) {
              this.countSpinner = 0;
            }
            // console.log("spinner", this.countSpinner);
          },
          error: () => {
            this.countSpinner = 0;
            // console.log("spinner", this.countSpinner);
          },
        });

        this.capa2d = this.crearCapa2d(FeatureLayer);
        this.capa3d = this.crearCapa3dClas(FeatureLayer);
        this.capa3dSelected = this.crearCapa3dSelect(FeatureLayer);
        this.capaArbolado = this.crearCapaArbolado(
          FeatureLayer,
          WebStyleSymbol
        );
        this.capaSitiosInteres = this.crearSitiosInteres(FeatureLayer,WebStyleSymbol);
        this.capaParques = this.crearCapaParques(FeatureLayer);
        this.capaPuntosSeleccionados = new GraphicsLayer();
        this.capaGaleria = this.crearCapaGaleria(
          IconSymbol3DLayer,
          PointSymbol3D,
          FeatureLayer,
          ObjectSymbol3DLayer,
          WebStyleSymbol
        );
        this.map = this.crearMapa(Map);
        this.view = this.crearVista(SceneView);
        this.view.on("click", (event: any) => {
          // this.valorPuntoClick = event;
          this.clickEnVista(event, Graphic);
        });
        this.view.when(() => {
          const layerList = new LayerList({
            view: this.view,
            listItemCreatedFunction: this.defineActions,
          });

          // Add widget to the top right corner of the view
          this.view.ui.add(layerList, "top-right");
        });

        this.view.whenLayerView(this.capa3d).then((layerView: any) => {
          this.capa3dView = layerView;
        });
        this.view.whenLayerView(this.capa3dSelected).then((layerView: any) => {
          this.capa3dSelectedView = layerView;
        });
        this.view.whenLayerView(this.capa2d).then((layerView: any) => {
          this.capa2dView = layerView;
        });

        reactiveUtils.on(
          () => this.view.popup,
          "trigger-action",
          (event: any) => {
            // Execute the measureThis() function if the measure-this action is clicked
            if (event.action.id === "verStreetView") {
              this.verStreetView();
            }
          }
        );

        this.capa3d.visible = true;
        this.capa3dSelected.visible = false;
        this.capaArbolado.visible = true;
        this.capaSitiosInteres.visible = true;
        this.capaParques.visible = true;
        this.capa2d.visible = false;
        this.capaGaleria.visible = true;
        this.capaPuntosSeleccionados.visible = true;

        const bufferNumSlider = new Slider({
          container: "bufferNum",
          min: 0,
          max: 500,
          steps: 1,
          visibleElements: {
            labels: true,
          },
          precision: 0,
          labelFormatFunction: (value: any, type: any) => {
            return `${value.toString()}m`;
          },
          values: [0],
        });
        // get user entered values for buffer
        bufferNumSlider.on(
          ["thumb-change", "thumb-drag"],
          this.bufferVariablesChanged
        );
      }
    );
  }

  bufferVariablesChanged(event: any) {
    const bufferSize = event.value;
    console.log("bufferSize", bufferSize);
    // runQuery();
  }

  async defineActions(event: any) {
    // The event object contains an item property.
    // is is a ListItem referencing the associated layer
    // and other properties. You can control the visibility of the
    // item, its title, and actions using this object.

    const item = event.item;

    await item.layer.when();

    // if (item.title === "US Demographics") {
    // An array of objects defining actions to place in the LayerList.
    // By making this array two-dimensional, you can separate similar
    // actions into separate groups with a breaking line.

    item.actionsSections = [
      [
        {
          title: "Go to full extent",
          className: "esri-icon-zoom-out-fixed",
          id: "full-extent",
        },
        {
          title: "Layer information",
          className: "esri-icon-description",
          id: "information",
        },
      ],
      [
        {
          title: "Increase opacity",
          className: "esri-icon-up",
          id: "increase-opacity",
        },
        {
          title: "Decrease opacity",
          className: "esri-icon-down",
          id: "decrease-opacity",
        },
      ],
    ];
    // }
  }

  crearCapa2d(FeatureLayer: any) {
    return new FeatureLayer({
      id: "capa-construccion-2d",
      title: "Predio 2D",
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
    const povLayer = new FeatureLayer({
      id: "Capa3D",
      title: "Predios 3D",
      url: environment.urlServicioPredios,
      renderer: this.renderedSymbols.build3D,
      // title: "Código lote {CODIGO_LOTE}",
      outFields: ["*"],
      popupTemplate: {
        title: "Código lote {CODIGO_LOTE}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "CODIGO_CONSTRUCCION",
                label: "Código construcción",
              },
              {
                fieldName: "NUMERO_PISOS",
                label: "Número de pisos",
              },
              {
                fieldName: "RESPONSABLE",
                label: "Responsable",
              },
            ],
          },
        ],
        actions: [this.streetViewAction],
      },
    });

    return povLayer;
  }

  crearCapa3dSelect(FeatureLayer: any) {
    const povLayer = new FeatureLayer({
      id: "Capa3DSelected",
      title: "Predio 3D seleccionado",
      url: environment.urlServicioPredios,
      renderer: this.renderedSymbols.selectedBuild3D,
    });

    return povLayer;
  }

  crearCapaArbolado(FeatureLayer: any, WebStyleSymbol: any) {
    const webStyleSymbol = new WebStyleSymbol({
      name: "Pinus",
      styleName: "EsriRealisticTreesStyle",
    });

    const povLayer = new FeatureLayer({
      url: environment.capaArbolado.url,
      title: "Arbolado",
      renderer: {
        type: "simple",
        symbol: webStyleSymbol,
        visualVariables: [
          {
            type: "size",
            field: "altura_total",
            axis: "height", // take the real height of the plant from the SIZE field
          },
          {
            type: "rotation",
            valueExpression: "random() * 360", // we use a random rotation, so that plants look different
          },
        ],
      },
      outFields: ["*"],
      popupTemplate: {
        // autocasts as new PopupTemplate()
        title: "Especie {Nombre_Esp}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Altura_Total", // The field whose values you want to format
                label: "Altura total",
              },
              {
                fieldName: "Tipo_Emplazamiento", // The field whose values you want to format
                label: "Tipo de emplazamiento",
              },
            ],
          },
        ],
      },
    });

    return povLayer;
  }

  crearSitiosInteres(FeatureLayer: any, WebStyleSymbol: any) {
    const povLayer = new FeatureLayer({
      url: environment.capaSitiosInteres.url,
      title: "Sitios de Interés",
    });

    return povLayer;
  }

  crearCapaParques(FeatureLayer: any) {
    const povLayer = new FeatureLayer({
      url: environment.capaParques.url,
      title: "Parques",
    });
    return povLayer;
  }

  private streetViewAction = {
    title: "Google Street View",
    id: "verStreetView",
    image: "/assets/images/Street_View_logo.png",
  };

  verStreetView() {
    const geom = this.view.popup.selectedFeature.geometry;
    // console.log('POPUP SV', geom);
    window.open(
      "http://maps.google.com/?cbll=" +
        geom.centroid.latitude +
        "," +
        geom.centroid.longitude +
        "&cbp=12,90,0,0,5&layer=c",
      "_blank"
    );
    // window.open("https://www.google.com/maps/@4.8657416,-74.0382613","_blank");
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
    ObjectSymbol3DLayer: any,
    WebStyleSymbol: any
  ) {
    const webStyleSymbol = new WebStyleSymbol({
      name: "Tower_Crane",
      styleName: "EsriRealisticTransportationStyle",
    });

    return new FeatureLayer({
      url: environment.urlServicioGaleria,
      id: "capa-galeria",
      renderer: {
        type: "simple",
        symbol: webStyleSymbol,
      },
      popupTemplate: {
        // autocasts as new PopupTemplate()
        title: "Proyecto {proyecto}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "cod_proyecto", // The field whose values you want to format
                label: "Código proyecto",
              },
              {
                fieldName: "cod_lote", // The field whose values you want to format
                label: "Código lote",
              },
              {
                fieldName: "constructor", // The field whose values you want to format
                label: "Constructor",
              },
            ],
          },
        ],
        // actions: [this.streetViewAction]
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
        // this.capaParques,
        this.capa2d,
        this.capa3d,
        // this.capa3dSelected,
        this.capaGaleria,
        this.capaPuntosSeleccionados,
        this.capaArbolado,
        this.capaSitiosInteres
      ],
    });
  }

  crearVista(SceneView: any) {
    return new SceneView({
      container: "mapView",
      map: this.map,
      camera: {
        position: {
          latitude: 4.618554114844545,
          longitude: -74.08188893966589,
          z: 3200, // Altura en metros
        },
        heading: 0, // grados de rotación respecto del norte
        tilt: 45, // grados de rotación respecto de la superficie
      },
      qualityProfile: "high",
      environment: {
        lighting: {
          directShadowsEnabled: true,
        },
      },
      highlightOptions: {
        haloColor: [3, 255, 255],
        color: [3, 255, 255],
        fillOpacity: 0.3,
      },
    });
  }

  clickEnVista(event: any, Graphic: any) {
    const clickedPoint = this.view.toMap(event);
    this.screenPoint = clickedPoint;
    this.view.goTo({
      target: clickedPoint,
      zoom: 17,
    });

    switch (this.opcion) {
      case "menu":
        break;
      case "consulta-seleccion-multiple":
        this.seleccionarPredioByBuffer();
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
      default:
        if (this.opcion !== "") {
          this.seleccionarPredio(
            {
              x: event.x,
              y: event.y,
            },
            event
          );
        }
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
        if (this.highlight) {
          (this.highlight as any).remove();
        }
        console.log("EL RESULTADO DEL CLIC ES:", graphic, response.results);
        this.highlight = this.capa3dView.highlight(graphic.attributes.OBJECTID);
      }
    });
  }

  private screenPoint: any;
  seleccionarPredioByBuffer() {
    console.log("consulta por buffer", this.medidaBuffer, this.screenPoint);
    let capa = this.capa3d;
    const query = capa.createQuery();
    query.where = "1=1";
    query.outFields = "CODIGO_LOTE, OBJECTID";
    query.returnGeometry = true;
    query.distance = this.medidaBuffer;
    query.units = "meters";
    query.geometry = new this.Point({
      x: this.screenPoint.longitude,
      y: this.screenPoint.latitude,
      //spatialReference: view.spatialReference // Referencia espacial de la vista del mapa
    });

    capa
      .queryFeatures(query)
      .then((result: any) => {
        console.log("el resultado es", query, result);
        if (result.features.length > 0) {
          // this.lotesSeleccionados = result.features.map((lt:any) => lt.attributes.CODIGO_LOTE);
          const ids = result.features.map(
            (lt: any) => lt.attributes.CODIGO_LOTE
          );
          this.lotesSeleccionados = ids.filter(
            (n: any, i: any) => ids.indexOf(n) === i
          );
          // console.log('extent', result.features[0].geometry.extent)

          /*this.view.goTo(result.features[0].geometry.extent.expand(4), {
            speedFactor: 0.5
          });*/

          if (this.highlight) {
            (this.highlight as any).remove();
          }

          this.highlight = this.capa3dView.highlight(
            result.features.map((f: any) => f.attributes.OBJECTID)
          );
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
      });
  }

  private capaBuffer: any;
  private capaBufferView: any;
  seleccionarByBuffer(capaConsulta: any, x: any, y: any, distance: any) {
    this.map.remove(this.capaBuffer);
    this.capaBuffer = new this.FeatureLayer({
      url: capaConsulta,
      id: "capaBuffer",
    });
    this.map.add(this.capaBuffer);
    this.view.whenLayerView(this.capaBuffer).then((layerView: any) => {
      this.capaBufferView = layerView;

      const query = this.capaBuffer.createQuery();
      query.where = "1=1";
      query.outFields = "*";
      query.returnGeometry = true;
      query.distance = distance;
      query.units = "meters";
      query.geometry = new this.Point({
        x: x,
        y: y,
      });

      this.capaBuffer
        .queryFeatures(query)
        .then((result: any) => {
          console.log("el resultado es", query, result);
          if (result.features.length > 0) {
            // const ids = result.features.map((lt:any) => lt.attributes.CODIGO_LOTE);
            // this.lotesSeleccionados = ids.filter((n:any, i:any) => ids.indexOf(n) === i);

            if (this.highlightOtros) {
              (this.highlightOtros as any).remove();
            }

            this.highlightOtros = this.capaBufferView.highlight(
              result.features.map((f: any) => f.attributes.OBJECTID)
            );
          }
        })
        .catch((error: any) => {
          console.error("Error al consultar el servicio:", error);
        });
    });
  }

  consultaPorCapa(event: any) {
    switch (event) {
      case "predios":
        console.log("LOS OBJECTIID SON: ", this.lotesSeleccionados);

        this.valoresResultados = {
          opcion: "consulta-seleccion-multiple",
          lotes: this.lotesSeleccionados,
        };
        this.resultados = true;

        break;
    }
  }

  seleccionarPredioByLote(lote: any) {
    let capa = this.capa3d;
    let simbolo = {};
    if (this.vista2d3d === "3D") {
      capa === this.capa3d;
      simbolo = {};
    } else {
      capa === this.capa2d;
      simbolo = {};
    }

    console.log("CONSULTA POR LOTE SELECCIONADO POR ATRIBUTO", lote);
    console.log("LA VISTA", this.view.layerViews);

    const query = capa.createQuery();
    query.where = "CODIGO_LOTE like '" + lote + "'";
    query.outFields = "CODIGO_LOTE, OBJECTID";
    query.returnGeometry = true;
    query.returnCentroid = true;

    capa
      .queryFeatures(query)
      .then((result: any) => {
        if (result.features.length > 0) {
          console.log("extent", result.features[0].geometry.extent);

          this.view.goTo(result.features[0].geometry.extent.expand(4), {
            speedFactor: 0.5,
          });

          if (this.highlight) {
            (this.highlight as any).remove();
          }

          this.highlight = this.capa3dView.highlight(
            result.features.map((f: any) => f.attributes.OBJECTID)
          );
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
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

  seleccionProyectoGaleria(proyecto: any) {
    // console.log('seleccionProyectoGaleria', proyecto)
    // this.view
    this.view.goTo({
      position: {
        x: proyecto.longitud,
        y: proyecto.latitud,
        z: 3000,
        spatialReference: {
          wkid: 4326,
        },
        heading: 0, // grados de rotación respecto del norte
        tilt: 90,
      },
    });
  }

  consultaDireccion(dir: any) {
    console.log("CONSULTA POR DIRECCION", dir);
    this.valoresResultados = {
      opcion: this.opcion,
      direccion: dir,
    };
    this.resultados = true;
  }

  consultaMatricula(mat: any) {
    // console.log('CONSULTA POR matricula', mat)
    this.valoresResultados = {
      opcion: this.opcion,
      matricula: mat,
    };
    this.resultados = true;
  }

  consultaCedula(ced: any) {
    // console.log('CONSULTA POR cedula', ced)
    this.valoresResultados = {
      opcion: this.opcion,
      cedula: ced,
    };
    this.resultados = true;
  }

  consultaChip(chip: any) {
    // console.log('CONSULTA POR chip', chip)
    this.valoresResultados = {
      opcion: this.opcion,
      chip: chip,
    };
    this.resultados = true;
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

  /*cargarCapaArbolado() {
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      
        this.capaArbolado = new FeatureLayer({
          url: environment.capaArbolado.url,
          id: "capa-arbolado",
        });
        // this.map.add(capa);
      
    });
  }*/

  cargarCapasDeReferencia(event: any) {
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      environment.capasSinupot.forEach((capa: any) => {
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
        title: "capaN-" + this.capasN,
      });
      this.capasN++;
      this.map.add(nuevaCapa);
    });
  }

  private medidaBuffer = 0;

  setBuffer(event: any) {
    console.log("Se recibe", event);
    this.medidaBuffer = event;
    if (this.medidaBuffer > 0 && this.screenPoint) {
      this.seleccionarPredioByBuffer();
    }
  }

  cambioCapaBuffer(evt: any) {
    loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
      const capa = new FeatureLayer({
        url: evt.url,
        id: "capa_buffer",
      });
      this.map.add(capa);
    });
  }
}
