import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {



   isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {
    if (localStorage.getItem('currentUser')) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
  }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      // // store username and jwt token in local storage to keep user logged in between page refreshes
      // localStorage.setItem('currentUser', JSON.stringify({ username: username, token: password }));

      //this.isLoggedIn = true
      if (localStorage.getItem('currentUser')) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    });


  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

}
