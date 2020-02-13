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
import { OtherOccupantsComponent } from './other-occupants/other-occupants.component';
import { HeaderComponent } from './header/header.component';
import { AppModule } from '../app.module';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { FeatureModule } from '../shared/feature.module';
import { PropertyDataResolver } from '../resolvers/property-data-resolver.service';
import { PaymentDataResolver } from '../resolvers/payment-data-resolver.service';
import { ValuationDataResolver } from '../resolvers/valuation-data-resolver.service';







@NgModule({
  declarations: [HeaderComponent, ContentComponent, HowToApplyComponent, ValuationComponent, MortgageOptionsComponent, ConfirmMortgageComponent, PropertyDetailsComponent, PaymentDetailsComponent, ReviewAndSubmitComponent, OtherOccupantsComponent],
  imports: [
    CommonModule,
    FormListroutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FeatureModule
  
  ],
  providers:[
    {
      provide:PropertyDataResolver
    },
    {
      provide: PaymentDataResolver
    },
    {
      provide:ValuationDataResolver
    }
  ]
})
export class FormListModule { }
