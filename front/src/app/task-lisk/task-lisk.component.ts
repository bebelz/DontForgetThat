import { Component, Input, OnInit } from '@angular/core';
import { EventTask } from '../models/event-task';

@Component({
  selector: 'app-task-lisk',
  templateUrl: './task-lisk.component.html',
  styleUrls: ['./task-lisk.component.scss']
})
export class TaskLiskComponent implements OnInit {

  @Input()
  public eventId: string;

  @Input()
  public taskList: EventTask[];

  constructor() { }

  ngOnInit() { }
}
