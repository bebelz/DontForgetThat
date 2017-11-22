import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SimpleEvent } from '../models/simple-event';
import { EventTask } from '../models/event-task';

@Injectable()
export class EventsService {

  constructor() { }

  public getEventList(): Observable<SimpleEvent[]> {
    return Observable.of([
      <SimpleEvent>{
        id: 1,
        name: 'DftEvent 1',
        creationDate: new Date(),
        startsOn: new Date(),
        description: 'Event de test',
      },
      <SimpleEvent>{
        id: 2,
        name: 'DftEvent 2',
        creationDate: new Date(),
        startsOn: new Date(),
        description: 'Event de test',
      },
    ]);
  }

  public getEventDetails(id: string): Observable<SimpleEvent> {
    return Observable.of(<SimpleEvent>{
      id: 1,
      description: 'Event de test',
      name: 'DftEvent 1',
      startsOn: new Date(2017, 12, 30),
      endsOn: new Date(2017, 12, 30),
      details: {
        users: [],
        tasks: [
          <EventTask>{
            id: 1,
            name: 'apporter bières',
            description: 'C est important',
            usersInCharge: [1, 2],
            dueDate: new Date(2017, 11, 21)
          }
        ]
      }
    });
  }
}
