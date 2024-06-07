import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import swal from "sweetalert2";

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {
  public invitacion = "";

  ngOnInit(){
    this.invitacion = environment.textoEncuesta;
  }

  verAyuda() {
    swal.fire({
      title: "¡Bienvenido!",
      background: "#000000ff",
      html: `
      <video width="320" height="240" controls>
        <source src="/assets/Predio360.mp4" type="video/mp4">
        Tu navegador no soporta la etiqueta de video.
      </video>
      `,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Ingresar
      `
    });
  }
}
