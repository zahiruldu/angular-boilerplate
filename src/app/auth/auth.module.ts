import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthService } from './auth.service';
import { AuthlessPageGuard } from '../middlewares/authless-page.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotpasswordComponent, ResetpasswordComponent],
  providers: [AuthService, AuthlessPageGuard]
})
export class AuthModule { }
