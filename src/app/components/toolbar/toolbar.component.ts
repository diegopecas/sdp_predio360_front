import { Component, EventEmitter, Output } from '@angular/core';
import { faPlus, faMinus, faHouse, faPrint } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() accion2d3d = new EventEmitter();
  @Output() capasReferencia = new EventEmitter();
  @Output() anadirCapaReferencia = new EventEmitter();
  
  faPlus = faPlus;
  faMinus = faMinus;
  faHouse = faHouse;
  faPrint = faPrint;

  public opcion2D3D = '3D';
  private capasReferenciaActivas = false;

  emitirEvento(valor:any) {
    // to-do
  }

  emitirEvento2d3d(valor:any) {
    this.opcion2D3D = valor;
    this.accion2d3d.emit(this.opcion2D3D);
  }

  activarCapasReferencia() {
    this.capasReferenciaActivas = !this.capasReferenciaActivas;
    this.capasReferencia.emit(this.capasReferenciaActivas);
  }

  anadirCapas() {
    swal.fire({
      title: 'Agregar servicio rest',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      /*showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },*/
      // allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      console.log('URL',result)
      if (result.isConfirmed) {
        this.anadirCapaReferencia.emit(result.value);
      }
    })
  }

  seleccionPorBuffer() {
    
  }
}
