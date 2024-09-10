import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../classes/usuario';
import { FormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  user: Usuario = new Usuario("" ,"");
  user_precargado: Usuario = new Usuario("test@test.com", "test123");

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }



  onSubmit() {
       this.authService.login(this.user.email, this.user.password).then((userCredential) => {
        this.router.navigate(['/home']);  // Redirige al home después del login exitoso
        //  console.log('Logged in:', userCredential);
      }).catch((error) => {
        console.error('Login error:', error);
      }); 
  }

  llenarUsuario()
  {
    this.user.email = this.user_precargado.email;
    this.user.password = this.user_precargado.password;
  }

}
