import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent} from './components/quien-soy/quien-soy.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosModule } from './modules/juegos/juegos.module';
import { MejoresPuntajesComponent } from './components/mejores-puntajes/mejores-puntajes.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mejores-puntajes', component: MejoresPuntajesComponent, canActivate: [authGuard] },
    { path: 'encuesta', component: EncuestaComponent, canActivate: [authGuard] },
    { path: 'juegos', loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule)},
    { path: '**', redirectTo: '/home', pathMatch: "full"},

];
