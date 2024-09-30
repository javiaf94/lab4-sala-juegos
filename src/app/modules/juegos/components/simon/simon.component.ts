import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent {
  sequence: string[] = [];
  playerSequence: string[] = [];
  colors = ['red', 'green', 'blue', 'yellow'];
  activeColor: string = '';
  gameStarted = false;
  gameOver = false;
  currentStep = 0;
  playerCanClick = false;

  

  constructor(private router: Router) { }

  startGame() {
    this.gameStarted = true;
    this.gameOver = false;
    this.sequence = [];
    this.playerSequence = [];
    this.currentStep = 0;
    this.nextRound();
  }

  nextRound() {
    this.playerCanClick = false; // Bloqueamos los clics durante la animación de la secuencia
    this.playerSequence = [];
    this.currentStep = 0;
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.sequence.push(randomColor);
    this.playSequence();
  }

  playSequence() {
    this.playerCanClick = false; // Bloquear clics durante la animación de la secuencia
    const delay = 500;
    
    this.sequence.forEach((color, index) => {
      setTimeout(() => {
        this.activeColor = color; // Activar color
        setTimeout(() => {
          this.activeColor = ''; // Desactivar color
        }, 300); // Mantener el color activo por 300ms
      }, delay * index); // Tiempo para cada color en la secuencia
    });

    // Habilitar los clics del jugador una vez que termine la secuencia
    setTimeout(() => {
      this.playerCanClick = true; // Permitir clics
    }, delay * this.sequence.length);
}

playerClick(color: string) {
    if (!this.gameStarted || this.gameOver || !this.playerCanClick) return;

    this.playerSequence.push(color);
    this.activeColor = color; // Mostrar el color clickeado

    // Aquí, en lugar de un setTimeout, simplemente podemos dejar el color activo
    // Un breve tiempo, y luego lo desactivamos
    setTimeout(() => {
      this.activeColor = ''; // Limpiar el color activo
    }, 300);

    if (this.sequence[this.currentStep] !== color) {
      this.gameOver = true;
      this.playerCanClick = false; // Bloquear clics una vez que se pierda
      return;
    }

    this.currentStep++; // Avanzar al siguiente paso

    if (this.currentStep === this.sequence.length) {
      // Si el jugador completa la secuencia correctamente
      this.playerCanClick = false; // Bloquear clics hasta la próxima secuencia
      setTimeout(() => this.nextRound(), 1000); // Esperar un segundo antes de la siguiente ronda
    }
}

  volverAlInicio() {
    this.router.navigate(["/home"]);
  }
}
