import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/evento.service';
import { EventVeterinario } from '../../model/eventVeterinario';
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
  allEvents: EventVeterinario[] = []; // usado para almacenar los eventos del service
  events: EventVeterinario[] = []; // para almacenar los eventos filtrado por una categoria
  eventsCount = { leve: 0, moderada: 0, grave: 0 };
  selectedCategory: string = '';
  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((ev) => {
      this.allEvents = ev;
      console.log(this.allEvents);
      this.events = [...this.allEvents]; // copia de los eventos adquiridos del service 

      // guardo en el array cada empleado conseguido de la funcion que los pilla del json
      this.updateEventCount();
      this.filtradoCategoria(this.selectedCategory);
    });
    console.log(this.events.length);
    // para luego usarlo en el filtrado
  }

  // devuelve un void porque solo actualizo el objeto de eventsCount
  updateEventCount(): void {
    this.eventsCount = {
      leve: this.events.filter(event => event.categoria === 'leve').length,
      moderada: this.events.filter(event => event.categoria === 'moderada').length,
      grave: this.events.filter(event => event.categoria === 'grave').length
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