import { Component, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../classes/usuario';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: Usuario = new Usuario("" ,"");
  new_user: Usuario = new Usuario ("","");
  user_precargado: Usuario = new Usuario("test@test.com", "test123");

  
  isSignUp: boolean = false;

  loggedUser: string | null = "";
  flagError: boolean = false;
  msjError: string = "";

  constructor( private authService: AuthService, private router: Router, private firestore: Firestore) {
    
  }


  showErrorAlert()
  {
    Swal.fire( { title: 'Error!',
      text: 'El usuario no existe o la contraseña es incorrecta',
      icon: 'error',
      confirmButtonColor: '#4CAF50',
      background: '#f2f2f2',
      heightAuto: false
    });
  }

  toggleForm(isSignUp: boolean) {
    this.isSignUp = isSignUp;
  }

  onLogIn() {
       this.authService.login(this.user.email, this.user.password).then((userCredential) => {
        let col = collection(this.firestore, 'logins');
        addDoc(col, { fecha: new Date(), "user": this.user.email});
        this.loggedUser = userCredential.user.email;
        console.log(this.loggedUser);
        this.router.navigate(['/home']);  // Redirige al home después del login exitoso
        //  console.log('Logged in:', userCredential);
      }).catch((error) => {
        this.showErrorAlert();
        console.error('Login error:', error);
      }); 
  }

  onSignUp() {
    this.authService.register(this.new_user.email, this.new_user.password).then((res) => {
      if (res.user.email !== null) this.loggedUser = res.user.email;
      
      this.flagError = false;

      Swal.fire( { title: 'Registro exitoso',
        text: 'El usuario se creo correctamente. Será redirigido el inicio en un momento...',
        icon: 'success',
        confirmButtonColor: '#4CAF50',
        background: '#f2f2f2',
        heightAuto: false,
        timer: 3000
      });

      this.router.navigate(['/home']);
    }).catch((e) => {
      this.flagError = true;
  
      switch (e.code) {
        case "auth/invalid-email":
          this.msjError = "Email inválido";
          break;
        case "auth/email-already-in-use":
          this.msjError = "Email ya en uso";
          break;
        default:
          this.msjError = e.message; // Mostrar el mensaje del error real
          break;
      }
      Swal.fire( { title: 'Error!',
        text: this.msjError,
        icon: 'error',
        confirmButtonColor: '#4CAF50',
        background: '#f2f2f2',
        heightAuto: false
      })  
    });
  }


  llenarUsuario()
  {
    this.user.email = this.user_precargado.email;
    this.user.password = this.user_precargado.password;
  }

}
