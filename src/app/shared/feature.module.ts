import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteInterceptor } from './route-interceptor';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    LoadingSpinnerComponent
  ],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: RouteInterceptor, multi: true }]
})
export class FeatureModule { }
