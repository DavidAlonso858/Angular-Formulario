import { Injectable } from '@angular/core';
import { Event } from '../model/event';

// puede marcar este servicio en otros componentes u otros servicios 
@Injectable({
  providedIn: 'root',
})

export class LoggerService {
  private events: Event[] = []; // almaceno los eventos del modelo 

  constructor() { }

  // funcion que el paso el parametro evento para aagregarlo
  addEvent(event: Event): void {
    this.events.push(event);
  }

  // si se pasa categoria devuelve los de esa, sino devuelve todos
  getEvents(categoria?: 'log' | 'warn' | 'error'): Event[] {
    return categoria ? this.events.filter(event => event.categoria === categoria) : this.events;
  }

  // luego de los : lo que ponemos es que devuelve esta funcion, en este caso 
  // un objeto con el numero de log, el numero de warn y el numero de error
  getEventsCount(): { log: number; warn: number; error: number } {
    return this.events.reduce(
      (counts, event) => {
        // lo suma segun el tipo detectado en el evento        
        if (counts[event.categoria] !== undefined) {
          counts[event.categoria]++;
        }
        return counts;
      },
      { log: 0, warn: 0, error: 0 }
    );
  }
}