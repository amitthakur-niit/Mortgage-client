import { Component, OnInit } from '@angular/core';
import { FormlistService } from 'src/app/services/formlist.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent  {

  formGroup: any;
  isPropertyInScotland:Number =0;
  required: string = 'This field is required';
  constructor(private formBuilder: FormBuilder, private service: FormlistService) { }

  details: any = [
    { value: 'Current Account', viewValue: 'Current Account' },
    { value: 'Detached Account', viewValue: 'Detached Account' },
    { value: 'Studio Appartmen', viewValue: 'Studio Appartment' }
  ];

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let name_regexg = "";
    let number_regex = "";
    this.formGroup = this.formBuilder.group({


      ContactPerson: [null, Validators.required],
      ContactName: [null, [Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]],
      ContactNumber: [null, [Validators.required, Validators.minLength(12), Validators.pattern(number_regex)]]
    }); 

  }

  toggle(){
    this.isPropertyInScotland = this.isPropertyInScotland == 0 ? 1 : 0;
    console.log(this.isPropertyInScotland);
  }
  postFormGroup() {
       let data={
         isPropertyInScotland : this.isPropertyInScotland,
         contactPerson : this.formGroup.value.ContactPerson,
         contactName : this.formGroup.value.ContactName,
         contactNumber : this.formGroup.value.ContactNumber,
         
       }

    console.log(this.formGroup.value.ContactPerson);
    this.service.postValuationData(data).subscribe(data=>console.log(data));


    }

}