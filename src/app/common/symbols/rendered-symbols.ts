import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import Renderer from "@arcgis/core/renderers/Renderer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import Color from "@arcgis/core/Color";

export class RenderedSymbols {
  public selectedBuild3D = {
    type: "simple",
    symbol: {
      type: "polygon-3d", // autocasts as new PolygonSymbol3D()
      symbolLayers: [
        {
          type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
          material: {
            color: [3, 255, 255, 1],
          },
          edges: {
            type: "solid", // autocasts as new SolidEdges3D()
            color: [0, 0, 0, 1],
          },
          anchor: "relative-to-ground",
        },
      ],
    },
    visualVariables: [
      {
        type: "size",
        valueUnit: "meters",
        valueExpression: "return Abs(Number($feature.NUMERO_PISOS)) * 2.4;",
      },
    ],
  };

  public build3D = {
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
            value: 40,
            color: [153, 83, 41],
            label: "80 o más pisos",
          },
        ],
      },
    ],
  };

  public construirArbol(atributoAltura:any): Renderer {
    const webStyleSymbol = new WebStyleSymbol({
      name: "Pinus",
      styleName: "EsriRealisticTreesStyle",
    });

    const renderer:any = {
      type: "simple",
      symbol: webStyleSymbol,
      visualVariables: [
        {
          type: "size",
          field: atributoAltura,
          axis: "height",
        },
        {
          type: "rotation",
          valueExpression: "random() * 360",
        },
      ],
    };

    return renderer;
  }

  public construirBloque(atributoAltura:any, factor:any, color:any): Renderer {
    const renderer:any = {
      type: "simple",
      symbol: {
        type: "polygon-3d", // autocasts as new PolygonSymbol3D()
        symbolLayers: [
          {
            type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
            material: {
              color: new Color(color),
            },
            edges: {
              type: "solid", // autocasts as new SolidEdges3D()
              color: [0, 0, 0, 1],
            },
            anchor: "relative-to-ground",
          },
        ],
      },
      visualVariables: [
        {
          type: "size",
          valueUnit: "meters",
          valueExpression: "return Abs(Number($feature."+atributoAltura+")) * "+factor+";",
        },
      ],
    };

    return renderer;
  }

  public construirBloqueConstante(factor:any, color:any): Renderer {
    const renderer:any = {
      type: "simple",
      symbol: {
        type: "polygon-3d", // autocasts as new PolygonSymbol3D()
        symbolLayers: [
          {
            type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
            material: {
              color: new Color(color),
            },
            edges: {
              type: "solid", // autocasts as new SolidEdges3D()
              color: [0, 0, 0, 1],
            },
            anchor: "relative-to-ground",
          },
        ],
      },
      visualVariables: [
        {
          type: "size",
          valueUnit: "meters",
          valueExpression: "return "+factor+";",
        },
      ],
    };

    return renderer;
  }
}
