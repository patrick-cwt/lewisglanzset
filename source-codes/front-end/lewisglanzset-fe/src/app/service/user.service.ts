import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { UserRest } from '../rest/user.rest';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {

  private _userRegistrationSubject: BehaviorSubject<boolean>;
  public userRegistrationObserver: Observable<boolean>;

  private _userFetchSubject: BehaviorSubject<User>;
  public userFetchObserver: Observable<User>;

  private _userExistSubject: BehaviorSubject<boolean>;
  public userExistObserver: Observable<boolean>;

  constructor(private userRest: UserRest) { 
    this._userRegistrationSubject = new BehaviorSubject<boolean>(false);
    this.userRegistrationObserver = this._userRegistrationSubject.asObservable();
    this._userFetchSubject = new BehaviorSubject<User>(null);
    this.userFetchObserver = this._userFetchSubject.asObservable();
    this._userExistSubject = new BehaviorSubject<boolean>(false);
    this.userExistObserver = this._userExistSubject.asObservable();
  }

  public register(user: User) {
    return this.userRest.register(user).pipe(map(response => {
      console.log('user registration: ' + response);
      if (response['registered']) {
        this._userRegistrationSubject.next(true);
      } else {
        this._userRegistrationSubject.next(false);
      }
      return response;
    }));
  }

  public getUser(username: string) {
    return this.userRest.fetchUser(username).pipe(map(response => {
      console.log('user fetch: ' + response);
      if (response['registered']) {
        this._userFetchSubject.next(response);
      } else {
        this._userFetchSubject.next(response);
      }
      return response;
    }));
  }

  public checkUserExist(username: string) {
    return this.userRest.fetchUser(username).pipe(map(response => {
      if (response || response !== undefined) {
        this._userExistSubject.next(true);
      } else {
        this._userExistSubject.next(false);
      }
      return response;
    }));
  }

}
