import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }

  // constructor(private authService: AuthService, private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   let url: string = state.url;

  //   return this.checkLogin(url);
  // }

  // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   return this.canActivate(route, state);
  // }

  // canLoad(route: Route): boolean {
  //   let url = `/${route.path}`;

  //   return this.checkLogin(url);
  // }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) { return true; }

  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Create a dummy session id
  //   let sessionId = 123456789;

  //   // Set our navigation extras object
  //   // that contains our global query params and fragment
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: { 'session_id': sessionId },
  //     fragment: 'anchor'
  //   };

  //   // Navigate to the login page with extras
  //   this.router.navigate(['/login'], navigationExtras);
  //   return false;
  // }

}
