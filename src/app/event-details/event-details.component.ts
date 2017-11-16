import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DftEvent } from '../models/event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event: DftEvent;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) {
    this.eventsService
      .getEventDetails(this.route.paramMap['id'])
      .subscribe((event: DftEvent) => this.event = event);
  }

  ngOnInit() { }
}
