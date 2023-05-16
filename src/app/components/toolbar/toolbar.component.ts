import { Component, EventEmitter, Output } from '@angular/core';
import { faPlus, faMinus, faHouse, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() accion2d3d = new EventEmitter();
  
  faPlus = faPlus;
  faMinus = faMinus;
  faHouse = faHouse;
  faPrint = faPrint;

  public opcion2D3D = '3D';

  emitirEvento(valor:any) {
    // to-do
  }

  emitirEvento2d3d(valor:any) {
    this.opcion2D3D = valor;
    this.accion2d3d.emit(this.opcion2D3D);
  }

}
