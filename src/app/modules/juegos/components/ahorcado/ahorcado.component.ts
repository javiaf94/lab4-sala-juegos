import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  palabra: string = 'angular';
  palabras: string[] = ['carpeta', 'manzana', 'ratones', 'dibujo', 'florero', 'mariposa', 'computar', 'cangrejo', 'calidad', 'maravilla', 'elefante', 'guitarra', 'tortuga', 'plomero', 'cuchillo', 'chocolate', 'piscina', 'camarero', 'salmon', 'brillante', 'corredor', 'fideos', 'abogado', 'hermosa', 'sorpresa', 'transito', 'camiseta', 'acuerdo', 'caminos', 'vacaciones', 'estudiante', 'bailando', 'fantasma', 'acelga', 'misterio', 'activista', 'aviones', 'cocinado', 'cazador', 'eleccion', 'disfraz', 'escuela', 'floresta', 'pintura', 'tranquilo', 'universo', 'hermanos', 'festival', 'carnaval', 'estrellas', 'cercanas', 'planchas', 'escenarios', 'tendencia', 'hormiga', 'temporada', 'cercanas', 'informes', 'sustento', 'carretas', 'vibrante', 'cosechas', 'asuntos', 'bailarin', 'activismo', 'proyectos', 'dinamica', 'inversion', 'desarrollo', 'tropical', 'cercania', 'calendario', 'reflejo', 'caminante', 'diversidad', 'creador', 'maraton', 'explorar', 'tendencias', 'caminos', 'sociedad', 'propuesta', 'nutricion', 'planificar', 'salidas', 'visiones', 'diferente', 'naturales', 'reciclaje', 'luzcita', 'cocina', 'historias', 'tolerancia', 'tareas', 'actitud', 'alimentar', 'estrategia', 'diferencia', 'refrescos', 'desempeno', 'motivado', 'sociedades', 'justicia', 'poderoso', 'terreno', 'revelar', 'colegio', 'patente', 'trabajo', 'poblaciones', 'vegetales', 'actualidad', 'construccion', 'recursos', 'poderes', 'iniciativas', 'negocio', 'confirmar', 'coincidencia', 'destino', 'razonamiento', 'protagonista', 'percepcion', 'alternativa', 'desempenando', 'acercar', 'reforma', 'participantes', 'jardin', 'educador', 'cuidadores', 'caminos', 'universidades', 'revolucion', 'estimulo', 'cambio', 'analisis', 'fabulista', 'desarrollo', 'organizacion', 'conflicto', 'paseos', 'satisfaccion', 'pensamiento', 'caminando', 'caracter', 'superar', 'practicante', 'celebracion', 'solidaridad', 'marcadores', 'pueblo', 'fortalezas', 'revisar', 'adaptaciones', 'ejercicio', 'educacion', 'entidades', 'dondequiera', 'fundamentales', 'preparar', 'fabrica', 'tradiciones', 'relaciones', 'producido', 'frustracion', 'educativas', 'beneficios', 'evolucion', 'cohesion', 'responsabilidad', 'preocupaciones', 'ciberespacio', 'observaciones', 'emprendedores', 'valoraciones', 'comunicados', 'asociaciones', 'creacion', 'evaluacion'];
  letrasAlfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letrasSeleccionadas: string[] = [];
  intentos: number = 6;

  constructor(private router: Router)
  {

  }

  ngOnInit() {
    const indiceAleatorio: number = Math.floor(Math.random() * this.palabras.length);
    this.palabra = this.palabras[indiceAleatorio];
  }

  get letras() {
    return this.palabra.split('').map(letter => (this.letrasSeleccionadas.includes(letter) ? letter : '_')).join(' ');
  }

  seleccionarLetra(letra: string) {
    if (!this.letrasSeleccionadas.includes(letra)) {
      this.letrasSeleccionadas.push(letra);
      //this.reproducirVideo('yesVideo');
      if (!this.palabra.includes(letra)) {
        this.intentos--;
        //this.reproducirVideo('noVideo');
      }
    }
  }

  // reproducirVideo(videoId: string) {
  //   // Ocultar todos los videos
  //   const videos = document.querySelectorAll('.response-video');
  //   videos.forEach(video => {
  //     const vid = video as HTMLVideoElement; // Asegúrate de que sea un HTMLVideoElement
  //     vid.pause();
  //     vid.currentTime = 0; // Reiniciar el video
  //     vid.style.display = 'none'; // Cambia 'video.style' a 'vid.style'
  //   });
  
  //   // Reproducir el video correspondiente
  //   const videoElement = document.getElementById(videoId) as HTMLVideoElement;
  //   if (videoElement) {
  //     videoElement.style.display = 'block'; // Mostrar el video
  //     videoElement.play(); // Reproducir el video
  //      // Actualiza el dibujo

  //   }
  // }
  
    isJuegoTerminado() {
      return this.intentos <= 0 || this.palabra.split('').every(letter => this.letrasSeleccionadas.includes(letter));
    }
  
    isPalabraCompletada(): boolean {
      return this.palabra.split('').every(letter => this.letrasSeleccionadas.includes(letter));
    }

    iniciarJuego() {
      this.intentos = 6;
      this.letrasSeleccionadas = [];
      this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  }

  volverAJugar() {
      this.iniciarJuego();
  }

  volverAlInicio() {
    this.router.navigate(["/home"]);
  }
  }