import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SimpleEvent } from '../models/simple-event';
import { EventTask } from '../models/event-task';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class EventsService {

  constructor(private db: AngularFirestore) { }

  public addEvent(event: SimpleEvent): Promise<any> {
    return this.db.collection('events').add(event);
  }

  public getEventList(): Observable<SimpleEvent[]> {
    return this.db
      .collection<SimpleEvent>('events')
      .snapshotChanges()
      .map(event => {
        return event.map(e => {
          const toAdd = <SimpleEvent>e.payload.doc.data();
          toAdd.id = e.payload.doc.id;
          return toAdd;
        });
      });
  }

  public getEventDetails(id: string): Observable<SimpleEvent> {
    return Observable.of(<SimpleEvent>{
      id: '1',
      description: 'Event de test',
      name: 'DftEvent 1',
      startsOn: new Date(2017, 12, 30),
      endsOn: new Date(2017, 12, 30),
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
    });
  }
}
