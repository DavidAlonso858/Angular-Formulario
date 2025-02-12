import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// herramientas de angular para formularios reactivos
import { LoggerService } from '../../services/logger.service';
// servicio que almacena los eventos
import { Empleado } from '../../model/empleado';
import { Cliente } from '../../model/cliente';
import { Event } from '../../model/event';
// las interfaces (modelos)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  // permite que funcione de forma independiente por eso mejor 
  // lo pongo siempre que a veces da fallo
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css']
})

export class FormularioVeterinario {
  // objeto de tipo FormGroup, lo que hace es agrupar los campos del formulario 
  eventForm: FormGroup;

  empleados: Empleado[] = [
    { id: 1, nombre: 'Paco' },
    { id: 2, nombre: 'Juana' },
    { id: 3, nombre: 'Carmen' },
    { id: 4, nombre: 'Andres' },
    { id: 5, nombre: 'Zahira' },
    { id: 6, nombre: 'Juan' },
  ];

  clientes: Cliente[] = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Maria'},
  ];

  // en el constructor utilizo un objeto que agrupa los campos del formulario (fb)
  //  y el loggerService para trabajar con los eventos
  constructor(private fb: FormBuilder, private loggerService: LoggerService) {
    this.eventForm = this.fb.group({ // relleno los campos poniendo cual es requerido

      enfermedad: ['', Validators.required],
      animal: ['', Validators.required],
      categoria: ['log', Validators.required], // log por defecto
      fecha: [null, Validators.required],
      empleado: ['', Validators.required],
      cliente: ['', Validators.required],
      status: [''],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) { // si los datos introducidos son validos
      const newEvent: Event = { // creo un evento con una id unica
        id: Date.now(),
        ...this.eventForm.value, // y copiando los datos del evento
        fechaCreacion: new Date(), // pongo la fecha de creacion
      };
      this.loggerService.addEvent(newEvent); // lo añado al service
      this.eventForm.reset(); // reseteo los valores que ya los he copiado
    }
  }
}