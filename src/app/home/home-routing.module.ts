import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: [HomeComponent]
})
export class HomeRoutingModule { }
