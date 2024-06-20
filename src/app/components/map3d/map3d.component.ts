import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "src/environments/environment";
import swal from "sweetalert2";
import { SlideInOutAnimation } from "./animations";
import { RenderedSymbols } from "src/app/common/symbols/rendered-symbols";

import esriConfig from "@arcgis/core/config";
import { MapService } from "src/app/common/services/map.service";

import { driver } from "driver.js";

@Component({
  selector: "app-map3d",
  templateUrl: "./map3d.component.html",
  styleUrls: ["./map3d.component.css"],
})
export class Map3dComponent implements AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.mapService.views.activeView) {
      this.mapService.views.activeView.destroy();
    }
  }

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

  @ViewChild("mapView", { static: false })
  mapElementRef?: ElementRef;

  constructor(
    private spinner: NgxSpinnerService,
    private renderedSymbols: RenderedSymbols,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.initDefaultMap(this.mapElementRef);
    
    const driverObj = driver({
      nextBtnText: 'Siguiente >',
      prevBtnText: '< Anterior',
      doneBtnText: 'Finalizar tour',
      showProgress: true,
      overlayColor: '#eeeeeeee',
      steps: [
        { popover: { title: 'Bienvenido al recorrido por Predio360', description: 'Conozca las opciones que tenemos disponibles para consulta de predios (presione ESC o haga clic en la zona gris para salir del tour).' } },
        { element: '#consulta-predial-panel', popover: { title: 'Panel de acciones', description: 'En este panel puede seleccionar la opción de consulta y ver su resultado.' } },
        { element: '#cambio-dimensiones', popover: { title: 'Cambiar dimensiones', description: 'En esta opción puede cambiar la vista de mapa de 2D a 3D o viceversa.' } },
        { element: '#item-consulta-predial', popover: { title: 'Consulta de predio por atributos', description: 'Seleccione un atributo como dirección, CHIP, matrícula inmobiliaria o cédula catastral para realizar la búsqueda de un predio.' } },
        { element: '#item-consulta-seleccion', popover: { title: 'Consulta de predio por selección', description: 'Establezca un buffer de consulta y seleccione un predio dentro del buffer.' } },
        { element: '#item-consulta-galeria', popover: { title: 'Galería inmobiliaria', description: 'Consulte aquí información relacionada con los proyectos inmobiliarios en desarrollo.' } },
        { element: '#item-agregar-capas', popover: { title: 'Agregar capa', description: 'En esta opción puede activar capas precargadas o agregar capas externas.' } },
        { element: '.esri-zoom', popover: { title: 'Zoom', description: '(+) acercar el mapa y (-) alejar el mapa.' } },
        { element: '#basemap-widget', popover: { title: 'Galería de mapas base', description: 'Seleccione un mapa como mapa de fondo para referencia visual.' } },
      ]
    });
    
    driverObj.drive();

  }

  initMap() {
    if (esriConfig.request.interceptors) {
      esriConfig.request.interceptors.push({
        urls: environment.serviciosInterception, // environment.serviciosResultados.map((s) => s.url),
        before: () => {
          this.countSpinner++;
        },
        after: () => {
          this.countSpinner--;
          if (this.countSpinner < 0) {
            this.countSpinner = 0;
          }
        },
        error: () => {
          this.countSpinner = 0;
        },
      });
    }
    /*
    loadModules([
      // "esri/config",
      // "esri/Map",
      // "esri/views/SceneView",
      // "esri/layers/FeatureLayer",
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
        // esriConfig,
        // Map,
        // SceneView,
        // FeatureLayer,
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
    );*/
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
        actions: [this.streetViewAction]
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
        this.capaSitiosInteres,
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
        // this.mapService.switchGaleria(true);
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

  consultaSeleccion(event: any) {
    this.valoresResultados = {
      opcion: "consulta-seleccion-multiple",
      lotes: this.lotesSeleccionados,
    };
    this.resultados = true;
    this.mapService.cambiarTipoSelección('predio');
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

  private capasN = 0;

  private medidaBuffer = 0;

  setBuffer(event: any) {
    console.log("Se recibe", event);
    this.medidaBuffer = event;
    if (this.medidaBuffer > 0 && this.screenPoint) {
      this.seleccionarPredioByBuffer();
    }
  }

}
