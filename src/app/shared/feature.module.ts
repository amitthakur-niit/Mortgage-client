import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialDesignModule } from '../material-design/material-design.module';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    LoadingSpinnerComponent
  ],
})
export class FeatureModule { }
