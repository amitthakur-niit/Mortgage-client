import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-apply',
  templateUrl: './how-to-apply.component.html',
  styleUrls: ['./how-to-apply.component.scss'],
 
})
export class HowToApplyComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    // this.formGroup = this.formBuilder.group({
    //   'Postcode': new FormControl(null, Validators.required),
    //   'Address': new FormControl(null, Validators.required),
    //   'propertyType': new FormControl(null, Validators.required),
    //   'NumberOfBedrooms': new FormControl(null, Validators.required),
    //   'propertyAge': new FormControl(null, Validators.required),
    // });

  }


  ngOnInit() {
  }

}
