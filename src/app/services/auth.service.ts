import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, onAuthStateChanged, authState } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private auth: Auth) {

   }


  // Login con email y password
  login(email:string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  register(email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  //Logout
  logout(){
    return signOut(this.auth);
  }

  isLoggedIn(): Observable<any | null> {
    return authState(this.auth); // authState function that emits user or null
  }

}
