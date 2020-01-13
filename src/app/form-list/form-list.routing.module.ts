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
import { OtherOccupantsComponent } from './other-occupants/other-occupants.component';


const routes: Routes = [
    {
        path:'', 
        redirectTo:'/content/howToApply',
        pathMatch:'full'
    },

    {
      path:'content',
      component: ContentComponent,
      children: [
        {
          path: 'howToApply',
          component: HowToApplyComponent,
          outlet:'sidebar'
        },
        {
          path : 'valuation',
          component : ValuationComponent,
          outlet:'sidebar'
        },
        {
          path: 'mortgageOptions',
        component: MortgageOptionsComponent,
        outlet:'sidebar'},
        {
            path : 'propertyDetails',
            component : PropertyDetailsComponent,
            outlet:'sidebar'
          },
          {
            path : 'paymentDetails',
            component : PaymentDetailsComponent,
            outlet:'sidebar'
          },
          {
            path : 'reviewSubmit',
            component : ReviewAndSubmitComponent,
            outlet:'sidebar'
          },
          {
            path : 'confirmMortgage',
            component : ConfirmMortgageComponent,
            outlet:'sidebar'
          },
          {
            path : 'otherOccupants',
            component : OtherOccupantsComponent,  //TO BE DONE - CHANGE COMPONENT
            outlet:'sidebar'
          }
      ]
      
    },
   
   
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormListroutingModule{}