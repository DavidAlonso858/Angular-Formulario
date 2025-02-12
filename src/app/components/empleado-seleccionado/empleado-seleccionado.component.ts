import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../model/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-seleccionado',
  imports: [CommonModule],
  templateUrl: './empleado-seleccionado.component.html',
  styleUrls: ['./empleado-seleccionado.component.css']
})
export class EmpleadoSeleccionadoComponent implements OnInit {
  empleado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) { }


  ngOnInit() {
    this.empleadoService.cambioEmpleado$.subscribe((empleado: Empleado | null) => {
      console.log('Empleado recibido (Componente):', empleado); // Depuración
      this.empleado = empleado;
    });
  
    const storedEmpleado = localStorage.getItem('empleadoSeleccionado');
    if (storedEmpleado) {
      this.empleado = JSON.parse(storedEmpleado);
      this.empleadoService.setEmpleadoSeleccionado(this.empleado);
    }
  }
}