import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription, map, pipe, filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  isChatOpen: boolean = false; 
  msg: string = '';    
  private sub!:Subscription;
  public msgCollection:any[] = [];

  isLoggedIn = false;
  userEmail!: string;



  constructor(private firestore: Firestore, private auth: AuthService, private router: Router)
  {

  }

  ngOnInit()
  {
    this.auth.isLoggedIn().pipe(
      map(user => ({
        loggedIn: !!user, // Convert user object to boolean (true/false)
        email: user ? user.email : null // Retrieve user email if logged in
      }))
    ).subscribe(({ loggedIn, email }) => {
      this.isLoggedIn = loggedIn; // Update isLoggedIn flag
      this.userEmail = email; // Update userEmail attribute
    });
    this.TraerMensajes();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isChatOpen = false;
      });

  }

  ngOnDestroy()
  {

  }
  
  AbrirChat() {
    this.isChatOpen = !this.isChatOpen;  
  }

  EnviarMensaje() {
    if (this.msg.trim()) {
      let col = collection(this.firestore, 'chat');
      addDoc(col, { fecha: new Date(), "user": this.userEmail, mensaje: this.msg})
      this.msg = '';  // Limpia el input después de enviar el mensaje
    }
  }

  TraerMensajes(){
    let col = collection(this.firestore, 'chat');
    const observable:Observable<any[]> = collectionData(col) as Observable<any>;
    this.sub = observable.pipe(map(paises => paises.sort((a,b) => {
      if (a.fecha < b.fecha) {
        return -1;
      } else if (a.fecha > b.fecha) {
        return 1;
      } else {
        return 0;
      }
    }))).subscribe((respuesta:any) => {
      
      //Actualizamos nuestro array
      this.msgCollection = respuesta;
    })

  }

  
}