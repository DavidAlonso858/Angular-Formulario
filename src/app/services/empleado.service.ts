import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {
  // URL QUE NOS DA AL EJECUTAR EL JSON
  url = "http://localhost:3000/empleados";

  constructor(private http: HttpClient) { }
  
  getEmpleados() {
    return this.http.get<Empleado[]>(this.url);
  }

}
