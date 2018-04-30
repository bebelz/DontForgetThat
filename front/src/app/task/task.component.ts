import { Component, Input, OnInit } from '@angular/core';
import { EventTask } from '../models/event-task';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  public eventId: string;

  @Input()
  public task: EventTask;

  constructor(private eventService: EventsService) { }

  ngOnInit() { }

  public deleteTask(eventId: string, taskId: string): void {
    this.eventService.removeEventTask(eventId, taskId).then(
      () => {},
      () => console.log('Something went wrong :(')
    );
  }
}
