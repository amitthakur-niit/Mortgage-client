import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPassowrdComponent } from './reset-passowrd/reset-passowrd.component';



const routes: Routes = [
    {
      path : '',
      redirectTo:'/login',
      pathMatch:'full'
    },
    
    {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'register',
    component: RegisterComponent
  }, 
  {
    path: 'forgotPassword',
    component: ForgotPaswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPassowrdComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }