import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormlistService } from 'src/app/services/formlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {



  formGroup: FormGroup;
  required: string = 'This field is required';
  buttonClass="button_class-yes";
  propertyBuilt;
  constructor(private formBuilder : FormBuilder,private propertyService: FormlistService, private router:Router) { }

  clickMe() {
  }

  proprtyBuilt(v:string){
    this.propertyBuilt=v;
     console.log("proprtyBuilt",this.propertyBuilt);
  }
  

  properties:any = [
    {value: 'Property_1', viewValue: 'Property_1'},
    {value: 'Property_2', viewValue: 'Property_2'},
    {value: 'Property_3', viewValue: 'Property_3'}
  ];

  oldProperties:any = [
    {value: '2', viewValue: '2 years'},
    {value: '3', viewValue: '3 years'},
    {value: '4', viewValue: '4 years'}
  ];

  ngOnInit(){
    this.createForm();

  }

  createForm(){
    let name_regex = "";
    let number_regex="";
  this.formGroup = this.formBuilder.group({
    'Postcode': new FormControl (null),
    // 'ContactName' : [null,Validators.required,Validators.minLength(3),Validators.pattern(name_regexg)],
    'Address' : new FormControl (["null",Validators.required,Validators.minLength(3),Validators.pattern(name_regex)]),
    'PropertyType':new FormControl (null),
    'NumberOfBedrooms':new FormControl (null),
    'propertyBuilt':new FormControl (this.propertyBuilt),
    'propertyAge': new FormControl (55),
    'isPropertyCovered': new FormControl ("yes"),
    'tenureType': new FormControl (33),
   // 'age':new FormControl (3)
    //'NumberOfBedrooms':[null,Validators.required,Validators.minLength(10),Validators.pattern(number_regex)]
  });

}

onSubmit(data: any) {
  console.log("Data",data);
 // this.propertyService.propertyData(data).subscribe();
  this.router.navigateByUrl('/content/(sidebar:howToApply)');

}

}
