import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../services/logger.service';
import { Event } from '../../model/event';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// hay que importar esto en el componente para usar el ngFor o el ngModel
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  // hay que importar esto en el componente para usar el ngFor o el ngModel
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})

export class EventListComponent {
  allEvents: Event[] = []; // usado para almacenar los eventos del service
  events: Event[] = []; // para almacenar los eventos filtrado por una categoria
  eventsCount = { log: 0, warn: 0, error: 0 };
  selectedCategory: string = '';
  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.allEvents = this.loggerService.getEvents(); // pillo todos los eventos 
    this.updateEventCount(); // actualizo el conteo por categoria
    this.events = [...this.allEvents]; // copia de los eventos adquiridos del service 
    // para luego usarlo en el filtrado
  }

  // devuelve un void porque solo actualizo el objeto de eventsCount
  updateEventCount(): void {
    this.eventsCount = {
      log: this.allEvents.filter(event => event.categoria === 'log').length,
      warn: this.allEvents.filter(event => event.categoria === 'warn').length,
      error: this.allEvents.filter(event => event.categoria === 'error').length
    };
  }

  // lo recorro en el ngFor por ese el else por si no se selecciona nada en el select
  filtradoCategoria(categoria: string): void {
    if (categoria) {
      this.events = this.allEvents.filter(event => event.categoria === categoria);
    } else {
      this.events = [...this.allEvents];
    }
  }
}