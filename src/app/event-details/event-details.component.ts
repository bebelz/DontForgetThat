import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EventsService } from '../services/events.service';
import { SimpleEvent } from '../models/simple-event';
import { EventTask } from '../models/event-task';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event: Observable<SimpleEvent>;
  public eventTasks: Observable<EventTask[]>;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = this.eventsService.getEvent(id);
    this.eventTasks = this.eventsService.getEventTasks(id);
  }
}
