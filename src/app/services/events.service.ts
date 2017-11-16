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
<<<<<<< HEAD
        name: 'DftEvent 1',
        creationDate: new Date(),
        startDate: new Date()
      },
      {
        id: 2,
        name: 'DftEvent 2',
        creationDate: new Date(),
        startDate: new Date()
=======
        description: 'Event de test',
        name: 'DftEvent 1'
      },
      {
        id: 2,
        description: 'Autre event de test',
        name: 'DftEvent 2'
>>>>>>> origin/master
      }
    ]);
  }

<<<<<<< HEAD
  public getEventDetails(id: string): Observable<DftEvent> {
    return Observable.of(
      {
        id: 1,
        name: 'DftEvent 1',
        creationDate: new Date(),
        startDate: new Date()
      }
    );
=======
  public getEventDetails(id: number): Observable<DftEvent> {
    return Observable.of({
      id: id,
      description: 'Event de test',
      name: 'DftEvent 1',
      startsOn: new Date(2017, 12, 30),
      endsOn: new Date(2017, 12, 30),
    });
>>>>>>> origin/master
  }
}
