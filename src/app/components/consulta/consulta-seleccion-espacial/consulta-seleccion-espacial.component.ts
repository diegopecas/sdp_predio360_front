import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { loadModules } from "esri-loader";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-consulta-seleccion-espacial",
  templateUrl: "./consulta-seleccion-espacial.component.html",
  styleUrls: ["./consulta-seleccion-espacial.component.css"],
})
export class ConsultaSeleccionEspacialComponent implements OnInit {
  @Output() accion = new EventEmitter();
  @Output() accionConsultar = new EventEmitter();
  @Output() buffer = new EventEmitter();

  private bufferNumSlider:any;

  seleccion(opcion: any) {
    console.log(opcion);
    this.accion.emit(opcion);
  }

  ngOnInit() {
    this.crearBufferPanel();
  }

  crearBufferPanel() {
    loadModules(["esri/config", "esri/widgets/Slider"]).then(
      ([esriConfig, Slider]) => {
        esriConfig.apiKey = environment.esriConfigApiKey;
        const _this = this;

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

        this.bufferNumSlider.on(
          ["thumb-change", "thumb-drag"],
          this.bufferVariablesChanged
        );
      }
    );
  }

  bufferVariablesChanged = (event: any) => {
    const bufferSize = event.value;
    console.log("bufferSize", bufferSize);
    this.buffer.emit(bufferSize);
  }

  consultar() {
    this.accionConsultar.emit('predios');
  }
}
