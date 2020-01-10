import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { ValuationComponent } from './valuation/valuation.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { ConfirmMortgageComponent } from './confirm-mortgage/confirm-mortgage.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  

  {
    path: 'content',
    component: ContentComponent,
    children:[{
      path: 'howToApply',
      component: HowToApplyComponent,
  
    },
    {
      path: 'valuation',
      component: ValuationComponent,
  
    },
    {
      path: 'mortgageOptions',
      component: MortgageOptionsComponent,
    },
    {
      path: 'propertyDetails',
      component: PropertyDetailsComponent,
  
    },
    {
      path: 'paymentDetails',
      component: PaymentDetailsComponent,
  
    },
    {
      path: 'reviewSubmit',
      component: ReviewAndSubmitComponent,
  
    },
    {
      path: 'confirmMortgage',
      component: ConfirmMortgageComponent,
  
    },
    {
      path: 'otherOccupants',
      component: PaymentDetailsComponent,  //TO BE DONE - CHANGE COMPONENT
  
    }]
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormListroutingModule { }