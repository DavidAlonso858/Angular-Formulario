import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../model/empleado';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  // URL que nos da los empleados
  url = "http://localhost:3000/empleados";

  private empleadoCambio = new BehaviorSubject<Empleado | null>(null);
  cambioEmpleado$ = this.empleadoCambio.asObservable();

  constructor(private http: HttpClient) { }

  setEmpleadoSeleccionado(empleado: Empleado | null) {
    console.log('Empleado seleccionado (Service):', empleado); // Depuración
    this.empleadoCambio.next(empleado);
    if (empleado) {
      localStorage.setItem('empleadoSeleccionado', JSON.stringify(empleado));
    } else {
      localStorage.removeItem('empleadoSeleccionado');
    }
  }

  // Obtener empleados desde la API
  getEmpleados() {
    return this.http.get<Empleado[]>(this.url);
  }
}
