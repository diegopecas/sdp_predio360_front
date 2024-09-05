import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { loadModules } from "esri-loader";
import { MapService } from 'src/app/common/services/map.service';
import swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-consulta-galeria',
  templateUrl: './consulta-galeria.component.html',
  styleUrls: ['./consulta-galeria.component.css']
})
export class ConsultaGaleriaComponent implements OnInit {
  @Output() accion = new EventEmitter();
  @Output() seleccionProyecto = new EventEmitter();

  public datos:any;
  public titulos = [] as any[];

  public currentIndex = -1;

  constructor(private mapService:MapService,
    private router: Router,
    private sanitizer: DomSanitizer) {

  }

  seleccion(opcion: any) {
    if(opcion == 'menu') {
      this.mapService.switchGaleria(false);
    }
    this.accion.emit(opcion);
  }

  ngOnInit(): void {
    this.titulos = environment.capaGaleria.atributos;
      this.mapService.consultarProyectos().then((response:any)=>{
        console.log("response", response);
        this.datos = response;
      }).catch((error:any)=>{
        console.log("error", error);
      });
  }

  seleccionar() {
    if(this.currentIndex >= 0) {
      console.log('PROYECTO SELECCIONADO', this.datos[this.currentIndex])
      // this.seleccionProyecto.emit({latitud: this.datos[this.currentIndex].latitud, longitud: this.datos[this.currentIndex].longitud});
      // this.mapService.seleccionProyectoGaleria({latitud: this.datos[this.currentIndex].latitud, longitud: this.datos[this.currentIndex].longitud});
      this.mapService.seleccionElemento(this.datos[this.currentIndex].OBJECTID,"galeria");
    }
  }

  public verMasGaleria = false;

  ver(){
    this.verMasGaleria = !this.verMasGaleria;
  }

  htmlSecure(unsafeHtml:any){
    return this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
  }

  tituloHtml(value:any){
    return this.htmlSecure(value+': ');
  }
  
  sortBy(values:any[], prop: string) {
    return values.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  generarFicha(p: any): void {
    const url = ['/ficha-proyecto', p.CODIGO_PROYECTO];
    window.open('/#'+this.router.serializeUrl(this.router.createUrlTree(url)), '_blank');
  }

}
