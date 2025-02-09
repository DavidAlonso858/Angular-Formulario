import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private events: Event[] = [];

  addEvent(event: Event) {
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  filtradoPorCategoria(categoria: string) {
    return this.events.filter(e => e.categoria === categoria);
  }
}