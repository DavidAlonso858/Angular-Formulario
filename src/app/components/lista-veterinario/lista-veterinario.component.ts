import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Event } from '../../model/event'; 

@Component({
  selector: 'app-event-list',
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})
export class ListaVeterinario implements OnInit {
  events: Event[] = []; 
  filtradoCategoria = '';

  constructor(private eventService: EventoService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  filterEvents() {
    if (this.filtradoCategoria) {
      this.events = this.eventService.filtradoPorCategoria(this.filtradoCategoria);
    } else {
      this.events = this.eventService.getEvents();
    }
  }
}
