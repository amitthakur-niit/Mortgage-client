import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthclientService } from 'src/app/services/authclient.service';
import { PaymentDetails } from 'src/app/Models/PaymentDetails';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { FormlistService } from 'src/app/services/formlist.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  paymentDetailsFormGroup: FormGroup;
  circumstance: Number = 0;
  dayOfPayment: Number = 0;
  currentUser: any;
  paymentDetailObject: PaymentDetails;
  required: string = 'This field is required.';
  lengthError: string = 'This field requires 12 characters.';
  lengthErrorName: string = "This field requires 2 characters.";
  prefilledDataToken:boolean=false;

  constructor(private formBuilder: FormBuilder, private paymentDetailsService: FormlistService, private notifyService: NotificationService, private router: Router, private formListService: FormlistService) {
    this.paymentDetailsFormGroup = this.formBuilder.group({
      sortCode: [null, [Validators.required, Validators.pattern("^[0-9]{12}$")]],
      accountNumber: [null, [Validators.required, Validators.pattern("^[0-9]{12}$")]],
      accountHolderName: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.buttonToggleColorCircumstance();
    this.buttonToggleColorDay();
    //get the data from the database of payment details
    this.prefilledDataToken=this.prePopulateData();
  }

  prePopulateData():boolean {
    //get the user id from session storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //call the getpaymentdetailsby id api
    if (this.currentUser) {
      this.formListService.PaymentDetailById(this.currentUser.userId).subscribe(val => {
     /*    this.paymentDetailsFormGroup.patchValue({
          sortCode: val[0].sortCode,
          accountNumber: val[0].accountNumber,
          accountHolderName: val[0].accountHolderName
        }); */
        if(val){
           this.paymentDetailsFormGroup.controls['sortCode'].setValue(val.sortCode);
          this.paymentDetailsFormGroup.controls['accountNumber'].setValue(val.accountNumber);
          this.paymentDetailsFormGroup.controls['accountHolderName'].setValue(val.accountHolderName); 

          document.getElementById('save_comeback').innerText="update & continue";    
          return true;
        }
      }, error => {
        console.log('Payment Details Error Response :', error)
        // this.notifyService.alert('Oops! something went wrong')
      });

    }
      return false;
  }

  onEndpointValChange(data: any) {
    this.dayOfPayment = Number(data);
  }

  circumstanceValChange(data: any) {
    this.circumstance = Number(data);
  }

  onSubmit(data: any) {
   
    console.log("payment-details data: " + JSON.stringify(data));
    data.currentCircumstances = this.circumstance;
    data.dayOfPayment = this.dayOfPayment;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    data.userId = this.currentUser.userId;

    if(this.prefilledDataToken){
    this.paymentDetailsService.savePaymentDetails(data).subscribe(val => {
      if (val.userId != null) {
        this.notifyService.notify('Payment Successful!')
        this.router.navigateByUrl('form/content/(sidebar:reviewSubmit)');
      }
    }, error => {
      this.notifyService.alert('Something went wrong!')
    });

  }
  else{
    this.paymentDetailsService.updatePaymentDetails(data).subscribe(val => {
      if (val.userId != null) {
        this.notifyService.notify('Payment updated Successfully!')
        this.router.navigateByUrl('form/content/(sidebar:reviewSubmit)');
      }
    }, error => {
      this.notifyService.alert('Something went wrong!')
    });

  }
}

  buttonToggleColorCircumstance() {

    if (this.circumstance === 0) {
      document.getElementById('nos').classList.add('highlight');
      document.getElementById('yess').classList.remove('highlight');
    }

    if (this.circumstance === 1) {
      document.getElementById('yess').classList.add('highlight');
      document.getElementById('nos').classList.remove('highlight');
    }
  }

  buttonToggleColorDay() {

    if (this.dayOfPayment === 0) {
      document.getElementById('day').classList.add('highlight');
      document.getElementById('specDay').classList.remove('highlight');
    }

    if (this.dayOfPayment === 1) {
      document.getElementById('specDay').classList.add('highlight');
      document.getElementById('day').classList.remove('highlight');
    }
  }

}

