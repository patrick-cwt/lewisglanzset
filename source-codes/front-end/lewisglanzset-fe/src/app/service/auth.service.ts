import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AuthRest } from '../rest/auth.rest';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _tokenSubject: BehaviorSubject<string>;
  public tokenObservable: Observable<string>;

  constructor(private authRest: AuthRest, private jwtHelper: JwtHelper) {
    this._tokenSubject = new BehaviorSubject<string>(null);
    this.tokenObservable = this._tokenSubject.asObservable();
  }

  public login(username: string, password: string) {
    return this.authRest.login(username, password).pipe(map(tokenObject => {
      console.log('token: ' + tokenObject);
      if (tokenObject) {
        localStorage.setItem('token', tokenObject['token']);
        localStorage.setItem('username', tokenObject['username']);
        this._tokenSubject.next(tokenObject['token']);
      } else {
        this._tokenSubject.next(null);
      }
      return tokenObject;
    }));
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    delete localStorage['token'];
    delete localStorage['username'];
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getUsername(): string {
    return localStorage.getItem('username');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token && token !== "undefined") {
      return !this.jwtHelper.isTokenExpired(this.getToken());
    }
    return false;
  }
}
