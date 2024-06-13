import { ElementRef, Injectable, NgZone } from "@angular/core";
import { environment } from "src/environments/environment";


import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Zoom from "@arcgis/core/widgets/Zoom";
import Graphic from "@arcgis/core/Graphic";
import Color from "@arcgis/core/Color";
import LayerList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";
import Point from "@arcgis/core/geometry/Point";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Slider from "@arcgis/core/widgets/Slider";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import ButtonMenu from "@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenu";
import ButtonMenuItem from "@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem";
import { RenderedSymbols } from "../symbols/rendered-symbols";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import swal from "sweetalert2";
import  SpatialReference from "@arcgis/core/geometry/SpatialReference";
import esriRequest from "@arcgis/core/request.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { Observable, lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MapService {
  private _predioClick: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  // Exponer un observable para observar cambios
  predioClickObservable = this._predioClick.asObservable();

  get predioClick(): string {
    console.log("get predioClick", this._predioClick.value);
    return this._predioClick.value;
  }

  set predioClick(value: string) {
    // Actualizar la variable y notificar a los observadores
    console.log("set predioClick", value);
    this._predioClick.next(value);
  }

  map?: Map;
  // sceneView?: SceneView;
  layers?: any[] = [];
  buffer = {
    consulta: false,
    tipo: "",
    medida: 0,
  };
  bufferLayer: any;
  elementosSeleccionados = [] as any[];
  puntoClickeado: any;
  highlight = null;
  tipoSeleccion = ""; // 1 = 'predio', N = 'predios', Identify = 'Identify', solo centrar = ''

  views: any = {
    sceneView: null,
    mapView: null,
    activeView: null,
    actual: "3D",
    container: null,
  };

  constructor() {}

  public initDefaultMap(mapElementRef?: ElementRef): void {
    
    // setInterval(this.checkDiaNoche, 60000);
    
    // config.assetsPath = 'assets/';
    config.apiKey = environment.esriConfigApiKey;
    this.views.container = mapElementRef?.nativeElement;

    this.map = new Map({
      basemap: environment.baseConfigs.basemapId,
      ground: "world-elevation",
    });
    
    /*this.views.sceneView = new SceneView({
      map: this.map,
      // container: mapElementRef?.nativeElement,
      camera: {
        position: {
          latitude: environment.baseConfigs.center.latitud,
          longitude: environment.baseConfigs.center.longitud,
          z: environment.baseConfigs.center.altitud, // Altura en metros
        },
        heading: 0, // grados de rotación respecto del norte
        tilt: 45, // grados de rotación respecto de la superficie
      },
      highlightOptions: {
        haloColor: new Color("rgb(3, 255, 255)"),
        color: new Color("rgb(3, 255, 255)"),
        fillOpacity: 0.3,
      },
    });

    this.views.mapView = new MapView({
      map: this.map,
      // container: mapElementRef?.nativeElement,
      center: [
        environment.baseConfigs.center.longitud,
        environment.baseConfigs.center.latitud,
      ],
      zoom: 17,
      highlightOptions: {
        haloColor: new Color("rgb(3, 255, 255)"),
        color: new Color("rgb(3, 255, 255)"),
        fillOpacity: 0.3,
      },
    });*/

    // Vista inicial en 3D
    // this.views.activeView = this.views.sceneView;
    this.switchView("0");

    /*this.views.sceneView.on("click", (event: any) => {
      console.log("clic sobre el mapa", event);
      this.puntoClickeado = event.mapPoint;
      this.clicEnMapa(event);
    });

    this.views.mapView.on("click", (event: any) => {
      console.log("clic sobre el mapa", event);
      this.puntoClickeado = event.mapPoint;
      this.clicEnMapa(event);
    });

    reactiveUtils.on(
      () => this.views.sceneView?.popup,
      "trigger-action",
      (event: any) => {
        if (event.action.id === "verStreetView") {
          this.verStreetView();
        }
      }
    );

    reactiveUtils.on(
      () => this.views.mapView?.popup,
      "trigger-action",
      (event: any) => {
        if (event.action.id === "verStreetView") {
          this.verStreetView();
        }
      }
    );*/

    // this.agregarCapasBase();
    /*this.agregarListaCapas();
    this.agregarLeyenda();
    this.agregarBusquedas();*/
  }

  // Función para comprobar si son las 6 de la tarde
  checkDiaNoche() {
    const now = new Date();
    const hours = now.getHours();
    if (hours === 18) {
        console.log("¡Son las 6 de la tarde!");
    } else {
        console.log("No son las 6 de la tarde");
    }
  }

  agregarWidgets() {
    const basemapGallery = new BasemapGallery({
      view: this.views.activeView,
    });

    const bgExpand = new Expand({
      view: this.views.activeView,
      content: basemapGallery,
    });

    this.views.activeView?.ui.add(bgExpand, "bottom-right");
  }

  private streetViewAction: any = {
    title: "Google Street View",
    id: "verStreetView",
    image: "/assets/images/Street_View_logo.png",
  };

  verStreetView() {
    try {
      const geom: any = this.views.activeView?.popup.selectedFeature.geometry;
      window.open(
        "http://maps.google.com/?cbll=" +
          geom?.extent.center.latitude +
          "," +
          geom?.extent.center.longitude +
          "&cbp=12,90,0,0,5&layer=c",
        "_blank"
      );
    } catch (error: any) {
      alert(
        "Por favor asegúrese de tener habilitadas las ventanas emergentes."
      );
    }
  }

  cambiarTipoSelección(tipo: any) {
    this.tipoSeleccion = tipo;
  }

  agregarCapasBase() {
    environment.capasBase.forEach((capa:any) => {
      if (capa.tipo == "3D" && this.views.actual == "3D") {
        switch (capa.simbolo) {
          case "arbol":
            const simboloArbol = new RenderedSymbols().construirArbol(
              capa.altura
            );
            const featureLayerArbol = new FeatureLayer({
              url: capa.url,
              id: capa.id,
              title: capa.nombre,
              renderer: simboloArbol,
              outFields: ["*"],
            });
            this.map?.add(featureLayerArbol);
            this.views.activeView
              ?.whenLayerView(featureLayerArbol)
              .then((layerView: any) => {
                this.layers?.push({
                  capa: featureLayerArbol,
                  datos: capa,
                  view: layerView,
                });
              });
            break;
          case "grua":
            const simboloGrua = new RenderedSymbols().construirGrua(
              capa.factor
            );
            console.log("agregar capa base grua", capa);
            const featureLayerGrua = new FeatureLayer({
              url: capa.url,
              id: capa.id,
              title: capa.nombre,
              renderer: simboloGrua,
              outFields: ["*"],
              popupTemplate: {
                title: capa.popupTemplate?.title,
                content: [
                  {
                    type: "fields",
                    fieldInfos: capa.popupTemplate?.contenido,
                  },
                ],
                actions: [this.streetViewAction],
              },
              definitionExpression: "activo not in ('No')"
            });
            this.map?.add(featureLayerGrua);
            this.views.activeView
              ?.whenLayerView(featureLayerGrua)
              .then((layerView: any) => {
                this.layers?.push({
                  capa: featureLayerGrua,
                  datos: capa,
                  view: layerView,
                });
              });
            break;
          case "bloque":
            const simboloBloque =
              capa.altura == ""
                ? new RenderedSymbols().construirBloqueConstante(
                    capa.factor,
                    capa.color
                  )
                : new RenderedSymbols().construirBloque(
                    capa.altura,
                    capa.factor,
                    capa.color
                  );
            const featureLayerBloque = new FeatureLayer({
              url: capa.url,
              id: capa.id,
              title: capa.nombre,
              renderer: simboloBloque,
              outFields: ["*"],
            });
            this.map?.add(featureLayerBloque);

            this.views.activeView
              ?.whenLayerView(featureLayerBloque)
              .then((layerView: any) => {
                // this.capa3dView = layerView;
                this.layers?.push({
                  capa: featureLayerBloque,
                  datos: capa,
                  view: layerView,
                });
                console.log("capa agregada", this.layers);
              });

            /*featureLayerBloque.on("load",(e)=>{
              console.log('AGREGAR', { capa: featureLayerBloque, datos: capa })
              this.layers?.push({ capa: featureLayerBloque, datos: capa });
            })*/
            break;
        }
      } else {
        const featureLayer = new FeatureLayer({
          title: capa.nombre,
          id: capa.id,
          url: capa.url,
        });
        this.map?.add(featureLayer);
        this.views.activeView
          ?.whenLayerView(featureLayer)
          .then((layerView: any) => {
            this.layers?.push({
              capa: featureLayer,
              datos: capa,
              view: layerView,
            });
          });
      }
    });
  }

  removerCapaRestPrecargada(capa:any) {
    if (capa.featureLayer) {
      this.map?.remove(capa.featureLayer);
    }
  }

  agregarCapaRestPrecargada(capa:any) {
    try {
      const popup = {
        "title": capa.label,
        "content": capa.popup
      }

      const nuevaCapa = new FeatureLayer({
        url: capa.url,
        outFields: capa.fields,
        popupTemplate: popup
      });

      capa.featureLayer = nuevaCapa;

      this.map?.add(nuevaCapa);

      // Escuchar el evento de error al crear la LayerView
      nuevaCapa.on('layerview-create-error', (errorEvent) => {
        console.error('Error al crear la LayerView:', errorEvent.error);
        swal.fire("Error al agregar capa.");
      });

      // También puedes escuchar el evento 'layerview-create' para realizar acciones después de que se crea la LayerView con éxito
      nuevaCapa.on('layerview-create', (layerviewEvent) => {
        console.log('LayerView creada con éxito:', layerviewEvent.layerView);
        swal.fire("capa agregada correctamente.");
      });

    }catch(error:any) {
      swal.fire("Ocurrió un error al agregar la capa.");
    }
  }

  agregarCapaRest(nombre:any, servicio:any) {
    try {
      const nuevaCapa = new FeatureLayer({
        url: servicio,
        id: nombre,
        title: nombre,
      });
      console.log("CAPA NUEVA", nuevaCapa);
      /*nuevaCapa.load((r:any),(e:any)=>{
        this.map?.add(nuevaCapa);
        
      });*/

      this.map?.add(nuevaCapa);

      // Escuchar el evento de error al crear la LayerView
      nuevaCapa.on('layerview-create-error', (errorEvent) => {
        console.error('Error al crear la LayerView:', errorEvent.error);
        swal.fire("Error al agregar capa.");
      });

      // También puedes escuchar el evento 'layerview-create' para realizar acciones después de que se crea la LayerView con éxito
      nuevaCapa.on('layerview-create', (layerviewEvent) => {
        console.log('LayerView creada con éxito:', layerviewEvent.layerView);
        swal.fire("capa agregada correctamente.");
      });

    }catch(error:any) {
      swal.fire("Ocurrió un error al agregar la capa.");
    }
  }

  async defineActions(event:any) {
    const item = event.item;
  
    await item.layer.when();
  
      item.actionsSections = [
        [
          {
            title: "Go to full extent",
            icon: "zoom-out-fixed",
            id: "full-extent"
          },
          {
            title: "Layer information",
            icon: "information",
            id: "information"
          }
        ],
        [
          {
            title: "Increase opacity",
            icon: "chevron-up",
            id: "increase-opacity"
          },
          {
            title: "Decrease opacity",
            icon: "chevron-down",
            id: "decrease-opacity"
          }
        ]
      ];
    
  }

  agregarListaCapas() {
   
    const layerList = new LayerList({
      view: this.views.activeView,
      // listItemCreatedFunction: this.defineActions
    });

    layerList.listItemCreatedFunction = async (event:any) => {
      const { item } = event;
      await item.layer.when();
    
      // Adds a slider for updating a group layer's opacity
      if (item.children.length > 1 && item.parent) {
        const slider = new Slider({
          min: 0,
          max: 1,
          precision: 2,
          values: [1],
          visibleElements: {
            labels: true,
            rangeLabels: true
          }
        });
    
        item.panel = {
          content: slider,
          icon: "sliders-horizontal",
          title: "Change layer opacity"
        };
    
        // Watch the slider's values array and update the layer's opacity
        reactiveUtils.watch(
          () => slider.values.map((value) => value),
          (values) => (item.layer.opacity = values[0])
        );
      }
    }

    const bgExpand = new Expand({
      view: this.views.activeView,
      content: layerList,
    });

    /*const mySlider = new Slider({
      // container: "sliderDiv",
      min: 0,
      max: 1,
      steps: .05,
      values: [1],
      snapOnClickEnabled: true,
      visibleElements: {labels: true,
                          rangeLabels: true}
    });

    mySlider.on('thumb-drag', (index:any) => console.log(index));*/

    this.views.activeView?.ui.add(bgExpand, "bottom-right");
  }

  agregarLeyenda() {
    const legend = new Legend({
      view: this.views.activeView,
      style: "card",
    });

    const bgExpand = new Expand({
      view: this.views.activeView,
      content: legend,
    });

    this.views.activeView?.ui.add(bgExpand, "bottom-right");
  }

  agregarBusquedas() {
    setTimeout(() => {
      console.log("BUSQUEDA", this.layers);
    }, 15000);
    /*const searchWidget = new Search({
      view: this.sceneView,
      allPlaceholder: "Digite una búsqueda",
      includeDefaultSources: false,
      sources: this.layers
        ?.filter((f) => f.datos.busqueda)
        .map((layer: any) => {
          return {
            layer: layer.capa,
            searchFields: layer.datos.busqueda.searchFields,
            displayField: layer.datos.busqueda.displayField,
            exactMatch: false,
            outFields: ["*"],
            name: layer.datos.nombre,
            placeholder: layer.datos.busqueda.placeholder,
          };
        }),
    });

    this.sceneView?.ui.add(searchWidget, {
      position: "top-right",
    });*/
  }

  consultarEstadisticas(filter: any): any {
    const capa = new FeatureLayer({
      url: environment.capaEstadisticas.url,
    });
    const query = capa.createQuery();
    query.where = environment.capaEstadisticas.campoConsulta + "=" + filter;
    query.outFields = environment.capaEstadisticas.campos;
    query.returnGeometry = false;

    return capa
      .queryFeatures(query)
      .then((result: any) => {
        return result;
      })
      .catch((error: any) => {
        console.log("Se generó un error al consultar las estadísiticas.");
        return [];
      });
  }

  consultarPrediosByLote(lote: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porLote.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      environment.capaConsultaPredio.porLote.atributo + " like '" + lote + "'";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return [];
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar la tabla:", error);
      });
  }

  consultarPrediosByLotes(lotes: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porLote.url,
    });

    const query = featureLayer.createQuery();

    const ids = lotes.join("','");

    query.where =
      environment.capaConsultaPredio.porLote.atributo + " IN ('" + ids + "')";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return null;
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  consultarPrediosByMatricula(matricula: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porMatricula.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      environment.capaConsultaPredio.porMatricula.atributo +
      " like '" +
      matricula +
      "'";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return null;
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  consultarPrediosByCedula(cedula: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porCedula.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      environment.capaConsultaPredio.porCedula.atributo +
      " like '" +
      cedula +
      "'";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return null;
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  consultarPrediosByChip(chip: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porChip.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      environment.capaConsultaPredio.porChip.atributo + " like '" + chip + "'";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;
    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return [];
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar la tabla:", error);
      });
  }

  consultarPredioByChip(chip: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porChip.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      environment.capaConsultaPredio.porChip.atributo + " like '" + chip + "'";
    query.outFields = ["*"];
    query.returnGeometry = false;
    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes)[0];;
        } else {
          return [];
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar la tabla:", error);
      });
  }

  consultarPrediosByDireccion(direccionConsulta: any): any {
    const featureLayer = new FeatureLayer({
      url: environment.capaConsultaPredio.porDireccion.url,
    });

    const query = featureLayer.createQuery();

    query.where =
      environment.capaConsultaPredio.porDireccion.atributo +
      " like '" +
      direccionConsulta +
      "%'";
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION,GN_CHIP"];
    query.returnGeometry = false;
    return featureLayer
      .queryFeatures(query)
      .then(async (result: any) => {
        const features = result.features;

        if (features.length > 0) {
          return features.map((m: any) => m.attributes);
        } else {
          return null;
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar la tabla:", error);
      });
  }

  obtenerUbicacionLote(lote: any): any {
    const capa = new FeatureLayer({
      url: environment.urlServicioPredios,
    });

    const query = capa.createQuery();
    query.where = "CODIGO_LOTE like '" + lote + "'";
    query.outFields = ["CODIGO_LOTE"];
    query.returnGeometry = true;
    query.returnCentroid = true;

    return capa
      .queryFeatures(query)
      .then((result: any) => {
        if (result.features.length > 0) {
          return result.features[0].geometry.centroid;
        } else {
          return null;
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
      });
  }

  configurarElementosBuffer(tipo: any, medida: any) {
    this.buffer.consulta = true;
    this.buffer.tipo = tipo;
    this.buffer.medida = medida;
    console.log("Se configura buffer", this.buffer);
  }

  puntoBuffer:any = null;
  seleccionarPredioByLote(lote: any) {
    const capaBusqueda = this.layers?.filter(
      (f: any) => f.datos.busquedaBufferPredio
    )[0];

    const query = capaBusqueda.capa.createQuery();
    query.where = "CODIGO_LOTE like '" + lote + "'";
    query.outFields = ["CODIGO_LOTE, OBJECTID"];
    query.returnGeometry = true;
    query.returnCentroid = true;

    capaBusqueda.capa
      .queryFeatures(query)
      .then((result: any) => {
        if (result.features.length > 0) {
          this.centrar(result.features[0].geometry.centroid);
          this.puntoBuffer = result.features[0].geometry.centroid;
          if (this.highlight) {
            (this.highlight as any).remove();
          }

          this.highlight = capaBusqueda.view.highlight(
            result.features.map((f: any) => f.attributes.OBJECTID)
          );
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
      });
  }

  seleccionarPredioByBuffer(
    capaBusqueda: any,
    point: any,
    sinDistancia: any = false
  ) {
    let capa = capaBusqueda.capa;
    const query = capa.createQuery();
    query.where = "1=1";
    query.outFields = ["CODIGO_LOTE, OBJECTID"];
    query.returnGeometry = true;
    query.distance = sinDistancia ? 0 : this.buffer.medida;
    query.units = "meters";
    query.geometry = new Point({
      x: point.mapPoint.longitude,
      y: point.mapPoint.latitude,
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
          this.elementosSeleccionados = ids.filter(
            (n: any, i: any) => ids.indexOf(n) === i
          );

          if (this.highlight) {
            (this.highlight as any).remove();
          }
          console.log("alumbrar", result.features);
          this.highlight = capaBusqueda.view.highlight(
            result.features.map((f: any) => f.attributes.OBJECTID)
          );
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
      });
  }

  clicEnMapa(point: any) {
    this.puntoClickeado = point;
    this.predioClick = point;
    switch (this.tipoSeleccion) {
      case "predio":
        this.centrar(point.mapPoint);
        const capa1 = this.layers?.filter(
          (f: any) => f.datos.busquedaBufferPredio
        )[0];
        this.seleccionarPredioByBuffer(capa1, point, true);
        break;
      case "predios":
        console.log("seleccionar predios")
        this.centrar(point.mapPoint);
        const capaN = this.layers?.filter(
          (f: any) => f.datos.busquedaBufferPredio
        )[0];
        this.seleccionarPredioByBuffer(capaN, point);
        break;
      default:
        break;
    }
  }

  /*_clicEnMapa(point: any) {
    if (this.buffer.consulta) {
      switch (this.buffer.tipo) {
        case "predio":
          this.centrar(point.mapPoint);
          break;
        case "predios":
          this.centrar(point.mapPoint);
          const capa = this.layers?.filter(
            (f: any) => f.datos.busquedaBufferPredio
          )[0];
          console.log("capa para buffer de predios", capa);
          this.seleccionarPredioByBuffer(capa, point);
          break;
        default:
          break;
      }
    }
  }*/

  centrar(centroide: any) {
    this.views.activeView?.goTo(
      { target: centroide, zoom: 19 },
      {
        speedFactor: 0.5,
      }
    );
  }

  agregarCapaBuffer(capa: any) {
    /*if(capa.vista != this.views.actual) {
      this.switchView();
    }*/
    /*if (capa.formato.dimensiones == 2) {
      this.switchView("2D");
    } else {
      this.switchView("3D");
    }*/
    if (capa.formato.vista != this.views.actual) {
      this.switchView(capa.formato.vista, capa);
    } else {
      this.agregarCapaBufferAfterView(capa);
    }
  }

  agregarCapaBufferAfterView(capa: any) {
    if (this.bufferLayer) {
      this.map?.remove(this.bufferLayer);
    }

    /*const simboloGrua = new RenderedSymbols().construirGrua(
      capa.factor
    );
    const featureLayerGrua = new FeatureLayer({
      url: capa.url,
      id: capa.id,
      title: capa.nombre,
      renderer: simboloGrua,
      outFields: ["*"],
    });*/

    let simboloBloque = null;
    switch(capa.formato.simbolo) {
      case "bloque-parque":
        simboloBloque = new RenderedSymbols().construirBloqueConstante(0.4, "rgb(0, 255, 0)")
        break;
      case "grua":
        simboloBloque = new RenderedSymbols().construirGrua(0);
        console.log("seleccionada la grúa símbolo");
        break;
      default:
        simboloBloque = new RenderedSymbols().construirBloqueConstante(
          2.4,
          "rgb(50, 50, 50)"
        );
        break;    
    }
      /*capa.formato.simbolo == "bloque-parque"
        ? new RenderedSymbols().construirBloqueConstante(0.4, "rgb(0, 255, 0)")
        : new RenderedSymbols().construirBloqueConstante(
            2.4,
            "rgb(50, 50, 50)"
          );*/

    if (capa.formato?.dimensiones == 3 && this.views.actual == "3D") {
      switch (capa.formato?.simbolo) {
        case "bloque":
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            renderer: simboloBloque,
            outFields: ["*"],
            definitionExpression: capa.condicion ? capa.condicion : '1=1',
            popupTemplate: {
              title: capa.atributos.titulo,
              content: [
                {
                  type: "fields",
                  fieldInfos: capa.atributos.contenido,
                },
              ],
              actions: [this.streetViewAction],
            },
          });
          this.map?.add(this.bufferLayer);
          break;
        case "bloque-parque":
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            renderer: simboloBloque,
            outFields: ["*"],
            definitionExpression: capa.condicion ? capa.condicion : '1=1',
            popupTemplate: {
              title: capa.atributos.titulo,
              content: [
                {
                  type: "fields",
                  fieldInfos: capa.atributos.contenido,
                },
              ],
              actions: [this.streetViewAction],
            },
          });
          this.map?.add(this.bufferLayer);
          break;
        case "grua":
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            renderer: simboloBloque,
            outFields: ["*"],
            definitionExpression: capa.condicion ? capa.condicion : '1=1',
            popupTemplate: {
              title: capa.atributos.titulo,
              content: [
                {
                  type: "fields",
                  fieldInfos: capa.atributos.contenido,
                },
              ],
              actions: [this.streetViewAction],
            },
          });
          this.map?.add(this.bufferLayer);
          console.log("Se agregan grúas");
          break;
        default:
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            outFields: ["*"],
            definitionExpression: capa.condicion ? capa.condicion : '1=1',
            popupTemplate: {
              title: capa.atributos.titulo,
              content: [
                {
                  type: "fields",
                  fieldInfos: capa.atributos.contenido,
                },
              ],
              actions: [this.streetViewAction],
            },
          });
          this.map?.add(this.bufferLayer);
          break;
      }
    } else {
      this.bufferLayer = new FeatureLayer({
        url: capa.url,
        id: "Capa buffer",
        title: capa.nombre,
        outFields: ["*"],
        definitionExpression: capa.condicion ? capa.condicion : '1=1',
        popupTemplate: {
          title: capa.atributos.titulo,
          content: [
            {
              type: "fields",
              fieldInfos: capa.atributos.contenido,
            },
          ],
          actions: [this.streetViewAction],
        },
      });
      this.map?.add(this.bufferLayer);
    }
  }

  switchView(dims: any = "3D", capaAux: any = null) {
    console.log("ingresa a switchview", dims, this.views.actual);
    /*if (this.views.activeView) {
      this.views.activeView.container = null;
    }*/
    if (dims !== this.views.actual) {
      if (dims == "2D") {
        this.views.actual = "2D";
        this.map?.removeAll();
        // this.views.activeView.container = this.views.container;
        this.configuraVista2D(capaAux);
        // this.views.activeView = this.views.mapView;
        // this.agregarCapasBase();
      } else {
        this.views.value = "3D";
        this.map?.removeAll();
        // this.views.activeView.container = this.views.container;
        this.configuraVista3D(capaAux);
        // this.views.activeView = this.views.sceneView;
        // this.agregarCapasBase();
      }
    }
  }

  configuraVista2D(capaAux: any = null) {
    this.views.activeView = new MapView({
      map: this.map,
      container: this.views.container, // mapElementRef?.nativeElement,
      center: [
        environment.baseConfigs.center.longitud,
        environment.baseConfigs.center.latitud,
      ],
      zoom: 17,
      highlightOptions: {
        haloColor: new Color("rgb(3, 255, 255)"),
        color: new Color("rgb(3, 255, 255)"),
        fillOpacity: 0.3,
      },
    });

    this.views.activeView.on("click", (event: any) => {
      console.log("clic sobre el mapa", event);
      this.puntoClickeado = event.mapPoint;
      this.clicEnMapa(event);
    });

    reactiveUtils.on(
      () => this.views.activeView?.popup,
      "trigger-action",
      (event: any) => {
        if (event.action.id === "verStreetView") {
          this.verStreetView();
        }
      }
    );

    this.agregarCapasBase();
    this.agregarListaCapas();
    this.agregarLeyenda();
    this.agregarBusquedas();
    this.agregarWidgets();

    if (capaAux) {
      this.agregarCapaBufferAfterView(capaAux);
    }
  }

  configuraVista3D(capaAux: any = null) {
    this.views.activeView = new SceneView({
      map: this.map,
      container: this.views.container, // mapElementRef?.nativeElement,
      camera: {
        position: {
          latitude: environment.baseConfigs.center.latitud,
          longitude: environment.baseConfigs.center.longitud,
          z: environment.baseConfigs.center.altitud, // Altura en metros
        },
        heading: 0, // grados de rotación respecto del norte
        tilt: 45, // grados de rotación respecto de la superficie
      },
      highlightOptions: {
        haloColor: new Color("rgb(3, 255, 255)"),
        color: new Color("rgb(3, 255, 255)"),
        fillOpacity: 0.3,
      },
    });

    this.views.activeView.on("click", (event: any) => {
      console.log("clic sobre el mapa", event);
      this.puntoClickeado = event.mapPoint;
      this.clicEnMapa(event);
    });

    reactiveUtils.on(
      () => this.views.activeView?.popup,
      "trigger-action",
      (event: any) => {
        if (event.action.id === "verStreetView") {
          this.verStreetView();
        }
      }
    );

    this.agregarCapasBase();
    this.agregarListaCapas();
    this.agregarLeyenda();
    this.agregarBusquedas();
    this.agregarWidgets();

    if (capaAux) {
      this.agregarCapaBufferAfterView(capaAux);
    }
  }

  consultarProyectos(): any {
    let datosGaleria = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.capaGaleria.url
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = "activo like 'Si'"; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          datosGaleria = features.map((m: any) => m.attributes);
        }
        return datosGaleria;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarProyecto(idProyecto:any): any {
    let proyecto = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.capaGaleria.url
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = "CODIGO_PROYECTO = "+idProyecto; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          proyecto = features.map((m: any) => m.attributes)[0];
        }
        return proyecto;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarLoteById(idLote:any): any {
    let lote = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.urlLoteCatastral
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = "GN_CODIGO_LOTE  = "+idLote; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          lote = features.map((m: any) => m.attributes)[0];
        }
        return lote;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarExtentLote (idLote:any): any {
    // Crear un FeatureLayer con la URL del servicio de tabla
    const layer = new FeatureLayer({
      url: environment.urlLoteCatastral
    });

    // Consultar la tabla y obtener los resultados
    let query = layer.createQuery();


    query.where = "GN_CODIGO_LOTE  = '"+idLote+"'"; // Establecer una condición opcional para filtrar los resultados
    query.returnGeometry = false; // Especificar los campos que deseas obtener (en este caso, todos)
    query.outSpatialReference = SpatialReference.WebMercator; // Especificar los campos que deseas obtener (en este caso, todos)
    return layer
      .queryExtent(query)
      .then((result: any) => {
        console.log ("resultado consulta extent", result);
        // Manipular los resultados obtenidos
        const extent = result.extent;
        // Realizar acciones con los datos devueltos

        
        return extent;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarFichaProyectoInfo(idProyecto:any): any {
    let fichaInfo = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.urlFichaProyecto
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = "CODIGO_PROYECTO  = "+idProyecto; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          fichaInfo = features.map((m: any) => m.attributes)[0];
        }
        return fichaInfo;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarLicencias(predio: any): any {
    let datosLicencias = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.capaDatosUrbanisticos.url,
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where =
      environment.capaDatosUrbanisticos.filterPredio + " like '" + predio + "'"; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        console.log("resultado de licencias", result);
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          datosLicencias = features.map((m: any) => m.attributes);
        }
        return datosLicencias;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  cargarInformacion(predioEvaluado: any, capa: any): any {
    const featureLayer = new FeatureLayer({
      url: capa.url,
    });

    const query = featureLayer.createQuery();
    query.where =
      capa.filter[0] + " like '" + predioEvaluado[capa.filter[1]] + "'";
    query.outFields = ["*"];
    query.returnGeometry = false;

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        return result.features;
      })
      .catch((error: any) => {
        console.log("error con capa", capa);
        return null;
      });
  }

  x_cargarInformacion(predioEvaluado: any): any {
    console.log("ingresa a servicio cargar información", predioEvaluado);
    return environment.serviciosResultados.map((sr) => {
      const featureLayer = new FeatureLayer({
        url: sr.url,
      });

      const query = featureLayer.createQuery();
      query.where =
        sr.filter[0] + " like '" + predioEvaluado[sr.filter[1]] + "'";
      query.outFields = ["*"];
      query.returnGeometry = false;

      return featureLayer
        .queryFeatures(query)
        .then((result: any) => {
          const features = result.features;
          if (features.length > 0) {
            //const attr = features[0].attributes;
            return features[0].attributes;
            //return attr;
            /*paneles.forEach((p:any) => {
                  p.atributos.forEach((a:any) => {
                    const valor = attr[a.name];
                    if(valor){
                      a.valor = valor;
                    }
                  })
                })*/
          } else {
            return [];
          }
        })
        .catch((error: any) => {
          console.error("Error al consultar el servicio:", error);
          return [];
        });
    });
  }

  seleccionProyectoGaleria(proyecto: any) {
    // console.log('seleccionProyectoGaleria', proyecto)
    // this.view
    this.views.activeView?.goTo({
      position: {
        x: proyecto.longitud,
        y: proyecto.latitud,
      },
    });

    /*this.views.activeView.goTo({
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
    });*/
  }

  seleccionElemento(oid: any, capaId: any) {
    console.log("Seleccionar elemento", oid, capaId, this.layers);
    const capaBusqueda = this.layers?.filter(
      (f: any) => f.datos.id == capaId
    )[0];

    const query = capaBusqueda.capa.createQuery();
    query.where = "OBJECTID = " + oid;
    query.outFields = ["*"];
    query.returnGeometry = true;
    // query.returnCentroid = true;

    capaBusqueda.capa
      .queryFeatures(query)
      .then((result: any) => {
        console.log("resultado seleccion elementos", result);
        if (result.features.length > 0) {
          this.centrar(result.features[0].geometry);

          if (this.highlight) {
            (this.highlight as any).remove();
          }

          this.highlight = capaBusqueda.view.highlight(
            result.features.map((f: any) => f.attributes.OBJECTID)
          );
        }
      })
      .catch((error: any) => {
        console.error("Error al consultar el servicio:", error);
      });
  }

  consultarPlanoteca(long:any, lat:any): any {
    let planoteca = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.urlPlanoteca
    });

    const point = new Point({
      x: long,
      y: lat,
      spatialReference: SpatialReference.WGS84
    });


    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.geometry = point; // Establecer una condición opcional para filtrar los resultados
    query.spatialRelationship =  "intersects"; 
    query.returnGeometry = false;
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        // Manipular los resultados obtenidos
        const features = result.features;
        // Realizar acciones con los datos devueltos

        if (features.length > 0) {
          planoteca = features.map((m: any) => m.attributes)[0];
        }
        return planoteca;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarExtentPlanoteca (llavePlano:any): any {
    // Crear un FeatureLayer con la URL del servicio de tabla
    const layer = new FeatureLayer({
      url: environment.urlPlanoteca
    });

    // Consultar la tabla y obtener los resultados
    let query = layer.createQuery();


    query.where = "LLAVE_PLANO = '"+llavePlano+"'"; // Establecer una condición opcional para filtrar los resultados
    query.returnGeometry = false; // Especificar los campos que deseas obtener (en este caso, todos)
    query.outSpatialReference = SpatialReference.WebMercator; // Especificar los campos que deseas obtener (en este caso, todos)
    return layer
      .queryExtent(query)
      .then((result: any) => {
        console.log ("resultado consulta extent", result);
        // Manipular los resultados obtenidos
        const extent = result.extent;
        // Realizar acciones con los datos devueltos

        
        return extent;
      })
      .catch((error: any) => {
        // Manejar cualquier error ocurrido durante la consulta
        console.error("Error al consultar la tabla:", error);
        return [];
      });
  }

  consultarImagenPlanoteca (extent:any, llavePlano:any): Promise<any>{
    //const urlSearchParams = new URLSearchParams();

    

    const options: any = {
      body: this.jsonToFormData({
        bbox: `${extent.xmin},${extent.ymin},${extent.xmax},${extent.ymax}`,
        bboxSR: '102100',
        layerDefs: JSON.stringify({"1":"LLAVE_PLANO = '"+llavePlano+"'","2":"LLAVE_PLANO = '"+llavePlano+"'","3":"LLAVE_PLANO = '"+llavePlano+"'","5":"LLAVE_PLANO = '"+llavePlano+"'","7":"LLAVE_PLANO = '"+llavePlano+"'","8":"LLAVE_PLANO = '"+llavePlano+"'","9":"LLAVE_PLANO = '"+llavePlano+"'","10":"LLAVE_PLANO = '"+llavePlano+"'","11":"LLAVE_PLANO = '"+llavePlano+"'","12":"LLAVE_PLANO = '"+llavePlano+"'","13":"LLAVE_PLANO = '"+llavePlano+"'","15":"LLAVE_PLANO = '"+llavePlano+"'","17":"LLAVE_PLANO = '"+llavePlano+"'","19":"LLAVE_PLANO = '"+llavePlano+"'","20":"LLAVE_PLANO = '"+llavePlano+"'","21":"LLAVE_PLANO = '"+llavePlano+"'","22":"LLAVE_PLANO = '"+llavePlano+"'","24":"LLAVE_PLANO = '"+llavePlano+"'","25":"LLAVE_PLANO = '"+llavePlano+"'","26":"LLAVE_PLANO = '"+llavePlano+"'","27":"LLAVE_PLANO = '"+llavePlano+"'","28":"LLAVE_PLANO = '"+llavePlano+"'","29":"LLAVE_PLANO = '"+llavePlano+"'","31":"LLAVE_PLANO = '"+llavePlano+"'","32":"LLAVE_PLANO = '"+llavePlano+"'","33":"LLAVE_PLANO = '"+llavePlano+"'","34":"LLAVE_PLANO = '"+llavePlano+"'","35":"LLAVE_PLANO = '"+llavePlano+"'","36":"LLAVE_PLANO = '"+llavePlano+"'","37":"LLAVE_PLANO = '"+llavePlano+"'","39":"LLAVE_PLANO = '"+llavePlano+"'","40":"LLAVE_PLANO = '"+llavePlano+"'","41":"LLAVE_PLANO = '"+llavePlano+"'","43":"LLAVE_PLANO = '"+llavePlano+"'","44":"LLAVE_PLANO = '"+llavePlano+"'","45":"LLAVE_PLANO = '"+llavePlano+"'","46":"LLAVE_PLANO = '"+llavePlano+"'","47":"LLAVE_PLANO = '"+llavePlano+"'","48":"LLAVE_PLANO = '"+llavePlano+"'","49":"LLAVE_PLANO = '"+llavePlano+"'","51":"LLAVE_PLANO = '"+llavePlano+"'","53":"LLAVE_PLANO = '"+llavePlano+"'","54":"LLAVE_PLANO = '"+llavePlano+"'","55":"LLAVE_PLANO = '"+llavePlano+"'"}),
        size: '800,600',
        format: 'png8',
        transparent: 'true',
        dpi: '96',
        f: "pjson"
      }),
      method: "post",
      responseType : "json"
    };

    return esriRequest(environment.urlCapasPlanoteca, options);
  }

  jsonToFormData(json: { [key: string]: any }): FormData {
    const formData = new FormData();
     
    for (const key in json) {
    if (json.hasOwnProperty(key)) {
          formData.append(key, json[key]);
        }
      }
     
      return formData;
    }
}
