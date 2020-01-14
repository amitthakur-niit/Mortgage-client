import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent, ForgotPasswordComponent, HeaderComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
