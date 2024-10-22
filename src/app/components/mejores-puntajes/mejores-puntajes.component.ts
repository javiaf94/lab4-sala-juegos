import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, collection, collectionData, query, orderBy, limit, where  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

interface Score {
  user: string;
  puntaje: number;
  juego: string;
  fecha: Date;
}

@Component({
  selector: 'app-mejores-puntajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mejores-puntajes.component.html',
  styleUrl: './mejores-puntajes.component.css'
})
export class MejoresPuntajesComponent {

  scores: { [key: string]: Score[] } = {}; // Especifica el tipo de scores

  constructor(private firestore: Firestore)
  {
 
  }

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    const juegos = ['ahorcado', 'mayormenor', 'preguntados', 'simon'];

    juegos.forEach(juego => {
      const scoresRef = collection(this.firestore, 'puntajes'); // Referencia a la colección

      // Filtro por dificultad, luego ordenamos por puntaje y limitamos a 5
      const q = query(
        scoresRef, 
        where('juego', '==', juego), // Filtramos por la dificultad actual
        orderBy('puntaje','desc'), 
        limit(5)
      );

      // Consultamos y procesamos los datos
      collectionData(q, { idField: 'id' }).pipe(
        map((data: any[]) => 
          data.map(score => ({
            user: score.usuario,  // Asegúrate de que este es el campo correcto
            puntaje: score.puntaje,
            juego: score.juego,
            fecha: score.fecha
          }))
        )
      ).subscribe((scores: Score[]) => {
        this.scores[juego] = scores;
      });
    });
  }



}
