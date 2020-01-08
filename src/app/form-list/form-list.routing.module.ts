import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { ValuationComponent } from './valuation/valuation.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { ConfirmMortgageComponent } from './confirm-mortgage/confirm-mortgage.component';


const routes: Routes = [
    {
        path:' ', 
        redirectTo:'/how-to-apply',
        pathMatch:'full'
    },
   
    {
      path: 'how-to-apply',
      component: HowToApplyComponent
     },
    {
      path: 'mortgage-options',
    component: MortgageOptionsComponent},
    {
      path : 'valuation',
      component : ValuationComponent
    },
    {
        path : 'property-details',
        component : PropertyDetailsComponent
      },
      {
        path : 'payment-details',
        component : PaymentDetailsComponent
      },
      {
        path : 'review-and-submit',
        component : ReviewAndSubmitComponent
      },
      {
        path : 'confirm-mortgage',
        component : ConfirmMortgageComponent
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormListroutingModule{}