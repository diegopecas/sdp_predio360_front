import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { loadModules } from "esri-loader";
import swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-galeria',
  templateUrl: './consulta-galeria.component.html',
  styleUrls: ['./consulta-galeria.component.css']
})
export class ConsultaGaleriaComponent implements OnInit {
  @Output() accion = new EventEmitter();
  @Output() seleccionProyecto = new EventEmitter();

  public datos:any;

  public currentIndex = 0;

  seleccion(opcion: any) {
    this.accion.emit(opcion);
  }

  ngOnInit(): void {
      this.consultarProyectos();
  }

  seleccionar() {
    console.log('PROYECTO SELECCIONADO', this.datos[this.currentIndex])
    this.seleccionProyecto.emit({latitud: this.datos[this.currentIndex].latitud, longitud: this.datos[this.currentIndex].longitud});
  }

  consultarProyectos(){
    loadModules(["esri/config", "esri/layers/FeatureLayer"]).then(
      ([esriConfig, FeatureLayer]) => {
        esriConfig.apiKey =
          "AAPK18837c198fe14f849f5237a94fb8c4d9nyUIHfhPmykTR_afDukiTorJHXPimhB05XjXQ6o6rDQ-GAsclkcQJjNfsUX-ulMj";

        // Crear un FeatureLayer con la URL del servicio de tabla
        const featureLayer = new FeatureLayer({
          url: "https://services8.arcgis.com/2gedZBw4OrdjULOA/ArcGIS/rest/services/galeria_inmobiliaria_demo/FeatureServer/0",
        });

        // Consultar la tabla y obtener los resultados
        const query = featureLayer.createQuery();
        query.where = "1=1"; // Establecer una condición opcional para filtrar los resultados
        query.outFields = ["*"]; // Especificar los campos que deseas obtener (en este caso, todos)

        featureLayer
          .queryFeatures(query)
          .then((result: any) => {
            // Manipular los resultados obtenidos
            const features = result.features;
            // Realizar acciones con los datos devueltos
            
            if(features.length>0) {
              this.datos = features.map((m:any)=>m.attributes);
            }
          })
          .catch((error: any) => {
            // Manejar cualquier error ocurrido durante la consulta
            console.error("Error al consultar la tabla:", error);
          });
      }
    );
  }

  /*verDetalle() {
    swal.fire({
      html: `
      <p>Código de proyecto: ${this.datos[this.currentIndex].cod_proyecto}</p>
      <p>Código lote: ${this.datos[this.currentIndex].cod_lote}</p>
      <p><strong>Proyecto: ${this.datos[this.currentIndex].proyecto}</strong></p>
      <p>Vendedor: ${this.datos[this.currentIndex].vendedor}</p>
      <p>Constructor: ${this.datos[this.currentIndex].constructor}</p>
      <p>Dirección: ${this.datos[this.currentIndex].direccion}</p>
      <p>Estrato: ${this.datos[this.currentIndex].estrato}</p>
      <p>Zona: ${this.datos[this.currentIndex].zona}</p>
      <p>Barrio: ${this.datos[this.currentIndex].barrio}</p>
      <p>Subzona: ${this.datos[this.currentIndex].subzona}</p>
      <p>Fecha inicio: ${this.datos[this.currentIndex].fecha_inicio}</p>
      <p>Estado: ${this.datos[this.currentIndex].estado}</p>
      <p>Activo: ${this.datos[this.currentIndex].activo}</p>
      <p>Unidades totales: ${this.datos[this.currentIndex].unidades_totales}</p>
      <p>Unidades ofertadas: ${this.datos[this.currentIndex].unidades_ofertadas}</p>
      <p>Unidades por lanzar: ${this.datos[this.currentIndex].unidades_por_lanzar}</p>
      <p>Unidades vendidas: ${this.datos[this.currentIndex].unidades_vendidas}</p>
      <p>Unidades disponibles: ${this.datos[this.currentIndex].unidades_dispobibles_proy}</p>
      <p>Última etapa lanzada: ${this.datos[this.currentIndex].ult_etapa_lanzada}</p>
      <p>Sótanos: ${this.datos[this.currentIndex].sotanos}</p>
      <p>Semisótanos: ${this.datos[this.currentIndex].semisotanos}</p>
      <p>Pisos de parqueadero: ${this.datos[this.currentIndex].pisos_parqueadero}</p>
      <p>Pisos de parqueadero en edificio: ${this.datos[this.currentIndex].pisos_parqueadero_edificio_vivi}</p>
      <p>Incremento de precio por piso: ${this.datos[this.currentIndex].incremento_precio_pisos}</p>
      <p>Otro uso: ${this.datos[this.currentIndex].otro_uso}</p>
      <p>Fecha de entrega: ${this.datos[this.currentIndex].fecha_entrega}</p>
      <p>Entrega con acabados: ${this.datos[this.currentIndex].acabados_entrega}</p>
      <p>Tipo de inmueble: ${this.datos[this.currentIndex].tipo_inmueble}</p>
      <p>Es vivienda VIS: ${this.datos[this.currentIndex].vivienda_vis}</p>
      <p>Fecha desistido: ${this.datos[this.currentIndex].fecha_desistido}</p>
      <p>Unidades desistidas: ${this.datos[this.currentIndex].unidades_desistidas}</p>
      <p>Certificado sostenible: ${this.datos[this.currentIndex].certificado_sostenible}</p>
      `,
      showCancelButton: false,
      confirmButtonColor: '#acc962',
      confirmButtonText: 'Cerrar'
    });
  }*/

  public verMasGaleria = false;

  ver(){
    this.verMasGaleria = !this.verMasGaleria;
  }

}
