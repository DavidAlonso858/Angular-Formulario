import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoggerService } from '../../services/logger.service';
import { Empleado } from '../../model/empleado';
import { Cliente } from '../../model/cliente';
import { Event } from '../../model/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css']
})

export class FormularioVeterinario {

  eventForm: FormGroup;

  empleados: Empleado[] = [
    { id: 1, nombre: 'Paco' },
    { id: 2, nombre: 'Juana' },
  ];

  clientes: Cliente[] = [
    { id: 1, name: 'Ivan', animal: 'perro' },
    { id: 2, name: 'Maria', animal: 'huron' },
  ];


  constructor(private fb: FormBuilder, private loggerService: LoggerService) {
    this.eventForm = this.fb.group({

      enfermedad: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['log', Validators.required],
      fecha: [null, Validators.required],
      empleado: ['', Validators.required],
      cliente: ['', Validators.required],
      status: [''],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent: Event = {
        id: Date.now(),
        ...this.eventForm.value,
        fechaCreacion: new Date(),
      };
      this.loggerService.addEvent(newEvent);
      this.eventForm.reset();
    }
  }
}