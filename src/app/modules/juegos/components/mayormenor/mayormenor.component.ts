import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { AuthService } from '../../../../services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent {
  deck: { number: number, suit: string }[] = [];
  currentCard: { number: number, suit: string } | null = null;
  nextCard: { number: number, suit: string } | null = null;
  score: number = 0;
  attemptsLeft: number = 5;
  gameEnded: boolean = false;

  userEmail!: string;


  suits = ['oro', 'espada', 'basto', 'copa'];

  constructor(private router:Router, private firestore: Firestore, private auth: AuthService) {
    this.resetGame();
  }

  ngOnInit()
  {
    this.auth.isLoggedIn().pipe(
      map(user => ({
        loggedIn: !!user, // Convert user object to boolean (true/false)
        email: user ? user.email : null // Retrieve user email if logged in
      }))
    ).subscribe(({ email }) => {
      this.userEmail = email; // Update userEmail attribute
    }); 
  }
  // Inicializa un mazo de 52 cartas (1-12 de cada palo de la baraja española)
  resetGame(): void {
    this.deck = this.generateDeck();
    this.currentCard = this.deck.pop() || null;
    this.score = 0;
    this.attemptsLeft = 5;
    this.gameEnded = false;
  }

  // Genera el mazo de 48 cartas (1 al 12 de cada palo)
  generateDeck(): { number: number, suit: string }[] {
    let deck = [];
    for (let suit of this.suits) {
      for (let i = 1; i <= 12; i++) {
        deck.push({ number: i, suit });
      }
    }
    return this.shuffleDeck(deck);
  }

  // Baraja el mazo de cartas
  shuffleDeck(deck: { number: number, suit: string }[]): { number: number, suit: string }[] {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  // Verifica si la siguiente carta es mayor o menor
  guess(guess: 'mayor' | 'menor'): void {
    if (!this.currentCard || this.attemptsLeft <= 0 || this.deck.length === 0) {
      this.gameEnded = true;
      return;
    }

    this.nextCard = this.deck.pop() || null;

    if (this.nextCard) {
      if (
        (guess === 'mayor' && this.nextCard.number >= this.currentCard.number) ||
        (guess === 'menor' && this.nextCard.number < this.currentCard.number)
      ) {
        this.score++;
      } else {
        this.attemptsLeft--;
      }
    }

    this.currentCard = this.nextCard;

    if (this.attemptsLeft <= 0 || this.deck.length === 0) {
      this.guardarPuntaje();
      this.gameEnded = true;
    }
  }

  volverAlInicio() {
    this.router.navigate(["/home"]);
  }

  guardarPuntaje() {
    let col = collection(this.firestore, 'puntajes');
    addDoc(col, { usuario: this.userEmail, puntaje: this.score, fecha: new Date(), juego:"mayormenor"})
}
}