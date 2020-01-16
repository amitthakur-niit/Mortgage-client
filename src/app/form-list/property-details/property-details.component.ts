import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormlistService } from 'src/app/services/formlist.service';

import { Router,Route } from '@angular/router';
import { Key } from 'protractor';




@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  formGroup: FormGroup;
  required: string = 'This field is required';
  ids=localStorage.getItem('currentUser');
  json = JSON.parse(this.ids);
  userId:Number= this.json["userId"];
  //console.log("userId",this.userId);

  postCode;
  address;
  propertyType;
  noOfBedrooms;
  propertyAge;



  buttonClass1 = "button_class-yes";
  buttonClass2 = "button_class-yes";
  buttonClass3 = "button_class-yes";
  buttonClass4 = "button_class-yes";
  buttonClassY = "button_class-yes";
  buttonClassN = "button_class-yes";
  buttonClassF = "button_class-yes";
  buttonClassL = "button_class-yes";
  buttonClassC = "button_class-yes";
  buttonClassA = "button_class-yes";

  buttonClass="button_class-yes";
  propertyBuilt;
  // constructor(private formBuilder : FormBuilder,private propertyService: FormlistService, private router:Router) { }


  

 //var currentUser =localStorage.get('currentUser');
  
 
  isPropertyCovered;
  tenureType;
  constructor(private formBuilder: FormBuilder, private propertyService: FormlistService,private router: Router) { }

  proprtyBuilt(v: string) {
    this.propertyBuilt = v;
   if(v=="1914"){
    this.buttonClass1 = "button_class-no";
    this.buttonClass2 = "button_class-yes";
    this.buttonClass3 = "button_class-yes";
    this.buttonClass4 = "button_class-yes";
   }
   else if(v=="1914 to 1944"){
    this.buttonClass1 = "button_class-yes";
    this.buttonClass2 = "button_class-no";
    this.buttonClass3 = "button_class-yes";
    this.buttonClass4 = "button_class-yes";
   }
   else if(v=="1945 to 1980"){
    this.buttonClass1 = "button_class-yes";
    this.buttonClass2 = "button_class-yes";
    this.buttonClass3 = "button_class-no";
    this.buttonClass4 = "button_class-yes";
   }
   else if(v=="After 1980"){
    this.buttonClass1 = "button_class-yes";
    this.buttonClass2 = "button_class-yes";
    this.buttonClass3 = "button_class-yes";
    this.buttonClass4 = "button_class-no";
   }
  };
  
  IsPropertyCovered(v: string) {
    this.isPropertyCovered = v;
    if(v=="Y"){
      this.buttonClassY = "button_class-no";
      this.buttonClassN = "button_class-yes";
     }
     else{
      this.buttonClassY = "button_class-yes";
      this.buttonClassN = "button_class-no";
     }

  };
  tenureTypeSelected(v: string) {
    this.tenureType = v;
    console.log("V",v);
    if(v=="freehold"){
      this.buttonClassF = "button_class-no";
      this.buttonClassL = "button_class-yes";
      this.buttonClassC = "button_class-yes";
      this.buttonClassA = "button_class-yes";
     }
     else if(v=="leasehold"){
      this.buttonClassF = "button_class-yes";
      this.buttonClassL = "button_class-no";
      this.buttonClassC = "button_class-yes";
      this.buttonClassA = "button_class-yes";
     }
     else if(v=="commonhold"){
      this.buttonClassF = "button_class-yes";
      this.buttonClassL = "button_class-yes";
      this.buttonClassC = "button_class-no";
      this.buttonClassA = "button_class-yes";
     }
     else if(v=="absolutetitle"){
      this.buttonClassF = "button_class-yes";
      this.buttonClassL = "button_class-yes";
      this.buttonClassC = "button_class-yes";
      this.buttonClassA = "button_class-no";
     }
  };

  properties: any = [
    { value: 'Property_1', viewValue: 'Property_1' },
    { value: 'Property_2', viewValue: 'Property_2' },
    { value: 'Property_3', viewValue: 'Property_3' }
  ];

  oldProperties: any = [
    { value: 2, viewValue: '2 years' },
    { value: 3, viewValue: '3 years' },
    { value: 4, viewValue: '4 years' }
  ];

  ngOnInit() {
    this.createForm();
    this.getPropertyDetails();
  }

  createForm() {
    let name_regex = "";
    let number_regex = "";
    this.formGroup = this.formBuilder.group({
      'PostCode': new FormControl(null, Validators.required),
      'Address': new FormControl(null, Validators.required),
      'propertyType': new FormControl(null, Validators.required),
      'NumberOfBedrooms': new FormControl(null, Validators.required),
      'propertyAge': new FormControl(null, Validators.required),
      'postCode': new FormControl(null, Validators.required),

    });

  }

  getPropertyDetails(){

    this.propertyService.getPropertyDetails(this.userId).subscribe((data)=>{
      console.log("data from property details",this.userId);
      //console.log("data from property details",data.propertyAge);
       

      this.postCode=data.postCode;
      this.address=data.propertyAddress;
      this.propertyType=data.propertyType; 
      this.noOfBedrooms=data.numberOfBedrooms; 
      this.propertyAge=data.propertyAge;

    });

  }

  
  onSelect() { }


  onSubmit() {
    let data = {
      propertyAddress: this.formGroup.value.Address,
      propertyType: this.formGroup.value.propertyType,
      numberOfBedrooms: this.formGroup.value.NumberOfBedrooms,
      propertyAge: this.formGroup.value.propertyAge,
      propertyBuilt: this.propertyBuilt,
      isPropertyCovered: this.isPropertyCovered,
      tenureType: this.tenureType,
      postCode: this.formGroup.value.postCode,
      userId:this.userId
    }

    console.log("Data", data);
    this.propertyService.propertyData(data).subscribe();
    //this.router.navigate(['/forms/content/(sidebar:valuation)']);
    this.router.navigateByUrl('/content/(sidebar:valuation)');
  }

// onSubmit(data: any) {
//   console.log("Data",data);
//  // this.propertyService.propertyData(data).subscribe();
//   this.router.navigateByUrl('/content/(sidebar:howToApply)');

// }


}


// var movies = localStorage.getItem("currentUser");
// movies     = JSON.parse(movies);
// console.dir(movies);

 
