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

  public addEventTask(eventId: string, task: EventTask): Promise<any> {
    return this.db.collection('events').doc(eventId).collection('tasks').add(task);
  }

  public removeEventTask(eventId: string, taskId: string): void {
    this.db.collection('events').doc(eventId).collection('tasks').doc(taskId).delete();
  }

  public getEvent(id: string): Observable<SimpleEvent> {
    return this.db
      .collection<SimpleEvent>('events')
      .doc(id)
      .snapshotChanges()
      .map(event => {
        const toAdd = <SimpleEvent>event.payload.data();
        toAdd.id = event.payload.id;
        return toAdd;
      });
  }

  public getEventTasks(id: string): Observable<EventTask[]> {
    return this.db
      .collection('events')
      .doc(id)
      .collection('tasks')
      .snapshotChanges()
      .map(task => {
        return task.map(t => {
          const toAdd = <EventTask>t.payload.doc.data();
          toAdd.id = t.payload.doc.id;
          return toAdd;
        });
      });
  }
}
