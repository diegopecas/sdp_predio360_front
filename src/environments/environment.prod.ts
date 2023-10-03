// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  esriConfigApiKey:
    "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj",
  /*urlServicioPredios:
    "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/Mapa_demo_Predio_360_WFL1/FeatureServer/0",*/
  urlServicioPredios:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/0",
  /*urlServicioPredios:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",*/
  /*urlServicioPredios:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/4",*/
  /* no funciona en SDP: urlServicioPredios:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/0",*/
  urlServicioGaleria:
    "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
  /*urlTablaPredios:
    "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/Mapa_demo_Predio_360_WFL1/FeatureServer/1",*/
  urlTablaPredios:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
  urlLoteCatastral:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/0",
  urlConstruccion:
    "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/4",
  urlSinupot: "https://sinupot.sdp.gov.co/serverp/rest/services/",
  capaConsultaClick : {
    url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/4",
    id: "CODIGO_LOTE"
  },
  capaConsultaPredio: {
    porLote: {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      atributo: "GN_CODIGO_LOTE",
    },
    porDireccion: {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      atributo: "GN_DIRECCION",
    },
    porMatricula: {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      atributo: "GN_MATRICULA_INMOBILIARIA"
    },
    porChip: {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      atributo: "GN_CHIP"
    },
    porCedula: {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      atributo: "GN_CEDULA_CATASTRAL"
    }
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
      id: "LC",
      nombre: "Información De Localización",
    },
    {
      id: "IF",
      nombre: "Información Física Del Lote",
    },
    {
      id: "NR",
      nombre: "Información Normativa",
    },
    {
      id: "EC",
      nombre: "Información Económica",
    },
    {
      id: "UB",
      nombre: "Información Urbanística",
    },
  ],
  serviciosResultados: [
    {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/0",
      id: "construccion",
      name: "Construcción",
      filter: ["CODIGO_LOTE","GN_CODIGO_LOTE"],
      atributos: [
        { name: "OBJECTID", alias: "OBJECTID", panel: "" },
        {
          name: "CODIGO_CONSTRUCCION",
          alias: "Código Construcción",
          panel: "",
        },
        { name: "CODIGO_LOTE", alias: "Código Lote", panel: "LC" },
        { name: "CODIGO_BARRIO", alias: "Código Barrio", panel: "LC" },
        { name: "CODIGO_MANZANA", alias: "Código Manzana", panel: "LC" },
        { name: "CODIGO_PREDIO", alias: "Código Predio", panel: "LC" },
        { name: "NUMERO_PISOS", alias: "Número Pisos", panel: "IF" },
        { name: "SEMISOTANO", alias: "Tiene Semisotano", panel: "IF" },
        { name: "NUMERO_SOTANOS", alias: "Número Sotanos", panel: "IF" },
        { name: "ESCALA_CAPTURA", alias: "Escala Captura", panel: "" },
        { name: "FECHA_CAPTURA", alias: "Fecha Actualización", panel: "" },
        { name: "RESPONSABLE", alias: "Responsable", panel: "" },
        { name: "Shape__Area", alias: "SHAPE.AREA", panel: "" },
        { name: "Shape__Length", alias: "SHAPE.LEN", panel: "" },
      ],
    },
    {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/4",
      id: "lote_catastral",
      name: "Lote Catastral",
      filter: ["GN_CODIGO_LOTE","GN_CODIGO_LOTE"],
      atributos: [
        { name: "OBJECTID", alias: "OBJECTID", panel: "" },
        { name: "GN_CODIGO_LOTE", alias: "Código Lote", panel: "" },
        { name: "NR_ES_SECTOR_CONSOLIDADO", alias: "Sectores consolidados", panel: "NR", orden: 6 },
        {
          name: "FS_AREA_CONSTRUIDA",
          alias: "Área Construida del Lote",
          panel: "IF",
        },
        {
          name: "FS_AREA_TERRENO",
          alias: "Área de Terreno del Lote",
          panel: "IF",
        },
        {
          name: "FS_INDICE_CONSTRUCCION",
          alias: "Índice de Construcción",
          panel: "IF",
        },
        {
          name: "FS_INDICE_OCUPACION",
          alias: "Índice de Ocupación",
          panel: "IF",
        },
        { name: "FS_SEMISOTANO", alias: "Tiene Semisotano", panel: "" },
        { name: "NR_AREA_ACTIVIDAD", alias: "Área de Actividad", panel: "NR", orden: 2 },
        {
          name: "NR_AREA_ELEV_MAXIMA_ALTURA",
          alias: "Área de Elevación Máxima: Altura",
          panel: "",
        },
        {
          name: "NR_AREA_ELEV_MAXIMA_ELEVACION",
          alias: "Área de Elevación Máxima: Elevación",
          panel: "",
        },
        {
          name: "NR_ES_AREA_INFLUENCIA_COTA5_AI",
          alias: "Está en Área de Influencia Cota 64 Aeropuerto el Dorado",
          panel: "NR",
        },
        {
          name: "NR_ES_INCLUENCIA_INDIRECTA_AID",
          alias: "Está en Área de Influencia Indirecta Aeropuerto el Dorado",
          panel: "",
        },
        {
          name: "NR_ES_MANZANA_COMERCIAL",
          alias: "Está en Manzana Comercial",
          panel: "",
        },
        {
          name: "NR_ES_RANGO_EDIFI_DESAROLLO",
          alias: "Está en Rango Edificabilidad en Desarrollo",
          panel: "NR",
          orden: 4
        },
        {
          name: "NR_ES_SEC_INCOMPA_USO_RESI",
          alias: "Está en Incompatible con Sector Uso Residencial",
          panel: "",
        },
        {
          name: "NR_ES_SECTOR_USO_RESIDENCIAL",
          alias: "Está en Sector Uso Residencial",
          panel: "",
        },
        {
          name: "NR_ES_ZONA_INFLUENCIA_AEROPUER",
          alias: "Está en Área de Influencia de Aeropuerto",
          panel: "",
        },
        {
          name: "NR_ESTUC_ECO_PRIN_CATEGORIA",
          alias: "Categoría de la Estructura Ecológica Principal",
          panel: "",
        },
        {
          name: "NR_ESTUC_ECO_PRIN_COMPONENTE",
          alias: "Componente de la Estructura Ecológica Principal",
          panel: "",
        },
        {
          name: "NR_ESTUC_ECO_PRIN_ELEMENTO",
          alias: "Elemento de la Estructura Ecológica Principal",
          panel: "",
        },
        {
          name: "NR_ESTUC_ECO_PRIN_NOMBRE",
          alias: "Nombre Total de la Estructura Ecológica Principal",
          panel: "",
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADM_NRO",
          alias: "Número Acto Administrativo del Plan Parcial",
          panel: "NR",
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADMTIVO",
          alias: "Acto Administrativo del Plan Parcial",
          panel: "NR",
        },
        {
          name: "NR_PLAN_PARCIAL_NOMBRE",
          alias: "Nombre del Plan Parcial",
          panel: "NR",
        },
        {
          name: "NR_TRAT_URBAN_ALTURA_MAXIMA",
          alias: "Altura Máxima por Tratamiento Urbanístico",
          panel: "NR",
          orden: 3
        },
        {
          name: "NR_TRAT_URBAN_NOMBRE",
          alias: "Nombre del Tratamiento Urbanístico",
          panel: "NR",
          orden: 1
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO",
          alias: "Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO_FECH",
          alias:
            "Fecha Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
        },
        {
          name: "UB_PT_ACTO_ADMINISTRATIVO_NUM",
          alias:
            "Número Acto Administrativo del Desarrollo del Plano Topográfico",
          panel: "",
        },
        {
          name: "UB_PT_CODIGO_DESARROLLO",
          alias: "Código del Desarrollo del Plano Topográfico",
          panel: "UB",
        },
        {
          name: "UB_PT_NOMBRE_DESARROLLO",
          alias: "Nombre del Desarrollo del Plano Topográfico",
          panel: "",
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO",
          alias: "Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO_FECH",
          alias:
            "Fecha Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
        },
        {
          name: "UB_PU_ACTO_ADMINISTRATIVO_NUM",
          alias:
            "Número Acto Administrativo del Desarrollo del Plano Urbanístico",
          panel: "",
        },
        {
          name: "UB_PU_CODIGO_DESARROLLO",
          alias: "Código del Desarrollo del Plano Urbanístico",
          panel: "",
        },
        {
          name: "UB_PU_NOMBRE_DESARROLLO",
          alias: "Nombre del Desarrollo del Plano Urbanístico",
          panel: "",
        },
        { name: "GN_LOCALIDAD", alias: "Localidad", panel: "LC" },
        {
          name: "GN_UNI_PLANEMIENTO_LOCAL",
          alias: "Unidad de planeamiento local",
          panel: "LC",
        },
        { name: "GN_SECTOR_CATASTRAL", alias: "Sector Catastral", panel: "LC" },
        { name: "GN_DIRECCION", alias: "Dirección Lote", panel: "" },
        { name: "FS_NUMERO_PISOS", alias: "Número Pisos", panel: "" },
        { name: "FS_NUMERO_SOTANOS", alias: "Número Sotanos", panel: "" },
        { name: "FS_UNIDAD_PREDIAL", alias: "Unidades Prediales", panel: "" },
        {
          name: "EC_VALOR_REFERENCIA_SUELO",
          alias: "Valor de referencia del sueli",
          panel: "",
        },
        { name: "FS_AREA", alias: "Área del lote", panel: "" },
        {
          name: "FS_PUNT_CONST_PROM",
          alias: "Puntación promedio de las construcciones",
          panel: "",
        },
        { name: "FS_VETUSTEZ", alias: "Vetustez", panel: "" },
        {
          name: "NR_TRAT_URBAN_TIPOLOGIA",
          alias: "Tipología del Tratamiento Urbanístico",
          panel: "NR",
        },
        {
          name: "PR_EQ_SEGURIDAD_TIEM",
          alias: "PR_EQ_SEGURIDAD_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_SEGURIDAD_DIST",
          alias: "PR_EQ_SEGURIDAD_DIST",
          panel: "",
        },
        {
          name: "PR_EQ_EDUCACION_TIEM",
          alias: "PR_EQ_EDUCACION_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_EDUCACION_DIST",
          alias: "PR_EQ_EDUCACION_DIST",
          panel: "",
        },
        {
          name: "PR_EQ_ABASTECIMIENTO_TIEM",
          alias: "PR_EQ_ABASTECIMIENTO_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_ABASTECIMIENTO_DIST",
          alias: "PR_EQ_ABASTECIMIENTO_DIST",
          panel: "",
        },
        {
          name: "PR_EQ_DEPORTIVO_TIEM",
          alias: "PR_EQ_DEPORTIVO_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_DEPORTIVO_DIST",
          alias: "PR_EQ_DEPORTIVO_DIST",
          panel: "",
        },
        {
          name: "PR_EQ_EDUCACION_SUP_TIEM",
          alias: "PR_EQ_EDUCACION_SUP_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_EDUCACION_SUP_DIST",
          alias: "PR_EQ_EDUCACION_SUP_DIST",
          panel: "",
        },
        { name: "PR_EQ_SALUD_TIEM", alias: "PR_EQ_SALUD_TIEM", panel: "" },
        { name: "PR_EQ_SALUD_DIST", alias: "PR_EQ_SALUD_DIST", panel: "" },
        {
          name: "PR_EQ_BIENESTAR_TIEM",
          alias: "PR_EQ_BIENESTAR_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_BIENESTAR_DIST",
          alias: "PR_EQ_BIENESTAR_DIST",
          panel: "",
        },
        {
          name: "PR_EQ_ADMINTIVO_TIEM",
          alias: "PR_EQ_ADMINTIVO_TIEM",
          panel: "",
        },
        {
          name: "PR_EQ_ADMINTIVO_DIST",
          alias: "PR_EQ_ADMINTIVO_DIST",
          panel: "",
        },
        {
          name: "PR_PARQUE_ESTRUC_TIEM",
          alias: "PR_PARQUE_ESTRUC_TIEM",
          panel: "",
        },
        {
          name: "PR_PARQUE_ESTRUC_DIST",
          alias: "PR_PARQUE_ESTRUC_DIST",
          panel: "",
        },
        {
          name: "PR_PARQUE_PROX_TIEM",
          alias: "PR_PARQUE_PROX_TIEM",
          panel: "",
        },
        {
          name: "PR_PARQUE_PROX_DIST",
          alias: "PR_PARQUE_PROX_DIST",
          panel: "",
        },
        {
          name: "PR_ESTACION_TM_TIEM",
          alias: "PR_ESTACION_TM_TIEM",
          panel: "",
        },
        {
          name: "PR_ESTACION_TM_DIST",
          alias: "PR_ESTACION_TM_DIST",
          panel: "",
        },
        {
          name: "PR_MANZANA_CIENCIA_TEC_TIEM",
          alias: "PR_MANZANA_CIENCIA_TEC_TIEM",
          panel: "",
        },
        {
          name: "PR_MANZANA_CIENCIA_TEC_DIST",
          alias: "PR_MANZANA_CIENCIA_TEC_DIST",
          panel: "",
        },
        {
          name: "PR_CLUSTER_SALUD_TIEM",
          alias: "PR_CLUSTER_SALUD_TIEM",
          panel: "",
        },
        {
          name: "PR_CLUSTER_SALUD_DIST",
          alias: "PR_CLUSTER_SALUD_DIST",
          panel: "",
        },
        {
          name: "PR_CORAZON_PROD_TIEM",
          alias: "PR_CORAZON_PROD_TIEM",
          panel: "",
        },
        {
          name: "PR_CORAZON_PROD_DIST",
          alias: "PR_CORAZON_PROD_DIST",
          panel: "",
        },
        {
          name: "NR_PLAN_PARCIAL_ACTO_ADM_FECHA",
          alias: "Fecha Acto Administrativo del Plan Parcial",
          panel: "NR",
        },
        {
          name: "NR_PLAN_PARCIAL_ESTADO",
          alias: "Estado del Plan Parcial",
          panel: "NR",
        },
        {
          name: "NR_AME_INCEN_FORES_URB",
          alias: "NR_AME_INCEN_FORES_URB",
          panel: "",
        },
        {
          name: "NR_ES_SUELO_PROTECC_RISGO",
          alias: "NR_ES_SUELO_PROTECC_RISGO",
          panel: "",
        },
        { name: "Shape__Area", alias: "SHAPE.AREA", panel: "" },
        { name: "Shape__Length", alias: "SHAPE.LEN", panel: "" },
      ],
    },
    {
      url: "https://serviciosgeopr.sdp.gov.co/server/rest/services/predio360/Predio_360/FeatureServer/3",
      id: "predio",
      name: "Predio",
      filter: ["OBJECTID","OBJECTID"],
      atributos: [
        { name: "OBJECTID", alias: "OBJECTID", panel: "" },
        { name: "GN_CODIGO_LOTE", alias: "Código del lote", panel: "" },
        { name: "EC_AVALUO", alias: "Avalúo", panel: "EC" },
        { name: "EC_VALOR_ARRIENDO", alias: "Valor de Arriendo", panel: "" },
        {
          name: "EC_VALOR_M2_CONSTRUCCION",
          alias: "Valor M2 Construcción",
          panel: "EC",
        },
        { name: "EC_VALOR_M2_TERRENO", alias: "Valor M2 Terreno", panel: "EC" },
        {
          name: "EC_VALOR_REFERENCIA_SUELO",
          alias: "Valor de Referencia del Suelo M2",
          panel: "EC",
        },
        {
          name: "EC_VALOR_TOTAL_CONSTRUCCION",
          alias: "Valor Total de Construcción",
          panel: "EC",
        },
        {
          name: "EC_VALOR_TOTAL_TERRENO",
          alias: "Valor Total de Terreno",
          panel: "EC",
        },
        {
          name: "FECHA_ACTUALIZACION",
          alias: "Fecha Actualización",
          panel: "",
        },
        { name: "FECHA_CAPTURA", alias: "Fecha Captura", panel: "" },
        {
          name: "FECHA_INCORPORACION",
          alias: "Fecha Incorporación",
          panel: "",
        },
        { name: "FS_AREA_CONSTRUIDA", alias: "Área Construida", panel: "" },
        { name: "FS_AREA_TERRENO", alias: "Área de Terreno", panel: "" },
        {
          name: "FS_PUNT_CONST_ACA_CONS",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_ARMAZON",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_BANO_CONS",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_BANO_ENCHAPE",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_BANO_MOBILIARIO",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_BANO_TAM",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_CERCHAS",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_COCI_CONS",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_COCI_ENCHAPE",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_COCI_MOBILIARIO",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_COCI_TAM",
          alias: "Puntaje de Baño: Tamaño",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_CONSERVACION",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_CUBIERTA",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_CUBRIMIENTO",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_FACHADA",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_MUROS",
          alias: "Puntaje del Material de la Estructura: Armazón",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_PISOS",
          alias: "Puntaje de Acabados Principales: Fachada",
          panel: "",
        },
        {
          name: "FS_PUNT_CONST_PROM",
          alias: "Puntaje Total de Construcción",
          panel: "",
        },
        {
          name: "GN_AREA_USO_COMERCIAL",
          alias: "Área en uso comercial",
          panel: "",
        },
        {
          name: "GN_AREA_USO_DOTACIONAL",
          alias: "Área en uso dotacional",
          panel: "",
        },
        {
          name: "GN_AREA_USO_INDUSTRIA",
          alias: "Área en uso industria",
          panel: "",
        },
        {
          name: "GN_AREA_USO_NO_URB",
          alias: "Área en uso no urbano",
          panel: "",
        },
        {
          name: "GN_AREA_USO_PH",
          alias: "Área en uso actividad conexa a PH",
          panel: "",
        },
        {
          name: "GN_AREA_USO_RESIDENCIAL",
          alias: "Área en uso residencial",
          panel: "",
        },
        {
          name: "GN_AREA_USO_SERVICIOS",
          alias: "Área en uso servicios",
          panel: "",
        },
        { name: "GN_CEDULA_CATASTRAL", alias: "Cédula Catastral", panel: "" },
        { name: "GN_CHIP", alias: "CHIP", panel: "" },
        { name: "GN_CLASE_PREDIO", alias: "Clase Predio", panel: "" },
        { name: "GN_DIRECCION", alias: "Dirección", panel: "" },
        {
          name: "GN_FECHA_DOCUMENTO",
          alias: "Fecha escritura pública",
          panel: "",
        },
        {
          name: "GN_MATRICULA_INMOBILIARIA",
          alias: "Matrícula Inmobiliaria",
          panel: "",
        },
        { name: "GN_NOTARIA", alias: "Notaria", panel: "" },
        {
          name: "GN_NUMERO_DOCUMENTO",
          alias: "Número de escritura",
          panel: "",
        },
        {
          name: "GN_PROPIETARIO_NOMBRE",
          alias: "Nombre del propietario",
          panel: "",
        },
        {
          name: "GN_PROPIETARIO_NUM_DOC",
          alias: "Número de documento del propietario",
          panel: "",
        },
        {
          name: "GN_PROPIETARIO_TIPO_DOC",
          alias: "Tipo documento del propietario",
          panel: "",
        },
        { name: "PREDIO", alias: "Predio", panel: "" },
        { name: "RESPONSABLE", alias: "Responsable", panel: "" },
        {
          name: "UB_LIC_AA_FECHA_EJECUTORIA",
          alias: "Fecha Ejecutoria del Acto Administrativo",
          panel: "UB",
        },
        {
          name: "UB_LIC_AA_FECHA_EXPEDICION",
          alias: "Fecha de Expedición del Acto Administrativo",
          panel: "UB",
        },
        {
          name: "UB_LIC_AA_TIPO_DECISION",
          alias: "Tipo de Decisión del Acto Administrativo",
          panel: "UB",
        },
        {
          name: "UB_LIC_ACTO_ADMNISTRATIVO",
          alias: "Acto Administrativo de la Licencia",
          panel: "UB",
        },
        {
          name: "UB_LIC_DESC_LICENCIA",
          alias: "Descipción de la Licencia",
          panel: "UB",
        },
        {
          name: "UB_LIC_FECHA_RADICACION",
          alias: "Fecha de Radicación de la Licencia",
          panel: "UB",
        },
        {
          name: "UB_LIC_ID_EXPEDIENTE",
          alias: "Id. Expediente de la Licencia",
          panel: "UB",
        },
        {
          name: "UB_LIC_MODALIDAD_TRAMITE",
          alias: "Modalidad del trámite de la Licencia",
          panel: "",
        },
        {
          name: "UB_LIC_OBJ_TRAMITE",
          alias: "Objeto de la Licencia",
          panel: "UB",
        },
        {
          name: "UB_LIC_TIPO_TRAMITE",
          alias: "Modalidad del trámite de la Licencia",
          panel: "",
        },
        { name: "UB_SECTOR_NORMATIVO", alias: "Decreto de la UPZ", panel: "" },
        {
          name: "UB_SUBSECTOR_EDIFICABILIDAD",
          alias: "Decreto de la UPZ",
          panel: "",
        },
        { name: "UB_UPZ_CODIGO", alias: "Código de la UPZ", panel: "" },
        { name: "UB_UPZ_DECRETO", alias: "Decreto de la UPZ", panel: "" },
        { name: "UB_UPZ_NOMBRE", alias: "Nombre de la UPZ", panel: "" },
        { name: "ZONA_GEOECONOMICA", alias: "Zona Geoeconómica", panel: "" },
        { name: "GN_ESTRATO", alias: "Estrato", panel: "" },
        { name: "GN_TIPO_PROPIEDAD", alias: "Tipo Propiedad", panel: "" },
        { name: "FS_AREA", alias: "Área del Lote", panel: "" },
        { name: "EC_AVALUO_ANO", alias: "Avalúo Año", panel: "" },
        { name: "FS_VETUSTEZ", alias: "Vetustez", panel: "" },
      ],
    },
  ],
};
