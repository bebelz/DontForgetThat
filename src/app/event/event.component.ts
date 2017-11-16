import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from '../services/events.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { DftEvent } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public eventDetails: Observable<DftEvent>;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.eventDetails = this.route.paramMap.switchMap((params: ParamMap) => {
      return this.eventsService.getEventDetails(params.get('id'));
    });
  }
}
