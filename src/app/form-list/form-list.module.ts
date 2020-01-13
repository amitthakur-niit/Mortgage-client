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
import { ContentComponent } from './content/content.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, HowToApplyComponent, ValuationComponent, MortgageOptionsComponent, ConfirmMortgageComponent, PropertyDetailsComponent, PaymentDetailsComponent, ReviewAndSubmitComponent],
  imports: [
    CommonModule,
    FormListroutingModule,
    MaterialDesignModule,
    ReactiveFormsModule
    

  ]
})
export class FormListModule { }
