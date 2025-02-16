import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-formulario-empleado',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-empleado.component.html',
  styleUrl: './formulario-empleado.component.css'
})

export class FormularioEmpleadoComponent {
  empleadoForm: FormGroup;
  empleados: Empleado[] = [];

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService) {
    this.empleadoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]]
    })
  }


  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe((em) => {
      this.empleados = em;
    })
  }

  onSubmit() {
    if (this.empleadoForm.valid) {
      this.empleadoService.getEmpleados().subscribe((em) => {
        const newId = this.empleados.length + 1;
        const newEmpledo: Empleado = {
          id: newId,
          ...this.empleadoForm.value,
        };

        this.empleadoService.addEmpleado(newEmpledo).subscribe(() => {
          this.empleados.push(newEmpledo);
          this.empleadoForm.reset();
        })


      })
    }

  }
}
