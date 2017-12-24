import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EventsService } from '../services/events.service';
import { SimpleEvent } from '../models/simple-event';
import { EventTask } from '../models/event-task';
import { FormFeedback } from '../models/form-feedback.enum';
import { EventUser } from '../models/event-user';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material';
import { UserListSelectorComponent } from '../user-list-selector/user-list-selector.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event: Observable<SimpleEvent>;
  public eventTasks: Observable<EventTask[]>;

  public eventId: string;
  public userIds: string[] = [];

  public shouldShowTaskForm = false;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.event = this.eventsService.getEvent(this.eventId);
    this.eventTasks = this.eventsService.getEventTasks(this.eventId);
    this.event.subscribe(event => this.userIds = event.userIds);
  }

  public showTaskForm(): void {
    this.shouldShowTaskForm = true;
  }

  public showUserSelector(): void {
    this.dialog.open(UserListSelectorComponent, {
      data: this.userIds
    }).afterClosed().subscribe(data => {
      this.eventsService.updateEventUserIds(this.eventId, data);
    });
  }

  public onCreationFormEvent(feedback: FormFeedback): void {
    if (feedback === FormFeedback.SUCCESS) {
      this.shouldShowTaskForm = false;
    } else if (feedback === FormFeedback.CANCELLED) {
      this.shouldShowTaskForm = false;
    } else if (feedback === FormFeedback.FAILED) {
      console.log('Something went wrong :(');
    }
  }
}
