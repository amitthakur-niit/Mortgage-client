import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.scss']
})
export class ResetPassowrdComponent implements OnInit {
  loginForm: FormGroup;
  required: string = 'This field is required';
  email;
  pwd;
  constructor(private fb: FormBuilder, private registerService: AuthclientService ,
    private router: Router) { }

  ngOnInit() {
    this.logIn();
  }

  logIn() {
    let name_regexg = "";
    let number_regex = "";
    this.loginForm = this.fb.group({
     
      
      'pwd': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'Confirmpwd': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
    });

  }
  // public onLoginClick(){
  //   //this.logInService.validateUserDetails(this.email,this.pwd);
  //   this.router.navigate(['/','how-to-apply']);
  // }

  onSubmit(data: any) {
    this.registerService.registerData(data).subscribe(val=>{
      console.log("val",val);
      if(val)
      { this.router.navigate(['/','how-to-apply']);
    }else{
      alert("Wrong credentials");
    }

    });
    
  }

}
