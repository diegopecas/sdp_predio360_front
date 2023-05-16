import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.css"],
})
export class ResultadosComponent implements OnChanges {
  @Output() accion = new EventEmitter();
  @Input() valores: any;

  public identificacionPredio: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ResultadosComponent", changes);
    this.identificacionPredio = changes["valores"]["currentValue"];
  }

  regresar() {
    console.log("Regresar de resultados");
    this.accion.emit(true);
  }

  isIPPanelExpanded: boolean = false;
  isIFLPanelExpanded: boolean = false;
  isLOCPanelExpanded: boolean = false;
  isNORPanelExpanded: boolean = false;
  isIEPanelExpanded: boolean = false;
  isURBPanelExpanded: boolean = false;
  panelIPHeight: number = 0;
  panelIFLHeight: number = 0;
  panelLOCHeight: number = 0;
  panelNORHeight: number = 0;
  panelIEHeight: number = 0;
  panelURBHeight: number = 0;

  togglePanel(opcion:any) {
    switch(opcion){
      case 'IP':
        this.isIPPanelExpanded = !this.isIPPanelExpanded;
        this.panelIPHeight = this.isIPPanelExpanded ? 500 : 0; // Ajusta la altura máxima del contenido
        break;
      case 'IFL':
        break;
      case 'LOC':
        break;
      case 'NOR':
        break;
      case 'IE':
        break;
      case 'URB':
        break;
    }
  }
}
