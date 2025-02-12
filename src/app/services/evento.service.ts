import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) { }

  getEventos() {
    return this.http.get<Event[]>(this.url);
  }

  addEvento(evento: Event) {
    return this.http.post(this.url, evento);
  }
}