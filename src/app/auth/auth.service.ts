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

  login(data: any): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      // Make a http api call here 
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

  register(data: any): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val=> {
      // Make a http api call if needed here
      this.isLoggedIn = true
    });

  }

}
