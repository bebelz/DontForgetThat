import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DftEvent } from '../models/event';

@Injectable()
export class EventsService {

  constructor() { }

  public getEventList(): Observable<DftEvent[]> {
    return Observable.of([
      {
        id: 1,
        name: 'DftEvent 1',
        creationDate: new Date(),
        startDate: new Date()
      },
      {
        id: 2,
        name: 'DftEvent 2',
        creationDate: new Date(),
        startDate: new Date()
      }
    ]);
  }

  public getEventDetails(id: string): Observable<DftEvent> {
    return Observable.of(
      {
        id: 1,
        name: 'DftEvent 1',
        creationDate: new Date(),
        startDate: new Date()
      }
    );
  }
}