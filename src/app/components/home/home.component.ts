import { Component } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public usuario = {
    usuario: '',
    clave: ''
  }

  public session = false;

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
