import { Component } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public usuario = {
    usuario: '',
    password: ''
  }

  constructor(private authService: AuthService) {}
  
  validar() {
    this.authService.autenticar(this.usuario.usuario, this.usuario.password).subscribe(response => {
      console.log('auth', response);
    })
  }
}
