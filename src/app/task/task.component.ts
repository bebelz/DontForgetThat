import { Component, Input, OnInit } from '@angular/core';
import { EventTask } from '../models/event-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  public task: EventTask;

  constructor() { }

  ngOnInit() { }
}
