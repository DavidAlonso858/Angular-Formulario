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
  empleado: Empleado | null = null; // se le pasa al html

  constructor(private empleadoService: EmpleadoService) { }


  ngOnInit() {
    // se suscribe al observable
    this.empleadoService.cambioEmpleado$.subscribe((empleado: Empleado | null) => {
      console.log('Empleado recibido (Componente):', empleado); // Depuración
      this.empleado = empleado; // y se almacena en la variable de este componente
    });

    if (typeof localStorage !== 'undefined') {
      const storedEmpleado = localStorage.getItem('empleadoSeleccionado'); // nombre puesto en el service de empleado
      
      if (storedEmpleado) {
        this.empleado = JSON.parse(storedEmpleado); // convierte el json del localStorage a objeto
        this.empleadoService.setEmpleadoSeleccionado(this.empleado);

      }
    }
  }
}