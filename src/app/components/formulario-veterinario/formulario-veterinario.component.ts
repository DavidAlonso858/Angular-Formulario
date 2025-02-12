import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// herramientas de angular para formularios reactivos
import { LoggerService } from '../../services/logger.service';
// servicio que almacena los eventos
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../model/empleado';
import { Event } from '../../model/event';
// las interfaces (modelos)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-event-form',
  standalone: true,
  // permite que funcione de forma independiente por eso mejor 
  // lo pongo siempre que a veces da fallo
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css']
})

export class FormularioVeterinario {
  // objeto de tipo FormGroup, lo que hace es agrupar los campos del formulario 
  eventForm: FormGroup;
  empleados: Empleado[] = [];

  bsConfig = { // el calendario
    dateInputFormat: 'DD-MM-YYYY',
    isAnimated: true,
    containerClass: 'theme-green'
  }

  // en el constructor utilizo un objeto que agrupa los campos del formulario (fb)
  //  y el loggerService para trabajar con los eventos
  constructor(private fb: FormBuilder, private loggerService: LoggerService, private empleadoService: EmpleadoService) {

    this.eventForm = this.fb.group({ // relleno los campos poniendo cual es requerido

      enfermedad: ['', Validators.required],
      animal: ['', Validators.required],
      categoria: ['leve', Validators.required], // log por defecto
      fecha: [null, Validators.required],
      empleado: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }

  // lo suscribo del service de empleado
  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe((e) => {
      this.empleados = e;
      // guardo en el array cada empleado conseguido de la funcion que los pilla del json
    });
    console.log(this.empleados);
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