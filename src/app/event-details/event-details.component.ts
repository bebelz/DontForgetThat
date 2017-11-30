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

  public eventDetails: Observable<SimpleEvent>;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.eventDetails = this.route.paramMap.switchMap((params: ParamMap) => {
      return this.eventsService.getEventDetails(params.get('id'));
    });
  }
}
