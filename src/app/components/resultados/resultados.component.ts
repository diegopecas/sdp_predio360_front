import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { MapService } from "src/app/common/services/map.service";
import { environment } from "src/environments/environment";
import swal from "sweetalert2";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.css"],
})
export class ResultadosComponent implements OnChanges, OnInit {
  @Output() accion = new EventEmitter();
  @Output() loteSeleccionado = new EventEmitter();
  @Output() cambioTipoConsulta = new EventEmitter();
  @Output() cambioCapaBuffer = new EventEmitter();
  // @Input() valores: any;
  // @Input() valorPuntoClick: any;
  @Input() parametros: any;

  // public identificacionPredio: any;
  // public puntoClick: any;
  public datos = [] as any[];
  private params = {} as any;
  public id: any;
  public lotes: any[] = [];
  public direccion: any;
  public chip: any;
  public cedula: any;
  public matricula: any;
  public currentIndex = -1;
  public currentIndexCapa = -1;
  public predioSeleccionado = {} as any;
  public puntoGaleria = {} as any;
  public capas = [] as any[];
  public isGIPanelExpanded: boolean = false;
  public isESPanelExpanded: boolean = false;
  public isECPanelExpanded: boolean = false;
  public isUBPanelExpanded: boolean = false;
  public isEPPanelExpanded: boolean = false;
  public panelGIHeight: number = 0;

  ngOnInit() {
    this.capas = environment.capasBuffer;
    this.mapService.predioClickObservable.subscribe((nuevoClick) => {
      // Aquí puedes ejecutar la sentencia que desees
      console.log('La variable del servicio ha cambiado:', nuevoClick);
      if(this.mapService.tipoSeleccion == "predios") {
        this.consultarPrediosByLotes();
      }
    });
  }

  constructor(
    private router: Router,
    private mapService: MapService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    
    this.params = changes["parametros"]["currentValue"];
    if (this.params) {
      console.log("PARAMS", this.params);
      switch (this.params.opcion) {
        case "consulta-seleccion":
          this.id = this.params.resultados.CODIGO_LOTE;
          this.consultarPrediosByLote();
          this.obtenerUbicacionLote(this.params.resultados.CODIGO_LOTE);
          break;
        case "consulta-direccion":
          this.direccion = this.params.direccion;
          this.consultarPrediosByDireccion(this.direccion[0]);
          this.cambioTipoConsulta.emit("consulta-seleccion");
          break;
        case "consulta-chip":
          this.chip = this.params.chip;
          this.consultarPrediosByChip();
          this.cambioTipoConsulta.emit("consulta-seleccion");
          break;
        case "consulta-matricula":
          this.matricula = this.params.matricula;
          this.consultarPrediosByMatricula();
          this.cambioTipoConsulta.emit("consulta-seleccion");
          break;
        case "consulta-cedula":
          this.cedula = this.params.cedula;
          this.consultarPrediosByCedula();
          this.cambioTipoConsulta.emit("consulta-seleccion");
          break;
        case "consulta-seleccion-multiple":
          this.lotes = this.mapService.elementosSeleccionados;
          // console.log("resultados por muchos", this.mapService.elementosSeleccionados, this.lotes);
          this.consultarPrediosByLotes();
          // this.cambioTipoConsulta.emit("consulta-seleccion");
          break;
      }
      this.mapService.buffer.medida = 0;
      this.mapService.tipoSeleccion = "predios";
    }
  }

  regresar() {
    this.accion.emit(true);
  }

  consultarPrediosByLote() {
    const response = this.mapService.consultarPrediosByLote(this.id);
    console.log("consulta por lote", response);
  }

  consultarPrediosByLotes() {
    this.currentIndex = -1;
    // const predios = this.mapService.consultarPrediosByLotes(this.lotes);
    const predios = this.mapService.consultarPrediosByLotes(this.mapService.elementosSeleccionados);
    predios
      .then((response: any) => {
        this.datos = response;
        this.mapService.buffer.medida = 0;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  consultarPrediosByDireccion(direccionConsulta: any) {
    console.log("CONSULTANDO POR", direccionConsulta)
    this.currentIndex = -1;
    const predios =
      this.mapService.consultarPrediosByDireccion(direccionConsulta);

    predios
      .then((response: any) => {
        if (response) {
          this.datos = response;
          this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
          this.mapService.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
        } else if (direccionConsulta !== this.direccion[1]) {
          swal
            .fire({
              title:
                "No se encontraron resultados, ¿desea hacer una búsqueda aproximada?",
              input: "radio",
              inputOptions: {
                Esquina: this.direccion[1],//.replaceAll("%", " "),
                Aproximada: this.direccion[0]
                  .replaceAll("%", " ")
                  .replace("KR", "AK")
                  .replace("CL", "AC"),
                Comodin: "Comodín: " + this.direccion[0].replaceAll(" ", "%"),
              },
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: "Buscar",
              denyButtonText: "No",
            })
            .then((result: any) => {
              console.log(result);
              if (result.isConfirmed) {
                switch (result.value) {
                  case "Esquina":
                    console.log("consulta esquina")
                    this.consultarPrediosByDireccion(this.direccion[1]);
                    break;
                  case "Aproximada":
                    console.log("consulta aproximada")
                    this.consultarPrediosByDireccion(
                      this.direccion[0].replace("KR", "AK").replace("CL", "AC")
                    );
                    break;
                  case "Comodin":
                    console.log("consulta por comodín")
                    this.consultarPrediosByDireccion(
                      this.direccion[0].replaceAll(" ", "%")
                    );
                    break;
                }
              } else {
                this.accion.emit(true);
              }
            });
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  consultarPrediosByChip() {
    this.currentIndex = -1;
    const predios = this.mapService.consultarPrediosByChip(this.chip);
    predios
      .then((response: any) => {
        console.log("consulta por chip", response);
        if (response.length > 0) {
          this.datos = response;
          this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
          this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  consultarPrediosByCedula() {
    this.currentIndex = -1;
    const predios = this.mapService.consultarPrediosByCedula(this.cedula);
    predios
      .then((response: any) => {
        this.datos = response;
        this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
        this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  consultarPrediosByMatricula() {
    this.currentIndex = -1;
    const predios = this.mapService.consultarPrediosByMatricula(this.matricula);
    predios
      .then((response: any) => {
        this.datos = response;
        this.loteSeleccionado.emit(this.datos[0].GN_CODIGO_LOTE);
        this.obtenerUbicacionLote(this.datos[0].GN_CODIGO_LOTE);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  togglePanel(opcion: any) {
    console.log("CAMBIO PANEL", opcion);
    switch (opcion) {
      case "GI":
        this.isGIPanelExpanded = !this.isGIPanelExpanded;
        break;
      case "ES":
        this.isESPanelExpanded = !this.isESPanelExpanded;
        break;
      case "EC":
        this.isECPanelExpanded = !this.isECPanelExpanded;
        break;
      case "UB":
        this.isUBPanelExpanded = !this.isUBPanelExpanded;
        break;
      case "EP":
        this.isEPPanelExpanded = !this.isEPPanelExpanded;
        break;
    }
  }

  seleccionarPredio() {
    this.predioSeleccionado = this.datos[this.currentIndex];
    // this.loteSeleccionado.emit(this.predioSeleccionado.GN_CODIGO_LOTE);
    this.mapService.seleccionarPredioByLote(this.predioSeleccionado.GN_CODIGO_LOTE);
  }

  obtenerUbicacionLote(lote: any) {
    const ubicacion = this.mapService.obtenerUbicacionLote(lote);
    ubicacion
      .then((response: any) => {
        console.log(response);
        this.mapService.centrar(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  seleccionarCapaBuffer() {
    this.cambioCapaBuffer.emit(this.capas[this.currentIndexCapa]);
  }

  generarFicha(p: any): void {
    const url = ['/ficha', p.CODIGO_PROYECTO];
    window.open('/#'+this.router.serializeUrl(this.router.createUrlTree(url)), '_blank');
  }
}
