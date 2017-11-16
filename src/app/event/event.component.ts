<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from '../services/events.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { DftEvent } from '../models/event';
=======
import {Component, Input, OnInit} from '@angular/core';
import {DftEvent} from '../models/event';
>>>>>>> origin/master

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

<<<<<<< HEAD
  public eventDetails: Observable<DftEvent>;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.eventDetails = this.route.paramMap.switchMap((params: ParamMap) => {
      return this.eventsService.getEventDetails(params.get('id'));
    });
  }
=======
  @Input()
  public event: DftEvent;

  constructor() { }

  ngOnInit() { }
>>>>>>> origin/master
}
