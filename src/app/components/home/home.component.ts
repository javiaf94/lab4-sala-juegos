import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private router: Router, private auth: AuthService) {}

  isLoggedIn = false;
  userEmail!: string;

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


  rutear(ruta:string){
    console.log('Navegando a /ruta-deseada');
    this.router.navigate([ruta]);
  }

}


   

