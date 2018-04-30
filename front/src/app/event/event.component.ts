import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { SimpleEvent } from '../models/simple-event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  public event: SimpleEvent;

  constructor() { }

  ngOnInit() { }
}
