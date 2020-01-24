import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { ResetPassowrdComponent } from './reset-passowrd/reset-passowrd.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent, ForgotPaswordComponent, HeaderComponent,ResetPassowrdComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    
  ]
})
export class AuthModule { }
