import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DftEvent } from '../models/event';

@Injectable()
export class EventsService {

  constructor() { }

  public getEventList(): Observable<DftEvent[]> {
    return Observable.of([
      <DftEvent>{
        id: 1,
        name: 'DftEvent 1',
        creationDate: new Date(),
        startsOn: new Date(),
        description: 'Event de test',
      },
      <DftEvent>{
        id: 2,
        name: 'DftEvent 2',
        creationDate: new Date(),
        startsOn: new Date(),
        description: 'Event de test',
      },
    ]);
  }

  public getEventDetails(id: string): Observable<DftEvent> {
    return Observable.of(<DftEvent>{
      id: 1,
      description: 'Event de test',
      name: 'DftEvent 1',
      startsOn: new Date(2017, 12, 30),
      endsOn: new Date(2017, 12, 30),
    });
  }
}
