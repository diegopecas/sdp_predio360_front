import { Component } from '@angular/core';
import { faPlus, faMinus, faHouse, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  faPlus = faPlus;
  faMinus = faMinus;
  faHouse = faHouse;
  faPrint = faPrint;

  emitirEvento(valor:any) {

  }
}
