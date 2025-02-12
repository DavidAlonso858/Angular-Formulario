import { Empleado } from "./empleado";

export interface Event {
    id: number;
    enfermedad: string;
    animal: string;
    categoria: 'log' | 'warn' | 'error';
    fecha: Date;
    empleado: Empleado;
    cliente: string;
    fechaCreacion: Date;
}
