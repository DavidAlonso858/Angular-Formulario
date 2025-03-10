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
  // notifica cuando cambia el empleado seleccionado almacenando el ultimo valor emitido
  cambioEmpleado$ = this.empleadoCambio.asObservable();
  // lo convierte en un observable (hay que poner el $ para indicar que es observable)

  constructor(private http: HttpClient) { }

  setEmpleadoSeleccionado(empleado: Empleado | null) {
    console.log('Empleado seleccionado (Service):', empleado); // Depuración
    this.empleadoCambio.next(empleado);
    // notifica que el empleado ha cambiado

    // lo guarda en el localStorage del navegador y transforma en cadena porque solo puede almacenar cadenas
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

  getEmpleado(id: number) {
    return this.http.get<Empleado>(`${this.url}/${id}`);
  }

  addEmpleado(empleado: Empleado) {
    return this.http.post(this.url, empleado);
  }

}
