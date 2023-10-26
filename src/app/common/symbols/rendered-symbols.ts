export class RenderedSymbols {
  public selectedBuild3D = {
    type: "polygon-3d", // autocasts as new PolygonSymbol3D()
    symbolLayers: [
      {
        type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
        material: {
          color: [244, 247, 134],
        },
        edges: {
          type: "solid", // autocasts as new SolidEdges3D()
          color: [50, 50, 50, 0.5],
        },
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
}
