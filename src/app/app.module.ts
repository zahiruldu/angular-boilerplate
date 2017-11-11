import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { AuthGuard } from './middlewares/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', canActivate:[AuthGuard], component: HomeComponent },
  { path: '**',component: NotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HomeModule,
    AuthModule,
    MenuModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [MaterialModule, MenuModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
