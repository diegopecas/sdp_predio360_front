import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { environment } from 'src/environments/environment';
import swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario = {
    usuario: '',
    clave: ''
  }

  public session = false;

  ngOnInit() {
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

  constructor(private authService: AuthService) {}
  
  validar() {
    console.log("clave", this.usuario.usuario, this.usuario.clave, environment.auth);
    if(this.usuario.usuario == environment.auth.usuario && this.usuario.clave == environment.auth.clave) {
      this.session = true;
      console.log("Se valida el ingreso");
    } else {
      this.session = false;
      console.log("Se rechaza la validación del ingreso");
    }
    /*this.authService.autenticar(this.usuario.usuario, this.usuario.password).subscribe(response => {
      console.log('auth', response);
    })*/
  }
}
