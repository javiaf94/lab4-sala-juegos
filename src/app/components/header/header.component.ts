import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Auth  } from '@angular/fire/auth';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, from } from 'rxjs';
import { map, take, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn = false;
  userEmail!: string;


  constructor(public auth: AuthService){

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
  }
   

  logout()
  {
    this.auth.logout();
  }


}
