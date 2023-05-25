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
  @Input() valorPuntoClick: any;

  public identificacionPredio: any;
  public puntoClick: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.identificacionPredio = changes["valores"]["currentValue"];
    this.puntoClick = changes["valorPuntoClick"]["currentValue"];
    console.log("ngOnChanges ResultadosComponent", this.identificacionPredio.resultados);
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
  isGIPanelExpanded: boolean = false;
  panelIPHeight: number = 0;
  panelIFLHeight: number = 0;
  panelLOCHeight: number = 0;
  panelNORHeight: number = 0;
  panelIEHeight: number = 0;
  panelURBHeight: number = 0;
  panelGIHeight: number = 0;

  togglePanel(opcion:any) {
    switch(opcion){
      case 'IP':
        this.isIPPanelExpanded = !this.isIPPanelExpanded;
        this.panelIPHeight = this.isIPPanelExpanded ? 500 : 0;
        break;
      case 'IFL':
        this.isIFLPanelExpanded = !this.isIFLPanelExpanded;
        this.panelIFLHeight = this.isIFLPanelExpanded ? 500 : 0;
        break;
      case 'LOC':
        this.isLOCPanelExpanded = !this.isLOCPanelExpanded;
        this.panelLOCHeight = this.isLOCPanelExpanded ? 500 : 0;
        break;
      case 'NOR':
        this.isNORPanelExpanded = !this.isNORPanelExpanded;
        this.panelNORHeight = this.isNORPanelExpanded ? 500 : 0;
        break;
      case 'IE':
        this.isIEPanelExpanded = !this.isIEPanelExpanded;
        this.panelIEHeight = this.isIEPanelExpanded ? 500 : 0;
        break;
      case 'URB':
        this.isURBPanelExpanded = !this.isURBPanelExpanded;
        this.panelURBHeight = this.isURBPanelExpanded ? 500 : 0;
        break;
      case 'GI':
        this.isGIPanelExpanded = !this.isGIPanelExpanded;
        this.panelGIHeight = this.isGIPanelExpanded ? 500 : 0;
        break;
    }
  }
}
