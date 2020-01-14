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
  

  }

  public continueOnline(){
    //console.log("Route pending...to mortgage options page..");
    
    this.router.navigateByUrl('/content/(sidebar:mortgageOptions)');
  }



  ngOnInit() {
  }

}
