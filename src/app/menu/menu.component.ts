import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { 
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
