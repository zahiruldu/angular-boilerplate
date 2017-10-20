import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	isAuthenticated = false;
  constructor(private authService: AuthService) { 
  }

  ngOnInit() {

    // this.authService.login().subscribe(()=>{
    //   console.log('log status', this.authService.isLoggedIn);
    // });
  	
    // if (this.authService.isLoggedIn) {
    //   console.log('already logged in..')
    //   this.isAuthenticated = true;
    // } else {
    //   console.log('already logged out..')
    //   this.isAuthenticated = false;
    // }
  }

  logout() {
    this.authService.logout();
  }

}
