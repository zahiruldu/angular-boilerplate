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


  login(data: any): Observable<any> {

    return Observable.of(data);

    // Serverside api call
    // let url: any ='http://example.com/login';
    // let header = new HttpHeaders();
    // return this.http.post(url,data,{headers: header })
    //            .do(data => JSON.stringify(data))
    //            .catch((error:HttpErrorResponse)=>Observable.throw(error || 'Server error'));
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  register(data: any): Observable<any> {

    return Observable.of(data);

    // Serverside Api call
    // let url: any = 'http://example.com/register';
    // let header = new HttpHeaders();
    // return this.http.post(url,data,{headers: header })
    //            .do(data => JSON.stringify(data))
    //            .catch((error:HttpErrorResponse)=>Observable.throw(error || 'Server error'));
  }

}
