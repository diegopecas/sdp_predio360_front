export const environment = {
  production: false,
  auth: {
    usuario: "admin",
    clave: "123456"
  },
  esriConfigApiKey:
    "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj",
  textoEncuesta: "Queremos seguir mejorando la solución de Predio360, con tu ayuda lo podremos lograr, te invitamos a participar de la lluvia de ideas y necesidades en la siguiente encuesta.",  
  baseConfigs: {
    basemapId: "streets-vector",
    ground: "world-elevation",
    center: {
      latitud: 4.618554114844545,
      longitud: -74.08188893966589,
      altitud: 4000,
    },
    zoomLevel: 17,
  },
  capasPrecargadas: [
    {
      id: 'pre-localidades',
      label: 'Localidades',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/SERVICIOS_GEOGRAFICOS/DIVISION_FISICA/MapServer/4',
      tipo: 'rest',
      fields: ["OBJECTID", "NOMBRE"],
      popup: "<b>ID Objeto:</b> {OBJECTID}<br/><b>Nombre localidad:</b> {NOMBRE}"
    },
    {
      id: 'pre-actuaciones',
      label: 'Capa Actuaciones estratégicas',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/NORMA_URBAN%C3%8DSTICA_Y_OT/FeatureServer/32',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
    {
      id: 'pre-manzanas-cuidado',
      label: 'Manzanas del cuidado',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/Sistema_del_cuidado_y_servicios_sociales/FeatureServer/11',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
    {
      id: 'pre-upl',
      label: 'UPL',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/NORMA_URBAN%C3%8DSTICA_Y_OT/FeatureServer/28',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
    {
      id: 'pre-planes-parciales',
      label: 'Planes parciales de desarrollo y renovación urbana',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/NORMA_URBAN%C3%8DSTICA_Y_OT/FeatureServer/26',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
    {
      id: 'pre-areas-integracion-multi',
      label: 'Áreas de integración multimodal',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/ESTRUCTURA_SOCIOECON%C3%93MICA_CREATIVA_Y_DEL_CUIDADO/FeatureServer/28',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
    {
      id: 'pre-cluster-comercio-mas',
      label: 'Clúster de comercio masivo',
      url: 'https://serviciosg.sdp.gov.co/server/rest/services/POT555/ESTRUCTURA_SOCIOECON%C3%93MICA_CREATIVA_Y_DEL_CUIDADO/FeatureServer/9',
      tipo: 'rest',
      fields: ["OBJECTID"],
      popup: "<b>ID Objeto:</b> {OBJECTID}"
    },
  ],
  capasBase: [
    {
      id: "construcciones",
      nombre: "construcciones",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/0",
      tipo: "3D",
      altura: "NUMERO_PISOS",
      factor: 2.4,
      simbolo: "bloque",
      color: "rgb(248, 136, 99)",
      busqueda: {
        searchFields: ["CODIGO_LOTE", "CODIGO_PREDIO"],
        displayField: "CODIGO_CONSTRUCCION",
        placeholder: "Buscar construcción",
      },
      busquedaBufferPredio: true,
    },
    {
      id: "arbolado",
      nombre: "arbolado",
      url: "https://geoportal.jbb.gov.co/agc/rest/services/SIGAU/CensoArbol/MapServer/0",
      tipo: "3D",
      altura: "Altura_Total",
      factor: 1,
      simbolo: "arbol",
      color: "rgb(1, 90, 0)",
      busquedaBufferPredio: false,
    },
    {
      id: "parques",
      nombre: "parques",
      url: "https://visorsrv.idrd.gov.co/srv/rest/services/Parques_IDRD_Publicos/ServiciosIDRD_Publico/FeatureServer/12",
      tipo: "3D",
      altura: "",
      factor: 0.2,
      simbolo: "bloque",
      color: "rgb(136, 166, 94)",
      busquedaBufferPredio: false,
    },
    {
      id: "galeria",
      nombre: "galería inmobiliaria",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/6",
      tipo: "3D",
      altura: "",
      factor: 20,
      simbolo: "grua",
      color: "rgb(136, 166, 94)",
      busquedaBufferPredio: false,
    },
  ],

  urlServicioPredios:
    "https://services8.arcgis.com/2gedZBw4OrdjULOA/arcgis/rest/services/construccion_predio_360/FeatureServer/0",
  // urlServicioPredios:
  //  "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/0",
  urlServicioGaleria:
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/6",
  urlTablaPredios:
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
  urlLoteCatastral:
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/4",
  urlConstruccion:
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/4",
  urlFichaProyecto:
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/8",
  urlPlanoteca:
    "https://sinupot.sdp.gov.co/serverr/rest/services/Planoteca/ConsultasPUT/MapServer/0",
  urlCapasPlanoteca:
    "https://sinupot.sdp.gov.co/serverr/rest/services/Planoteca/CapasPUT/MapServer/export",
  urlSinupot: "https://sinupot.sdp.gov.co/serverp/rest/services/",
  capaArbolado: {
    url: "https://geoportal.jbb.gov.co/agc/rest/services/SIGAU/CensoArbol/MapServer/0",
  },
  capaParques: {
    url: "https://visorsrv.idrd.gov.co/srv/rest/services/Parques_IDRD_Publicos/ServiciosIDRD_Publico/FeatureServer/12",
  },
  capaConsultaClick: {
    url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/4",
    /*url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/0",*/
    id: "CODIGO_LOTE",
  },
  capaSitiosInteres: {
    url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/1",
  },
  capaConsultaPredio: {
    porLote: {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      atributo: "GN_CODIGO_LOTE",
    },
    porDireccion: {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      atributo: "GN_DIRECCION",
    },
    porMatricula: {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      atributo: "GN_MATRICULA_INMOBILIARIA",
    },
    porChip: {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      atributo: "GN_CHIP",
    },
    porCedula: {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      atributo: "GN_CEDULA_CATASTRAL",
    },
  },
  capasSinupot: [
    {
      nombre: "localidades",
      url: "https://sinupot.sdp.gov.co/serverp/rest/services/Consultas/MapServer/5",
    },
    {
      nombre: "UPZ",
      url: "https://sinupot.sdp.gov.co/serverp/rest/services/Consultas/MapServer/4",
    },
    {
      nombre: "UPL",
      url: "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/NORMA_URBAN%C3%8DSTICA_Y_OT/MapServer/27",
    },
  ],
  panelesResultados: [
    {
      id: "DG",
      nombre: "Datos generales del predio",
      visible: true,
    },
    {
      id: "LC",
      nombre: "Información De Localización",
      visible: true,
    },
    {
      id: "US",
      nombre: "Información De Uso Actual",
      visible: true,
    },
    {
      id: "IF",
      nombre: "Información Física Del Lote",
      visible: true,
    },
    {
      id: "NR",
      nombre: "Información Normativa",
      visible: true,
    },
    {
      id: "EC",
      nombre: "Información Económica",
      visible: true,
    },
    {
      id: "SB",
      nombre: "Información de hogares Sisbén",
      visible: true,
    },
    /*{
      id: "UB",
      nombre: "Información urbanística UPZ",
      visible: true
    },*/
  ],
  panelesIndicadores: [
    {
      nombre: "Estructura socioeconómica",
      icono: "",
      id: "I-ES",
    },
  ],
  serviciosInterception: [
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/0",
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/4",
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/6",
    "https://serviciosg.sdp.gov.co/server/rest/services/POT555/Sistema_del_cuidado_y_servicios_sociales/MapServer/8",
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/2",
    "https://gis.transmilenio.gov.co/arcgis/rest/services/Troncal/consulta_esquemas_estaciones/FeatureServer/0",
    "https://serviciosg.sdp.gov.co/server/rest/services/POT555/ESTRUCTURA_INTEGRADORES_DE_PATRIMONIO/FeatureServer/37",
    "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/ESTRUCTURA_FUNCIONAL_Y_DEL_CUIDADO/MapServer/171",
    "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/ESTRUCTURA_FUNCIONAL_Y_DEL_CUIDADO/MapServer/185",
    "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/1"
  ],
  serviciosResultados: [
    {
      // url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/arcgis/rest/services/construccion_predio_360/FeatureServer/0",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/0",
      id: "construccion",
      name: "Construcción",
      filter: ["CODIGO_LOTE", "GN_CODIGO_LOTE"],
      atributos: [
        {
          name: "OBJECTID",
          alias: "OBJECTID",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "CODIGO_CONSTRUCCION",
          alias: "Código Construcción",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "CODIGO_LOTE",
          alias: "Código Lote",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "CODIGO_BARRIO",
          alias: "Código Barrio",
          panel: "LC",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "CODIGO_MANZANA",
          alias: "Código Manzana",
          panel: "LC",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "CODIGO_PREDIO",
          alias: "Código Predio",
          panel: "LC",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        /*{
          name: "NUMERO_PISOS",
          alias: "Número Pisos",
          panel: "IF",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SEMISOTANO",
          alias: "Tiene Semisotano",
          panel: "IF",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NUMERO_SOTANOS",
          alias: "Número Sotanos",
          panel: "IF",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },*/
        {
          name: "ESCALA_CAPTURA",
          alias: "Escala Captura",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FECHA_CAPTURA",
          alias: "Fecha Actualización",
          panel: "",
          formato: {
            tipo: "fecha",
            estilo: "'dd/MM/yyyy'",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "RESPONSABLE",
          alias: "Responsable",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
      ],
    },
    {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/4",
      id: "lote_catastral",
      name: "Lote Catastral",
      filter: ["GN_CODIGO_LOTE", "GN_CODIGO_LOTE"],
      atributos: [
        {
          name: "OBJECTID",
          alias: "OBJECTID",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_CODIGO_LOTE",
          alias: "Código Lote",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_SECTOR_CONSOLIDADO",
          alias: "Sector",
          panel: "NR",
          orden: 9,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA_CONSTRUIDA",
          alias: "Área Construida del Lote m<sup>2</sup>",
          panel: "IF",
          orden: 3,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA_TERRENO",
          alias: "Área de terreno de la unidad predial",
          panel: "",
          orden: 2,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_INDICE_CONSTRUCCION",
          alias: "Índice de Construcción",
          panel: "IF",
          orden: 5,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: "",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_INDICE_OCUPACION",
          alias: "Índice de Ocupación",
          panel: "IF",
          orden: 6,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_SEMISOTANO",
          alias: "Tiene Semisotano",
          panel: "IF",
          orden: 8,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AREA_ACTIVIDAD",
          alias: "Área de Actividad",
          panel: "NR",
          orden: 5,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AREA_ELEV_MAXIMA_ALTURA",
          alias: "Elevación cota máxima en altura",
          panel: "NR",
          orden: 24,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "msnm",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AREA_ELEV_MAXIMA_ELEVACION",
          alias: "Área de Elevación Máxima: Elevación",
          panel: "NR",
          orden: 25,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "m",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_AREA_INFLUENCIA_COTA5_AI",
          alias: "Área de influencia cota 64 aeropuerto",
          panel: "NR",
          orden: 21,
          formato: {
            tipo: "boolean",
            valorSi: 1,
            labelSi: "Sí",
            labelNo: "No",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_INCLUENCIA_INDIRECTA_AID",
          alias: "Área de influencia indirecta aeropuerto",
          panel: "",
          orden: 22,
          formato: {
            tipo: "boolean",
            valorSi: 1,
            labelSi: "Sí",
            labelNo: "No",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_MANZANA_COMERCIAL",
          alias: "Está en Manzana Comercial",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        /*{
          name: "NR_ES_RANGO_EDIFI_DESAROLLO",
          alias: "Está en Rango Edificabilidad en Desarrollo",
          panel: "NR",
          orden: 4,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },*/
        {
          name: "NR_ES_SEC_INCOMPA_USO_RESI",
          alias: "Incompatibilidad con el uso residencial",
          panel: "NR",
          orden: 7,
          formato: {
            tipo: "boolean",
            valorSi: 1,
            labelSi: "Sí",
            labelNo: "No",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_BARRIO_SECTOR_USO_RESIDEN",
          alias: "Sector de uso residencial",
          panel: "NR",
          orden: 6,
          formato: {
            tipo: "boolean",
            valorSi: 1,
            labelSi: "Sí",
            labelNo: "No",
            mostrarSinInformacion: "S",
          },
        },
        /*{
          name: "NR_RANGO_EDIFI_DESAROLLO",
          alias: "Rango de edificabilidad en Tratamiento de Desarrollo Urbano",
          panel: "NR",
          orden: 4,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },*/
        {
          name: "NR_ES_SECTOR_USO_RESIDENCIAL",
          alias: "Está en Sector Uso Residencial",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_ZONA_INFLUENCIA_AEROPUER",
          alias: "Zona de influencia aeropuerto",
          panel: "",
          orden: 23,
          formato: {
            tipo: "boolean",
            valorSi: 1,
            labelSi: "Sí",
            labelNo: "No",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ESTUC_ECO_PRIN_CATEGORIA",
          alias: "Categoría de la Estructura Ecológica Principal",
          panel: "NR",
          orden: 33,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ESTUC_ECO_PRIN_COMPONENTE",
          alias: "Componente de la Estructura Ecológica Principal",
          panel: "NR",
          orden: 32,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ESTUC_ECO_PRIN_ELEMENTO",
          alias: "Elemento de la Estructura Ecológica Principal",
          panel: "NR",
          orden: 34,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ESTUC_ECO_PRIN_NOMBRE",
          alias: "Nombre Total de la Estructura Ecológica Principal",
          panel: "NR",
          orden: 35,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AME_AVENIDA_TORRENCI_URB",
          alias: "Nivel de amenaza avenida torrencial",
          panel: "NR",
          orden: 37,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AME_INUNDA_ENCHAR",
          alias: "Nivel de amenaza avenida encharcamiento",
          panel: "NR",
          orden: 40,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AME_INUNDA_ROMPI_JARILL",
          alias: "Nivel de amenaza rompimiento jarillón",
          panel: "NR",
          orden: 41,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AME_MOVIM_MASA_URBANO",
          alias: "Nivel de amenaza remoción en masa",
          panel: "NR",
          orden: 42,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_SUELO_PROTECC_RIESGO",
          alias: "Suelo de protección por riesgo",
          panel: "NR",
          orden: 36,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_BIEN_INTERES_CULT",
          alias: "Bien de Interés Cultural",
          panel: "NR",
          orden: 26,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_SEC_INTERES_URBANI_NOMBRE",
          alias: "Nombre sectores interés urbanístico",
          panel: "NR",
          orden: 28,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_SEC_INTERES_URBANI_MODALI",
          alias: "Modalidad sectores interés urbanístico",
          panel: "NR",
          orden: 29,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        /*{
          name: "NR_PLAN_ESPE_MAN_PROTEC_NOMBRE",
          alias: "Nombre Plan Especial de Manejo y Protección Ambiental",
          panel: "NR",
          orden: 30,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_PLAN_ESPE_MAN_PROTE_ACT_ADM",
          alias: "Acto Administrativo Plan Especial de Manejo y protección ",
          panel: "NR",
          orden: 31,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },*/
        /*{
          name: "NR_CENTRO_HIS_PEMP_ACT_ADMIN",
          alias: "Nombre del Plan Especial de Manejo y Protección Patrimonial",
          panel: "NR",
          orden: 27,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },*/
        {
          name: "NR_AREA_DESARR_NARANJA",
          alias: "Área de Desarrollo Naranja",
          panel: "NR",
          orden: 16,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AREA_INTE_MULTIMODAL",
          alias: "Área de Integración Multimodal",
          panel: "NR",
          orden: 17,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_FRENTE_VIA_CLASIFICACION",
          alias: "Localización frente a vía",
          panel: "NR",
          orden: 18,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_FRENTE_VIA_ESTADO_CONSTR",
          alias: "Estado construcción frente a vía",
          panel: "NR",
          orden: 19,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_FRENTE_VIA_NOMBRE_VIA",
          alias: "Nombre de la vía",
          panel: "NR",
          orden: 20,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADM_NRO",
          alias: "Número Acto Administrativo del Plan Parcial",
          panel: "NR",
          orden: 14,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "N",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADMTIVO",
          alias: "Acto Administrativo del Plan Parcial",
          panel: "NR",
          orden: 13,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "N",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_NOMBRE",
          alias: "Nombre del Plan Parcial",
          panel: "NR",
          orden: 10,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_TIPO",
          alias: "Tipo del Plan Parcial",
          panel: "NR",
          orden: 11,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_TRAT_URBAN_ALTURA_MAXIMA",
          alias: "Altura Máxima por Tratamiento Urbanístico",
          panel: "NR",
          orden: 3,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_TRAT_URBAN_NOMBRE",
          alias: "Nombre del Tratamiento Urbanístico",
          panel: "NR",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO",
          alias: "Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO_FECH",
          alias:
            "Fecha Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO_NUM",
          alias:
            "Número Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PT_CODIGO_DESARROLLO",
          alias: "Código del Desarrollo del Plano Topográfico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PT_NOMBRE_DESARROLLO",
          alias: "Nombre del Desarrollo del Plano Topográfico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO",
          alias: "Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO_FECH",
          alias:
            "Fecha Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO_NUM",
          alias:
            "Número Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PU_CODIGO_DESARROLLO",
          alias: "Código del Desarrollo del Plano Urbanístico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_PU_NOMBRE_DESARROLLO",
          alias: "Nombre del Desarrollo del Plano Urbanístico",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_LOCALIDAD",
          alias: "Localidad",
          panel: "LC",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_UNI_PLANEMIENTO_LOCAL",
          alias: "Unidad de Planeamiento Local (UPL)",
          panel: "LC",
          orden: 2,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_SECTOR_CATASTRAL",
          alias: "Sector Catastral",
          panel: "LC",
          orden: 3,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_DIRECCION",
          alias: "Dirección Lote",
          panel: "",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_NUMERO_PISOS",
          alias: "Número Pisos",
          panel: "IF",
          orden: 9,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_NUMERO_SOTANOS",
          alias: "Número Sotanos",
          panel: "IF",
          orden: 7,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_UNIDAD_PREDIAL",
          alias: "Unidades Prediales",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_REFERENCIA_SUELO",
          alias: "Valor de referencia del sueli",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA",
          alias: "Área del lote",
          panel: "IF",
          orden: 1,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_PROM",
          alias: "Puntación promedio de las construcciones",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_VETUSTEZ",
          alias: "Vetustez",
          panel: "IF",
          orden: 10,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_TRAT_URBAN_TIPOLOGIA",
          alias: "Tipología del Tratamiento Urbanístico",
          panel: "NR",
          orden: 2,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_SEGURIDAD_TIEM",
          alias: "PR_EQ_SEGURIDAD_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_SEGURIDAD_DIST",
          alias: "PR_EQ_SEGURIDAD_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_EDUCACION_TIEM",
          alias: "PR_EQ_EDUCACION_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_EDUCACION_DIST",
          alias: "PR_EQ_EDUCACION_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_ABASTECIMIENTO_TIEM",
          alias: "PR_EQ_ABASTECIMIENTO_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_ABASTECIMIENTO_DIST",
          alias: "PR_EQ_ABASTECIMIENTO_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_DEPORTIVO_TIEM",
          alias: "PR_EQ_DEPORTIVO_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_DEPORTIVO_DIST",
          alias: "PR_EQ_DEPORTIVO_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_EDUCACION_SUP_TIEM",
          alias: "PR_EQ_EDUCACION_SUP_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_EDUCACION_SUP_DIST",
          alias: "PR_EQ_EDUCACION_SUP_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_SALUD_TIEM",
          alias: "PR_EQ_SALUD_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_SALUD_DIST",
          alias: "PR_EQ_SALUD_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_BIENESTAR_TIEM",
          alias: "PR_EQ_BIENESTAR_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_BIENESTAR_DIST",
          alias: "PR_EQ_BIENESTAR_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_ADMINTIVO_TIEM",
          alias: "PR_EQ_ADMINTIVO_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_EQ_ADMINTIVO_DIST",
          alias: "PR_EQ_ADMINTIVO_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_PARQUE_ESTRUC_TIEM",
          alias: "PR_PARQUE_ESTRUC_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_PARQUE_ESTRUC_DIST",
          alias: "PR_PARQUE_ESTRUC_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_PARQUE_PROX_TIEM",
          alias: "PR_PARQUE_PROX_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_PARQUE_PROX_DIST",
          alias: "PR_PARQUE_PROX_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_ESTACION_TM_TIEM",
          alias: "PR_ESTACION_TM_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_ESTACION_TM_DIST",
          alias: "PR_ESTACION_TM_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_MANZANA_CIENCIA_TEC_TIEM",
          alias: "PR_MANZANA_CIENCIA_TEC_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_MANZANA_CIENCIA_TEC_DIST",
          alias: "PR_MANZANA_CIENCIA_TEC_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_CLUSTER_SALUD_TIEM",
          alias: "PR_CLUSTER_SALUD_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_CLUSTER_SALUD_DIST",
          alias: "PR_CLUSTER_SALUD_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_CORAZON_PROD_TIEM",
          alias: "PR_CORAZON_PROD_TIEM",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PR_CORAZON_PROD_DIST",
          alias: "PR_CORAZON_PROD_DIST",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADM_FECHA",
          alias: "Fecha Acto Administrativo del Plan Parcial",
          panel: "NR",
          orden: 15,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "N",
          },
        },
        {
          name: "NR_PLAN_PARCIAL_ESTADO",
          alias: "Estado del Plan Parcial",
          panel: "NR",
          orden: 12,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_AME_INCEN_FORES_URB",
          alias: "Nivel de amenaza incendio forestal",
          panel: "NR",
          orden: 38,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "LOTE.NR_AME_INUNDA_DESBOR",
          alias: "Nivel de amenaza desbordamiento",
          panel: "NR",
          orden: 39,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_ES_SUELO_PROTECC_RISGO",
          alias: "NR_ES_SUELO_PROTECC_RISGO",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SE_HOGARES_SISBEN_IV",
          alias: "Total hogares Sisbén IV",
          panel: "SB",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SE_HOGARES_SISBEN_POB_EXTREMA",
          alias: "Total hogares Sisbén en pobreza extrema",
          panel: "SB",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SE_HOGARES_SISBEN_POB_MODERADA",
          alias: "Total hogares Sisbén con pobreza moderada",
          panel: "SB",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SE_HOGARES_SISBEN_VULNERABLES",
          alias: "Total hogares Sisbén vulnerables",
          panel: "SB",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "SE_HOGARES_SISBEN_NO_POBRES",
          alias: "Total hogares Sisbén en no pobres",
          panel: "SB",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "NR_MANZANA_COMERCIAL_ACTO_ADM",
          alias: "Manzana comercial",
          panel: "NR",
          orden: 8,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
      ],
    },
    {
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/3",
      id: "predio",
      name: "Predio",
      filter: ["OBJECTID", "OBJECTID"],
      atributos: [
        {
          name: "OBJECTID",
          alias: "OBJECTID",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_CODIGO_LOTE",
          alias: "Código del lote",
          panel: "DG",
          orden: 4,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_AVALUO",
          alias: "Avalúo",
          panel: "EC",
          orden: 6,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_ARRIENDO",
          alias: "Valor de Arriendo",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_M2_CONSTRUCCION",
          alias: "Valor m<sup>2</sup> Construcción",
          panel: "EC",
          orden: 3,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_M2_TERRENO",
          alias: "Valor m<sup>2</sup> Terreno",
          panel: "EC",
          orden: 2,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_REFERENCIA_SUELO",
          alias: "Valor de Referencia del Suelo m<sup>2</sup>",
          panel: "EC",
          orden: 1,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_TOTAL_CONSTRUCCION",
          alias: "Valor Total de Construcción",
          panel: "EC",
          orden: 5,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_VALOR_TOTAL_TERRENO",
          alias: "Valor Total de Terreno",
          panel: "EC",
          orden: 4,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "$ ",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FECHA_ACTUALIZACION",
          alias: "Fecha Actualización",
          panel: "",
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FECHA_CAPTURA",
          alias: "Fecha Captura",
          panel: "",
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FECHA_INCORPORACION",
          alias: "Fecha Incorporación",
          panel: "",
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA_CONSTRUIDA",
          alias: "Área Construida del predio m<sup>2</sup>",
          panel: "IF",
          orden: 4,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA_TERRENO",
          alias: "Área de Terreno del predio",
          panel: "IF",
          orden: 2,
          formato: {
            tipo: "numero",
            decimales: 2,
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_ACA_CONS",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_ARMAZON",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_BANO_CONS",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_BANO_ENCHAPE",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_BANO_MOBILIARIO",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_BANO_TAM",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_CERCHAS",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_COCI_CONS",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_COCI_ENCHAPE",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_COCI_MOBILIARIO",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_COCI_TAM",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_CONSERVACION",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_CUBIERTA",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_CUBRIMIENTO",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_FACHADA",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_MUROS",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_PISOS",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_PUNT_CONST_PROM",
          alias: "Puntaje Total de Construcción",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_COMERCIAL",
          alias: "Área en uso comercial",
          panel: "US",
          orden: 4,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_DOTACIONAL",
          alias: "Área en uso dotacional",
          panel: "US",
          orden: 7,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_INDUSTRIA",
          alias: "Área en uso industria",
          panel: "US",
          orden: 6,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_NO_URB",
          alias: "Área en uso no urbano",
          panel: "US",
          orden: 8,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_PH",
          alias: "Área en uso actividad conexa a PH",
          panel: "US",
          orden: 2,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_RESIDENCIAL",
          alias: "Área en uso residencial",
          panel: "US",
          orden: 3,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_AREA_USO_SERVICIOS",
          alias: "Área en uso servicios",
          panel: "US",
          orden: 5,
          formato: {
            tipo: "numero",
            decimales: "2",
            pre: "",
            post: " m<sup>2</sup>",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_CEDULA_CATASTRAL",
          alias: "Cédula Catastral",
          panel: "DG",
          orden: 4,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_CHIP",
          alias: "CHIP",
          panel: "DG",
          orden: 2,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_CLASE_PREDIO",
          alias: "Clase de predio",
          panel: "US",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_DIRECCION",
          alias: "Dirección oficial",
          panel: "DG",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_FECHA_DOCUMENTO",
          alias: "Fecha de escritura",
          panel: "DG",
          orden: 7,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_MATRICULA_INMOBILIARIA",
          alias: "Matrícula Inmobiliaria",
          panel: "DG",
          orden: 3,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_NOTARIA",
          alias: "Notaria",
          panel: "DG",
          orden: 5,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_NUMERO_DOCUMENTO",
          alias: "Número de escritura",
          panel: "DG",
          orden: 6,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_PROPIETARIO_NOMBRE",
          alias: "Nombre del propietario",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_PROPIETARIO_NUM_DOC",
          alias: "Número de documento del propietario",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_PROPIETARIO_TIPO_DOC",
          alias: "Tipo documento del propietario",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "PREDIO",
          alias: "Predio",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "RESPONSABLE",
          alias: "Responsable",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_AA_FECHA_EJECUTORIA",
          alias: "Fecha Ejecutoria del Acto Administrativo",
          panel: "",
          orden: 0,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_AA_FECHA_EXPEDICION",
          alias: "Fecha de Expedición del Acto Administrativo",
          panel: "",
          orden: 0,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_AA_TIPO_DECISION",
          alias: "Tipo de Decisión del Acto Administrativo",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_ACTO_ADMNISTRATIVO",
          alias: "Acto Administrativo de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_DESC_LICENCIA",
          alias: "Descipción de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_FECHA_RADICACION",
          alias: "Fecha de Radicación de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "fecha",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_ID_EXPEDIENTE",
          alias: "Id. Expediente de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_MODALIDAD_TRAMITE",
          alias: "Modalidad del trámite de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_OBJ_TRAMITE",
          alias: "Objeto de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_LIC_TIPO_TRAMITE",
          alias: "Modalidad del trámite de la Licencia",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_SECTOR_NORMATIVO",
          alias: "Sector normativo", // "Decreto de la UPZ",
          panel: "UB",
          orden: 4,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_SUBSECTOR_EDIFICABILIDAD",
          alias: "Subsector edificabilidad", //"Decreto de la UPZ",
          panel: "UB",
          orden: 5,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_UPZ_CODIGO",
          alias: "Código de la UPZ",
          panel: "UB",
          orden: 1,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_UPZ_DECRETO",
          alias: "Decreto de la UPZ",
          panel: "UB",
          orden: 3,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "UB_UPZ_NOMBRE",
          alias: "Nombre de la UPZ",
          panel: "UB",
          orden: 2,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "ZONA_GEOECONOMICA",
          alias: "Zona Geoeconómica",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_ESTRATO",
          alias: "Estrato",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "GN_TIPO_PROPIEDAD",
          alias: "Tipo Propiedad",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_AREA",
          alias: "Área del Lote",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "EC_AVALUO_ANO",
          alias: "Año avalúo catastral",
          panel: "EC",
          orden: 6,
          formato: {
            tipo: "numero",
            decimales: 0,
            pre: "",
            post: "",
            sinInformacion: "0",
            mostrarSinInformacion: "S",
          },
        },
        {
          name: "FS_VETUSTEZ",
          alias: "Vetustez",
          panel: "",
          orden: 0,
          formato: {
            tipo: "texto",
            sinInformacion: "",
            mostrarSinInformacion: "S",
          },
        },
      ],
    },
  ],
  a_estadisticas: [
    {
      id: 1,
      categoria: "Equipamiento",
      imagen: "/assets/images/equipamiento.png",
      valores: [
        {
          nombre: "sub 1",
          valor: "129",
          imagen:
            "https://static.vecteezy.com/system/resources/previews/012/686/903/non_2x/statistics-icon-design-free-vector.jpg",
        },
        {
          nombre: "sub 2",
          valor: "13",
          imagen:
            "https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160704280/59599587-documento-comercial-con-icono-de-estad%C3%ADsticas-gr%C3%A1fico-de-ilustraci%C3%B3n-vectorial.jpg",
        },
      ],
    },
    {
      id: 2,
      categoria: "Parques",
      imagen: "/assets/images/parques.png",
      valores: [
        {
          nombre: "sub 3",
          valor: "129",
          imagen:
            "https://static.vecteezy.com/system/resources/previews/012/686/903/non_2x/statistics-icon-design-free-vector.jpg",
        },
        {
          nombre: "sub 4",
          valor: "13",
          imagen:
            "https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160704280/59599587-documento-comercial-con-icono-de-estad%C3%ADsticas-gr%C3%A1fico-de-ilustraci%C3%B3n-vectorial.jpg",
        },
      ],
    },
    {
      id: 3,
      categoria: "Transporte",
      imagen: "/assets/images/transporte.png",
      valores: [
        {
          nombre: "sub 3",
          valor: "129",
          imagen:
            "https://static.vecteezy.com/system/resources/previews/012/686/903/non_2x/statistics-icon-design-free-vector.jpg",
        },
        {
          nombre: "sub 4",
          valor: "13",
          imagen:
            "https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160704280/59599587-documento-comercial-con-icono-de-estad%C3%ADsticas-gr%C3%A1fico-de-ilustraci%C3%B3n-vectorial.jpg",
        },
      ],
    },
    {
      id: 4,
      categoria: "Centros económicos",
      imagen: "/assets/images/socioeco.png",
      valores: [
        {
          nombre: "sub 3",
          valor: "129",
          imagen:
            "https://static.vecteezy.com/system/resources/previews/012/686/903/non_2x/statistics-icon-design-free-vector.jpg",
        },
        {
          nombre: "sub 4",
          valor: "13",
          imagen:
            "https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160704280/59599587-documento-comercial-con-icono-de-estad%C3%ADsticas-gr%C3%A1fico-de-ilustraci%C3%B3n-vectorial.jpg",
        },
      ],
    },
  ],
  capaEstadisticas: {
    url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/9",
    campoConsulta: "CODIGO_LOTE",
    campos: [
      "OBJECTID",
      "NOMBRE_LUGAR",
      "CODIGO_LOTE",
      "TIPO_SERVICIO",
      "CODIGO_SERVICIO",
      "TIEMPO_CAMINANDO",
      "DISTANCIA_CAMINANDO",
    ],
    atributos: {
      nombre: "NOMBRE_LUGAR",
      tiempo: "TIEMPO_CAMINANDO",
      distancia: "DISTANCIA_CAMINANDO",
      imagenTiempo: "/assets/images/reloj.png",
      imagenDistancia: "/assets/images/caminar.png",
    },
  },
  estadisticas: [
    {
      id: 1,
      categoria: "Abastecimiento",
      categoriaLabel: "Abastecimiento",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 2,
      categoria: "Salud",
      categoriaLabel: "Salud",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 3,
      categoria: "Integracion",
      categoriaLabel: "Integración",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 4,
      categoria: "Estación transmilenio",
      categoriaLabel: "Estación transmilenio",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 5,
      categoria: "Servicios Administrativos",
      categoriaLabel: "Servicios administrativos",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 6,
      categoria: "Seguridad",
      categoriaLabel: "Seguridad",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 7,
      categoria: "Distrito Ciencia Tecnología e Innovación",
      categoriaLabel: "Distrito de ciencia, tecnología e innovación",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 8,
      categoria: "Corazones productivos",
      categoriaLabel: "Corazones productivos",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 9,
      categoria: "Cluster Salud",
      categoriaLabel: "Clúster salud",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 10,
      categoria: "Parque de Proximidad",
      categoriaLabel: "Parque de proximidad",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 11,
      categoria: "Educacion",
      categoriaLabel: "Educación",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 12,
      categoria: "Recreativos deportivos",
      categoriaLabel: "Recreativos deportivos",
      imagen: "/assets/images/socioeco.png",
    },
    {
      id: 13,
      categoria: "Parque Estructurante",
      categoriaLabel: "Parque estructurante",
      imagen: "/assets/images/socioeco.png",
    },
  ],
  capaDatosUrbanisticos: {
    url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/7",
    titulo: "Datos urbanísticos",
    labelSeleccion: "LIC_EXPEDIENTE",
    filterPredio: "CODIGO_LOTE",
    filterPot: "LIC_FECHA_RADICACION",
    atributos: [
      /*{
        name: "OBJECTID",
        alias: "OID",
        orden: 0,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },*/
      /*{
        name: "ID_EXPEDIENTE",
        alias: "ID Expediente",
        orden: 1,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },*/
      /*{
        name: "CODIGO_LOTE",
        alias: "Código lote",
        orden: 0,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },*/
      {
        name: "LIC_EXPEDIENTE",
        alias: "Expediente",
        orden: 0,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_FECHA_RADICACION",
        alias: "Fecha de radicación",
        orden: 1,
        formato: {
          tipo: "fecha",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_ACTO_ADM_FECHA_EXPED",
        alias: "Fecha expediente",
        orden: 1,
        formato: {
          tipo: "fecha",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_TIPO_TRAMITE",
        alias: "Tipo de trámite",
        orden: 2,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_OBJETO_TRAMITE",
        alias: "Objeto trámite",
        orden: 3,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_MODALIDAD_TRAMITE",
        alias: "Modalidad",
        orden: 4,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "DESCRIPCION_LICENCIA",
        alias: "Descripción licencia",
        orden: 5,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_ACTO_ADMINISTRATIVO",
        alias: "Acto administrativo",
        orden: 7,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_ACTO_ADM_FECHA_EJECU",
        alias: "Fecha ejecutoria",
        orden: 8,
        formato: {
          tipo: "fecha",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LIC_ACTO_ADM_TIPO_DECISI",
        alias: "Tipo de decisión",
        orden: 6,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      /*{
        name: "UPZ_NOMBRE",
        alias: "UPZ Nombre",
        orden: 6,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "UPZ_CODIGO",
        alias: "UPZ Código",
        orden: 5,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "UPZ_DECRETO",
        alias: "UPZ Decreto",
        orden: 7,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },*/
    ],
  },
  capasBuffer: [
    // proyectos inmobiliarios
    {
      nombre: "Proyectos inmobiliarios",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/6",
      outfields: ["*"],
      condicion: "activo like 'Si'",
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "grua",
      },
      atributos: {
        titulo: "Nombre: {NOM_PROYECTO}",
        contenido: [
          {
            fieldName: "CODIGO_PROYECTO",
            label: "Código proyecto",
          },
          {
            fieldName: "CONSTRUCTOR",
            label: "Constructor",
          },
          {
            fieldName: "DESCRIP_ULT_ET_LANZADA",
            label: "Descripción última etapa lanzada",
          },
          {
            fieldName: "DIRECCION",
            label: "Dirección",
          },
          {
            fieldName: "DISPONIBLES",
            label: "Disponibles",
          },
          {
            fieldName: "ESTRATO",
            label: "Estrato",
          },
          {
            fieldName: "TIPO_INMUEBLE",
            label: "Tipo inmueble",
          },
          {
            fieldName: "TIPO_VIVIENDA",
            label: "Tipo vivienda",
          },
        ]
      }
    },
    // equipamiento
    {
      nombre: "Sistema de equipamientos",
      // url: "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/ESTRUCTURA_FUNCIONAL_Y_DEL_CUIDADO/MapServer/118",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/POT555/Sistema_del_cuidado_y_servicios_sociales/MapServer/8",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "Nombre: {ADMBDG.Equipamiento_SCSS.NOMBRE}",
        contenido: [
          {
            fieldName: "ADMBDG.Equipamiento_SCSS.SERVICIO_SOCIAL",
            label: "Tipo de servicio social",
          },
          {
            fieldName: "ADMBDG.Equipamiento_SCSS.SERVICIO_POT_555",
            label: "Servicio POT 555",
          },
          {
            fieldName: "ADMBDG.Equipamiento_SCSS.SECTOR_POT_555",
            label: "Sector POT 555",
          },
          {
            fieldName: "ADMBDG.Equipamiento_SCSS.TIPO_POT_555",
            label: "Tipo POT 555",
          },
          {
            fieldName: "ADMBDG.Plataforma_SCSS.NUMERO_EQUIPAMIENTOS",
            label: "Número de equipamientos",
          },
        ],
      },
    },
    // establecimientos
    {
      nombre: "Establecimientos",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/2",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "Sección: {SECCION}",
        contenido: [
          {
            fieldName: "COD",
            label: "Código",
          },
          {
            fieldName: "COD_CIIU",
            label: "Código CIIU",
          },
          {
            fieldName: "DIVISION",
            label: "División",
          },
        ],
      },
    },
    // transmilenio
    {
      nombre: "Estaciones de transporte masivo",
      url: "https://gis.transmilenio.gov.co/arcgis/rest/services/Troncal/consulta_esquemas_estaciones/FeatureServer/0",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "bloque",
      },
      atributos: {
        titulo: "Estación: {nombre}",
        contenido: [
          {
            fieldName: "troncal",
            label: "Troncal",
          },
        ],
      },
    },
    {
      nombre: "Parques de Borde",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/POT555/ESTRUCTURA_INTEGRADORES_DE_PATRIMONIO/FeatureServer/37",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "Estación: {nombre}",
        contenido: [
          {
            fieldName: "troncal",
            label: "Troncal",
          },
        ],
      },
    },
    {
      nombre: "Parques de proximidad",
      url: "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/ESTRUCTURA_FUNCIONAL_Y_DEL_CUIDADO/MapServer/171",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "bloque-parque",
      },
      atributos: {
        titulo: "Nombre: {NOMBRE}",
        contenido: [
          {
            fieldName: "CODIGO_ID",
            label: "Código",
          },
          {
            fieldName: "SHAPE.AREA",
            label: "Área",
          },
        ],
      },
    },
    {
      nombre: "Parques red estructurante",
      url: "https://sinupot.sdp.gov.co/serverp/rest/services/POT555/ESTRUCTURA_FUNCIONAL_Y_DEL_CUIDADO/MapServer/185",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "bloque-parque",
      },
      atributos: {
        titulo: "Nombre: {NOMBRE}",
        contenido: [
          {
            fieldName: "CODIGO_ID",
            label: "Código",
          },
          {
            fieldName: "SHAPE.AREA",
            label: "Área",
          },
        ],
      },
    },
    {
      nombre: "Predios fiscales DADEP",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/5",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "Tipo de bien: {TIPO_INMUE}",
        contenido: [
          {
            fieldName: "RUPI",
            label: "RUPI",
          },
          {
            fieldName: "ORIGEN",
            label: "Origen",
          },
          {
            fieldName: "SHAPE.AREA",
            label: "Área",
          },
        ],
      },
    },
    {
      nombre: "Sitios de interés",
      url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/MapServer/1",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "Nombre: {NGENOMBRE}",
        contenido: [
          {
            fieldName: "NGECLASIFI",
            label: "Clasificación",
          },
          {
            fieldName: "NGENALTERN",
            label: "Nombre alternativo",
          },
        ],
      },
    },
    {
      nombre: "Ojo a la obra (Punto)",
      url: "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/gestionpublica/obraspublicas2021/MapServer/0",
      outfields: ["*"],
      formato: {
        dimensiones: 2,
        vista: "2D",
        simbolo: "default",
      },
      atributos: {
        titulo: "{TIPO_PROYECTO}: {NOMBRE_PROYECTO}",
        contenido: [
          {
            fieldName: "AVANCE_OBRA",
            label: "Avance de obra",
          },
          {
            fieldName: "DIRECCION",
            label: "Dirección",
          },
        ],
      },
    },
    {
      nombre: "Ojo a la obra (línea)",
      url: "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/gestionpublica/obraspublicas2021/MapServer/1",
      outfields: ["*"],
      formato: {
        dimensiones: 3,
        vista: "3D",
        simbolo: "default",
      },
      atributos: {
        titulo: "{TIPO_PROYECTO}: {NOMBRE_PROYECTO}",
        contenido: [
          {
            fieldName: "AVANCE_OBRA",
            label: "Avance de obra",
          },
          {
            fieldName: "DIRECCION",
            label: "Dirección",
          },
        ],
      },
    },
  ],
  capaGaleria: {
    url: "https://serviciosg.sdp.gov.co/server/rest/services/predio_360/Predio_360/FeatureServer/6",
    popupTemplate: {
      title: "Nombre: {NOM_PROYECTO}",
      contenido: [
        {
          fieldName: "CODIGO_PROYECTO",
          label: "Código proyecto",
        },
        {
          fieldName: "CONSTRUCTOR",
          label: "Constructor",
        },
        {
          fieldName: "DESCRIP_ULT_ET_LANZADA",
          label: "Descripción última etapa lanzada",
        },
        {
          fieldName: "DIRECCION",
          label: "Dirección",
        },
        {
          fieldName: "DISPONIBLES",
          label: "Disponibles",
        },
        {
          fieldName: "ESTRATO",
          label: "Estrato",
        },
        {
          fieldName: "TIPO_INMUEBLE",
          label: "Tipo inmueble",
        },
        {
          fieldName: "TIPO_VIVIENDA",
          label: "Tipo vivienda",
        },
      ]
    },
    atributos: [
      {
        name: "NOM_PROYECTO",
        alias: "Nombre proyecto",
        orden: 0,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "CODIGO_PROYECTO",
        alias: "Código proyecto",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "ACTIVO",
        alias: "Activo",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "BARRIO",
        alias: "Barrio",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "ACABADOS_ENTREGA",
        alias: "Acabados entrega",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "CERTIFICADOS_SOSTENIBLE",
        alias: "Certificados sostenible",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "CONSTRUCTOR",
        alias: "Constructor",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "DESCRIP_ULT_ET_LANZADA",
        alias: "Descripción última etapa lanzada",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "DIRECCION",
        alias: "Dirección",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "DISPONIBLES",
        alias: "Disponibles",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "ESTADO",
        alias: "Estado",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "ESTRATO",
        alias: "Estrato",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      /*{
        name: "FECHA_DESISTIMIENTO",
        alias: "Fecha de desistimiento",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },*/
      {
        name: "FECHA_ENTREGA",
        alias: "Fecha de entrega",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: null,
          mostrarSinInformacion: "S",
        },
      },
      /*{
        name: "FECHA_INICIO",
        alias: "Fecha de inicio",
        orden: 28,
        formato: {
          tipo: "fecha",
          sinInformacion: 0,
          mostrarSinInformacion: "S",
        },
      },*/
      {
        name: "INCREMENTO_VALOR_PISOS",
        alias: "Incremento valor pisos",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LONGITUD",
        alias: "Longitud",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 6,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "LATITUD",
        alias: "Latitud",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 6,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "OFERTA_TOTAL",
        alias: "Oferta total",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "OTRO_USO",
        alias: "Otro uso",
        orden: 28,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "PISOS_PARQUEADER",
        alias: "Pisos parqueadero",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "PROM_ALCOBAS",
        alias: "Promedio alcobas",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "PROM_BAÑOS",
        alias: "Promedio baños",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "PROM_VALOR",
        alias: "Promedio valor",
        orden: 28,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "$ ",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "PROM_VALOR_M2",
        alias: "Promedio valor m<sup>2</sup>",
        orden: 29,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "$ ",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "SEMISOTANOS",
        alias: "Semisótanos",
        orden: 30,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "SOTANOS",
        alias: "Sótanos",
        orden: 30,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "SUB_ZONA",
        alias: "SubZona",
        orden: 31,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "TIPO_INMUEBLE",
        alias: "Tipo de inmueble",
        orden: 32,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "TIPO_VIVIENDA",
        alias: "Tipo de vivienda",
        orden: 33,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "TOTAL_DESISTIDOS",
        alias: "Total desistidos",
        orden: 34,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "TOTAL_UNIDADES",
        alias: "Total de unidades",
        orden: 35,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "UNIDADES_LANZAR",
        alias: "Unidades por lanzar",
        orden: 36,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "VENDEDOR",
        alias: "Vendedor",
        orden: 35,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "VENDIDOS",
        alias: "Vendidos",
        orden: 36,
        formato: {
          tipo: "numero",
          decimales: 0,
          pre: "",
          post: "",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
      {
        name: "ZONA",
        alias: "Zona",
        orden: 37,
        formato: {
          tipo: "texto",
          sinInformacion: "",
          mostrarSinInformacion: "S",
        },
      },
    ],
  },
};
