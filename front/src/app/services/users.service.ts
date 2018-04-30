import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventUser } from '../models/event-user';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsersService {

  private COLLECTION_KEY_USERS = 'users';

  constructor(private db: AngularFirestore) { }

  public getUserList(page: number, per_page: number): Observable<EventUser[]> {
    return this.db
      .collection<EventUser>(this.COLLECTION_KEY_USERS)
      .valueChanges();
  }

  public exists(id: string): Observable<boolean> {
    return this.db
      .collection(this.COLLECTION_KEY_USERS)
      .doc(id)
      .valueChanges()
      .map(savedUser => savedUser != null);
  }

  public addUser(user: EventUser): void {
    this.exists(user.id)
      .subscribe(exists => exists ? () => {} : this.insertUser(user));
  }

  private insertUser(user: EventUser): Promise<any> {
    return this.db
      .collection(this.COLLECTION_KEY_USERS)
      .doc(user.id)
      .set(user);
  }

}
