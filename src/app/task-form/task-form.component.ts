import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormFeedback } from '../models/form-feedback.enum';
import { EventTask } from '../models/event-task';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input()
  public eventId: string;

  @Output()
  public onFormClosed = new EventEmitter<FormFeedback>();

  public taskToCreate = <EventTask> {};

  constructor(private eventService: EventsService) { }

  ngOnInit() { }

  public createTask(eventId: string, task: EventTask): void {
    this.eventService.addEventTask(eventId, task).then(
      () => this.onFormClosed.emit(FormFeedback.SUCCESS),
      () => this.onFormClosed.emit(FormFeedback.FAILED)
    );
  }

  public cancel(): void {
    this.onFormClosed.emit(FormFeedback.CANCELLED);
  }
}
