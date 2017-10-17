import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

// const appRoutes: Routes = [
//   { path: 'hello', component: HomeComponent },
//   { path: 'hello2', component: HomeComponent },
// ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: [HomeComponent]
})
export class HomeRoutingModule { }
