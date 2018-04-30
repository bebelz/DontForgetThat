import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventsService } from '../services/events.service';
import { SimpleEvent } from '../models/simple-event';
import { FormFeedback } from '../models/form-feedback.enum';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.scss']
})
export class EventCreationFormComponent implements OnInit {

  @Output()
  public onFormClosed = new EventEmitter<FormFeedback>();

  public eventToCreate = <SimpleEvent>{};

  constructor(private eventService: EventsService) { }

  ngOnInit() { }

  public createEvent(event): void {
    this.eventService.addEvent(event)
      .then(
        () => this.onFormClosed.emit(FormFeedback.SUCCESS),
        () => this.onFormClosed.emit(FormFeedback.FAILED)
      );
  }

  public cancel(): void {
    this.onFormClosed.emit(FormFeedback.CANCELLED);
  }
}
