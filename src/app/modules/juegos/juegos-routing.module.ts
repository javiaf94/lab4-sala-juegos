import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayormenorComponent } from './components/mayormenor/mayormenor.component';

const routes: Routes = [
  {
    path : 'ahorcado',
    loadComponent: () => import('./components/ahorcado/ahorcado.component').then(c => c.AhorcadoComponent)
  },
  {
    path: 'mayormenor',
    loadComponent: () => import('./components/mayormenor/mayormenor.component').then(c => c.MayormenorComponent)
  },
  { path: 'preguntados',
  loadComponent: () => import('./components/preguntados/preguntados.component').then(c => c.PreguntadosComponent)
},
{ path: 'sudoku',
  loadComponent: () => import('./components/simon/simon.component').then(c => c.SimonComponent)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
