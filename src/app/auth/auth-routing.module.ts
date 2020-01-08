import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';



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
    path: 'forgot-password',
    component: ForgotPasswordComponent
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