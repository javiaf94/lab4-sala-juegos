import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {

  encuestaForm!: FormGroup;
  caracteristicas: string[] = [];
  juegoSeleccionado: string = '';
  constructor(private firestore: Firestore, private fb: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.encuestaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(19), Validators.max(98)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      caracteristicas: [[], [Validators.required]],
      juego: ['', [Validators.required]],
      comentario: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  async enviarEncuesta(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    if (this.encuestaForm.valid) {
      const encuestaData = {
        ...this.encuestaForm.value,
        fecha: new Date() // Agregar la fecha de envío
      };

      try {
        const encuestaRef = collection(this.firestore, 'encuestas');
        await addDoc(encuestaRef, encuestaData);
        console.log('Encuesta guardada exitosamente!');

        Swal.fire( { title: 'Muchas gracias!',
          text: 'Se enviaron sus respuestas. Será redirigido el inicio',
          icon: 'success',
          confirmButtonColor: '#4CAF50',
          background: '#f2f2f2',
          heightAuto: false,
        });

        this.router.navigate(['/home']);

        this.encuestaForm.reset(); // Reiniciar el formulario tras el envío exitoso
      } catch (error) {
        Swal.fire( { title: 'Error!',
          text: 'Error al enviar el formulario',
          icon: 'error',
          confirmButtonColor: '#4CAF50',
          background: '#f2f2f2',
          heightAuto: false
        })  
        console.error('Error al guardar la encuesta: ', error);
        // Manejar el error (mostrar un mensaje al usuario, etc.)
      }
    } else {
      Swal.fire( { title: 'Error!',
        text: 'El formulario es invalido, asegurese de llenar los campos correctamente',
        icon: 'error',
        confirmButtonColor: '#4CAF50',
        background: '#f2f2f2',
        heightAuto: false
      })  
      console.error('El formulario no es válido.');
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  }

  // Métodos para manejar cambios en las opciones
  onCheckboxChange(value: string) {
    const index = this.caracteristicas.indexOf(value);
    if (index === -1) {
      this.caracteristicas.push(value); // Agregar si no está presente
    } else {
      this.caracteristicas.splice(index, 1); // Eliminar si ya está presente
    }
    this.encuestaForm.patchValue({ caracteristicas: this.caracteristicas }); // Actualizar el FormGroup
  }

  onRadioChange(value: string) {
    this.juegoSeleccionado = value; // Establecer el juego seleccionado
    this.encuestaForm.patchValue({ juego: this.juegoSeleccionado }); // Actualizar el FormGroup
  }
}