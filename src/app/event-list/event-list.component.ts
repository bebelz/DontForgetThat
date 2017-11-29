import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs/Observable';
import { SimpleEvent } from '../models/simple-event';
import { FormFeedback } from '../models/form-feedback.enum';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public shouldShowCreationForm = false;

  public events: Observable<SimpleEvent[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEventList();
  }

  public showCreationForm(): void {
    this.shouldShowCreationForm = true;
  }

  public onCreationFormEvent(feedback: FormFeedback): void {
    if (feedback === FormFeedback.SUCCESS) {
      this.shouldShowCreationForm = false;
    } else if (feedback === FormFeedback.CANCELLED) {
      this.shouldShowCreationForm = false;
    } else if (feedback === FormFeedback.FAILED) {
      console.log('Something went wrong :(');
    }
  }
}
