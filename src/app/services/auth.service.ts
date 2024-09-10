import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Login con email y password
  login(email:string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //Logout
  logout(){
    return signOut(this.auth);
  }

  // Obtener el usuario autenticado
  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
