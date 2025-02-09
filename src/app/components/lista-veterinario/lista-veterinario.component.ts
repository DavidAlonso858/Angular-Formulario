import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoggerService } from '../../services/logger.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-list',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})
export class EventListComponent {

  allEvents: Event[] = [];
  events: Event[] = [];
  eventsCount = { log: 0, warn: 0, error: 0 }; 

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.allEvents = this.loggerService.getEvents();
    this.updateEventCount();
    this.events = [...this.allEvents];
  }

  updateEventCount(): void {
    this.eventsCount = {
      log: this.allEvents.filter(event => event.categoria === 'log').length,   
      warn: this.allEvents.filter(event => event.categoria === 'warn').length, 
      error: this.allEvents.filter(event => event.categoria === 'error').length
    };
  }

  onFilterCategory(category: string): void {
    this.events = this.allEvents.filter(event => event.categoria === category); 
  }
}