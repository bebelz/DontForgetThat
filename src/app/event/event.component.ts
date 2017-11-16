import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { DftEvent } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  public event: DftEvent;

  constructor() { }

  ngOnInit() { }
}
