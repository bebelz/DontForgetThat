import { Component, OnInit } from '@angular/core';
import { DftEvent } from '../models/event';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: Observable<DftEvent[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEventList();
  }
}
