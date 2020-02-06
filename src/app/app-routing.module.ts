import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:' ',redirectTo:'/auth/login', pathMatch:'full' },
  //{path:'form',loadChildren:'./form-list/form-list.module#FormListModule'},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  {path:'form', loadChildren: () => import('./form-list/form-list.module').then(m => m.FormListModule)}   //lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
