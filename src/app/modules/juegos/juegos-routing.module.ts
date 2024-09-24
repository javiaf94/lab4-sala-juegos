import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayormenorComponent } from './components/mayormenor/mayormenor.component';

const routes: Routes = [
  {
    path : 'ahorcado',
    component: AhorcadoComponent
    //loadComponent: () => import('./components/ahorcado/ahorcado.component').then(c => c.AhorcadoComponent)
  },
  {
    path: 'mayormenor',
    component: MayormenorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
