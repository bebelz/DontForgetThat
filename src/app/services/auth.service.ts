import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public login(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
