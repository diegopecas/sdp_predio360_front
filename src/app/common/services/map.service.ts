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
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

import { RenderedSymbols } from "../symbols/rendered-symbols";

@Injectable({
  providedIn: "root",
})
export class MapService {
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
  tipoSeleccion = "predios"; // 1 = 'predio', N = 'predios', Identify = 'Identify'

  views: any = {
    sceneView: null,
    mapView: null,
    activeView: null,
    actual: "3D",
    container: null,
  };

  constructor() {}

  public initDefaultMap(mapElementRef?: ElementRef): void {
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
    this.agregarListaCapas();
    this.agregarLeyenda();
    this.agregarBusquedas();
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
    environment.capasBase.forEach((capa) => {
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
            // this.layers?.push({ capa: featureLayerArbol, datos: capa });
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

  agregarListaCapas() {
    const layerList = new LayerList({
      view: this.views.activeView,
    });

    const bgExpand = new Expand({
      view: this.views.activeView,
      content: layerList,
    });

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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    query.outFields = ["OBJECTID,GN_CODIGO_LOTE,GN_DIRECCION"];
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
    switch (this.tipoSeleccion) {
      case "predio":
        this.centrar(point.mapPoint);
        const capa1 = this.layers?.filter(
          (f: any) => f.datos.busquedaBufferPredio
        )[0];
        this.seleccionarPredioByBuffer(capa1, point, true);
        break;
      case "predios":
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

  _clicEnMapa(point: any) {
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
  }

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

    const simboloBloque = capa.formato.simbolo == "bloque-parque" ? 
    new RenderedSymbols().construirBloqueConstante(
      0.4,
      "rgb(0, 255, 0)"
    ) : new RenderedSymbols().construirBloqueConstante(
      2.4,
      "rgb(50, 50, 50)"
    );

    if (capa.formato?.dimensiones == 3) {
      switch (capa.formato?.simbolo) {
        case "bloque":
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            renderer: simboloBloque,
            outFields: ["*"],
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
        default:
          this.bufferLayer = new FeatureLayer({
            url: capa.url,
            id: "Capa buffer",
            title: capa.nombre,
            outFields: ["*"],
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
    if (capaAux) {
      this.agregarCapaBufferAfterView(capaAux);
    }
  }

  consultarProyectos():any {
    let datosGaleria = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.capaGaleria.url,
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = "1=1"; // Establecer una condición opcional para filtrar los resultados
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

  consultarLicencias(predio:any):any {
    let datosLicencias = [] as any[];
    // Crear un FeatureLayer con la URL del servicio de tabla
    const featureLayer = new FeatureLayer({
      url: environment.capaDatosUrbanisticos.url,
    });

    // Consultar la tabla y obtener los resultados
    const query = featureLayer.createQuery();
    query.where = environment.capaDatosUrbanisticos.filterPredio+" like '"+predio+"'"; // Establecer una condición opcional para filtrar los resultados
    query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

    return featureLayer
      .queryFeatures(query)
      .then((result: any) => {
        console.log("resultado de licencias", result)
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


}
