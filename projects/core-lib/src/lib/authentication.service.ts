import {Injectable} from '@angular/core';
import {User} from './models/User';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _user: User = {name: ''};
  user: Subject<User> = new BehaviorSubject(this._user);

  public login(username: string, password: string): void {
    // always logged in right now
    this._user.name = username;
    this.user.next(this._user);
  }
}
