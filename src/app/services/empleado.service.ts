import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../model/empleado';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {
  // URL QUE NOS DA AL EJECUTAR EL JSON
  url = "http://localhost:3000/empleados";

  constructor(private http: HttpClient) { }
  private empleadoCambio = new BehaviorSubject<Empleado | null>(null);
  cambioEmpleado$ = this.empleadoCambio.asObservable();

  updateEmpleado() {
    return this.empleadoCambio.asObservable();
  }

  getEmpleados() {
    return this.http.get<Empleado[]>(this.url);
  }

}
