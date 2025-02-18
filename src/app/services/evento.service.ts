import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventVeterinario} from '../model/eventVeterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) { }

  getEventos() {
    return this.http.get<EventVeterinario[]>(this.url);
  }

  addEvento(evento: EventVeterinario) {
    return this.http.post(this.url, evento);
  }

  deleteEvento(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}