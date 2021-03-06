import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormlistService } from 'src/app/services/formlist.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription, Observable } from 'rxjs';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit, OnDestroy {
  

  formGroup: any;
  isPropertyInScotland:Number =0;
  required: string = 'This field is required';
  maxLength:string = 'MaxLength is 10'
  subscription : Subscription;
  IsLoading:Boolean = false;  


  constructor(private formBuilder: FormBuilder, private service: FormlistService, private router : Router, private authService:AuthclientService, private notifyService : NotificationService) { }

  details: any = [
    { value: 'Current Account', viewValue: 'Current Account' },
    { value: 'Detached Account', viewValue: 'Detached Account' },
    { value: 'Studio Appartmen', viewValue: 'Studio Appartment' }
  ];

  ngOnInit() {
    
    this.createForm();
    /* this.buttonYes1 = document.querySelector('.button_class-yes').classList;
    this.buttonYes2 = document.querySelector('.button_yes').classList;
    this.buttonNo1 = document.getElementById('No').classList;
    this.buttonNo2 = document.getElementById('no').classList; */
  }

  createForm() {
    let name_regexg = "";
    let number_regex = "";
    this.formGroup = this.formBuilder.group({


      ContactPerson: [null, Validators.required],
      ContactName: [null, [Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]],
      ContactNumber: [null, [Validators.required, Validators.maxLength(11), Validators.pattern(number_regex)]]
    }); 

  }

  
  buttonToggleColorCircumstance(v:Number){

    if(v===0){
     document.getElementById('nos').classList.add('highlight');
     document.getElementById('yess').classList.remove('highlight');
   }
 
   if(v===1){
   document.getElementById('yess').classList.add('highlight');
   document.getElementById('nos').classList.remove('highlight');
   }
   if(v===3){
    document.getElementById('no').classList.add('highlight');
    document.getElementById('yes').classList.remove('highlight');
  }

  if(v===2){
  document.getElementById('yes').classList.add('highlight');
  document.getElementById('no').classList.remove('highlight');
  }
 }
  

  postFormGroup(){
    this.IsLoading= true;
    let status:Boolean=false;  
    let userData = this.authService.getLocalStorageValue('currentUser');
    
    let valuationData={
         userId:userData.userId,
         isPropertyInScotland : this.isPropertyInScotland,
         contactPerson : this.formGroup.value.ContactPerson,
         contactName : this.formGroup.value.ContactName,
         contactNumber : this.formGroup.value.ContactNumber,
         
       }

    //console.log(this.formGroup.value.ContactPerson);
     return this.service.postValuationData(valuationData).subscribe((data)=>{
      
      this.IsLoading= false;
     // console.log("Check response",data)
      this.notifyService.notify('Valuation details posted!')
      //status = true;
      this.router.navigateByUrl('/content/(sidebar:otherOccupants)');
    },
    (error)=>{
      console.log("an error occured:",error)
      this.IsLoading= false;
      this.notifyService.alert('Oops! Something went wrong')
    });

       //return status;
    }

    postAndNavigateForward(){
     /*let value = this.postFormGroup()
     console.log("status:",value); 
     if(value){
        this.router.navigateByUrl('/content/(sidebar:otherOccupants)');
      }
      */

     this.postFormGroup();
    

    }

    postAndNavigateBack(){
      /* if(this.postFormGroup()){
      this.router.navigateByUrl('/content/(sidebar:propertyDetails)');
      } */

      this.postFormGroup();
      this.router.navigateByUrl('/content/(sidebar:propertyDetails)');
      
    }

    ngOnDestroy(): void {
      //this.subscription.unsubscribe();
    }

}