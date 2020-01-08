import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { ValuationComponent } from './valuation/valuation.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { ConfirmMortgageComponent } from './confirm-mortgage/confirm-mortgage.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { FormListroutingModule } from './form-list.routing.module';



@NgModule({
  declarations: [HowToApplyComponent, ValuationComponent, MortgageOptionsComponent, ConfirmMortgageComponent, PropertyDetailsComponent, PaymentDetailsComponent, ReviewAndSubmitComponent],
  imports: [
    CommonModule,
    FormListroutingModule
  ]
})
export class FormListModule { }
