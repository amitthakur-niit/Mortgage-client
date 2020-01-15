import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthclientService } from 'src/app/services/authclient.service';
import { PaymentDetails } from 'src/app/Models/PaymentDetails';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  paymentDetailsFormGroup: FormGroup;
  circumstance: Number;
  dayOfPayment: Number;
  currentUser: any;
  paymentDetailObject : PaymentDetails;
  required: string = 'This field is required.';
  lengthError: string = 'Minimum 12 characters required.';

  constructor(private formBuilder: FormBuilder, private paymentDetailsService: AuthclientService) {
    this.paymentDetailsFormGroup = this.formBuilder.group({
      sortCode: [null, [Validators.required, Validators.min(2), Validators.pattern("^[0-9]{12,}$")]],
      accountNumber: [null, [Validators.required, Validators.min(12),  Validators.pattern("^[0-9]{12,}$")]],
      accountHolderName: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }

  onEndpointValChange(data: any) {
    this.dayOfPayment = Number(data);
  }

  circumstanceValChange(data: any) {
    this.circumstance = Number(data);
  }

  onSubmit(data: any) {
    console.log("payment-details data: "+JSON.stringify(data));
    data.currentCircumstances = this.circumstance;
    data.dayOfPayment = this.dayOfPayment;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    data.userId = this.currentUser.userId;

   
    this.paymentDetailsService.updatePaymentDetails(data).subscribe(val => {
      if (val.userId != null) {
        alert('Success');
      }
    }); 
  
  }

}

