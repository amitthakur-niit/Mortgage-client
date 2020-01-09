import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:' ',redirectTo:'/auth/login', pathMatch:'full' },
  {path:'forms',loadChildren:'./form-list/form-list.module#FormListModule'},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
