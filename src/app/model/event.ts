import { Empleado } from "./empleado";

export interface Event {
    id: number;
    enfermedad: string;
    animal: string;
    categoria: 'leve' | 'moderada' | 'grave';
    fecha: Date;
    empleado: Empleado;
    cliente: string;
    fechaCreacion: Date;
}
