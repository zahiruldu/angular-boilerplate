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
    this.message = 'Tring to log in ...';

    this.authService.login(this.model).subscribe(result=>{

      let storeData: any = {
          token: result.password, // it can be your auth token, recieved from serverside
          email: result.email
        };
        localStorage.setItem('currentUser', JSON.stringify(storeData));
        this.authService.isLoggedIn = true;

        this.message = 'Login success!';

        setTimeout(()=>{
          if (this.authService.isLoggedIn) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

            // Set our navigation extras object
            // that passes on our global query params and fragment
            let navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            // Redirect the user
            this.router.navigate([redirect], navigationExtras);
          }

        },2000);
    },
    error=>{
      console.log(error);
      this.message = error;
    })
  }

  logout() {
    this.authService.logout();
    //this.router.navigate(['/login']);
  }

}
