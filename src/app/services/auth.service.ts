import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFirestore } from 'angularfire2/firestore';
import { EventUser } from '../models/event-user';

@Injectable()
export class AuthService {

  private COLLECTION_KEY_USERS = 'users';

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore) { }

  public login(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        this.db
          .collection(this.COLLECTION_KEY_USERS)
          .doc(data.user.uid)
          .valueChanges()
          .subscribe(savedUser => {
            if (!savedUser) {
              this.db
                .collection(this.COLLECTION_KEY_USERS)
                .doc(data.user.uid)
                .set(<EventUser>{
                  id: data.user.uid,
                  displayName: data.user.displayName,
                  email: data.user.email,
                });
            }
          });
      });
  }

  public logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  public isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.map(user => user != null);
  }

  public getLoggedUserInfo(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
