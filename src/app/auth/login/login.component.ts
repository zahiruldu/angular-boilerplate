import { Component, OnInit } from '@angular/core';

import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: any = {};

  ngOnInit() {
  }

   message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.message = '';
  }


  login() {
    console.log(localStorage)
    this.message = 'Trying to log in ...';
       // store username and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify({ username: this.model.username, token: this.model.password }));


    this.authService.login(this.model).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    //this.router.navigate(['/login']);
  }

}
