import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //AhorcadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JuegosRoutingModule,

  ],
  exports: [
    //AhorcadoComponent
  ]
})
export class JuegosModule { }


