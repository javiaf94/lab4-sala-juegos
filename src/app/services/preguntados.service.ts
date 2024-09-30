import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  constructor(private http: HttpClient) { }

  loadPokemones(): Observable<any[]> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .pipe(
        map(response => response.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
        })))
      );
  }

}