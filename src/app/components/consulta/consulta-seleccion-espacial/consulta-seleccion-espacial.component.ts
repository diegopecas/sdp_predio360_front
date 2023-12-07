import { Component, EventEmitter, OnInit, Output } from "@angular/core";
// import { loadModules } from "esri-loader";
import { environment } from "src/environments/environment";
import Slider from "@arcgis/core/widgets/Slider";
import { MapService } from "src/app/common/services/map.service";

@Component({
  selector: "app-consulta-seleccion-espacial",
  templateUrl: "./consulta-seleccion-espacial.component.html",
  styleUrls: ["./consulta-seleccion-espacial.component.css"],
})
export class ConsultaSeleccionEspacialComponent implements OnInit {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();
  @Output() buffer = new EventEmitter();

  private bufferNumSlider: any;
  private bufferSize = 0;

  constructor(private mapService: MapService) {}

  seleccion(opcion: any) {
    console.log(opcion);
    this.accion.emit(opcion);
  }

  ngOnInit() {
    this.crearBufferPanel();
  }

  crearBufferPanel() {
    this.bufferNumSlider = new Slider({
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

    this.bufferNumSlider.on(["thumb-change", "thumb-drag"], (event: any) => {
      this.bufferSize = event.value;
      this.mapService.configurarElementosBuffer("predio", this.bufferSize);
      // this.buffer.emit(this.bufferSize);
    });
  }

  /*bufferVariablesChanged = (event: any) => {
    const bufferSize = event.value;
    console.log("bufferSize", bufferSize);
    this.buffer.emit(bufferSize);
  }*/

  consultar() {
    this.accionConsultar.emit("predios");
  }
}
