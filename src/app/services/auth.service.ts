import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFirestore } from 'angularfire2/firestore';
import { EventUser } from '../models/event-user';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private usersService: UsersService) { }

  public login(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        this.usersService.addUser(<EventUser>{
          id: data.user.uid,
          displayName: data.user.displayName,
          email: data.user.email,
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
