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

import { RenderedSymbols } from "../symbols/rendered-symbols";

@Injectable({
  providedIn: "root",
})
export class MapService {
  map?: Map;
  sceneView?: SceneView;
  layers?: any[] = [];
  buffer = {
    consulta: false,
    tipo: "",
    medida: 0,
  };
  elementosSeleccionados = [] as any[];
  puntoClickeado: any;
  highlight = null;

  constructor() {}

  public initDefaultMap(mapElementRef?: ElementRef): void {
    // config.assetsPath = 'assets/';
    config.apiKey = environment.esriConfigApiKey;

    this.map = new Map({
      basemap: environment.baseConfigs.basemapId,
      ground: "world-elevation",
    });

    this.sceneView = new SceneView({
      map: this.map,
      container: mapElementRef?.nativeElement,
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

    this.sceneView.on("click", (event: any) => {
      // this.valorPuntoClick = event;
      // this.clickEnVista(event, Graphic);
      console.log("clic sobre el mapa", event);
      this.puntoClickeado = event.mapPoint;
      this.clicEnMapa(event);
    });

    this.agregarCapasBase();
    this.agregarListaCapas();
    this.agregarLeyenda();
    this.agregarBusquedas();
  }

  agregarCapasBase() {
    environment.capasBase.forEach((capa) => {
      if (capa.tipo == "3D") {
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
            });
            this.map?.add(featureLayerBloque);

            this.sceneView
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
        this.sceneView?.whenLayerView(featureLayer).then((layerView: any) => {
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
      view: this.sceneView,
    });

    const bgExpand = new Expand({
      view: this.sceneView,
      content: layerList,
    });

    this.sceneView?.ui.add(bgExpand, "bottom-right");
  }

  agregarLeyenda() {
    const legend = new Legend({
      view: this.sceneView,
      style: "card",
    });

    const bgExpand = new Expand({
      view: this.sceneView,
      content: legend,
    });

    this.sceneView?.ui.add(bgExpand, "bottom-right");
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

  /*public async zoomToLayerExtent(layer: FeatureLayer): Promise<void> {
    this.mapView?.goTo(await layer.queryExtent());
  }*/

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

  seleccionarPredioByBuffer(capaBusqueda: any, point: any) {
    let capa = capaBusqueda.capa;
    const query = capa.createQuery();
    query.where = "1=1";
    query.outFields = ["CODIGO_LOTE, OBJECTID"];
    query.returnGeometry = true;
    query.distance = this.buffer.medida;
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
    if (this.buffer.consulta) {
      switch (this.buffer.tipo) {
        case "predio":
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
    this.sceneView?.goTo(
      { target: centroide, zoom: 19 },
      {
        speedFactor: 0.5,
      }
    );
  }
}
