import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
required: string = 'This field is required';
email;
pwd;

  constructor(private fb: FormBuilder, private logInService: AuthclientService ,
    private router: Router) {
   
  }

  ngOnInit() {
    this.logIn();
  }

  logIn() {
    let name_regexg = "";
    let number_regex = "";
    this.loginForm = this.fb.group({
     
      
      'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'pwd': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
    });

  }
  // public onLoginClick(){
  //   //this.logInService.validateUserDetails(this.email,this.pwd);
  //   this.router.navigate(['/','how-to-apply']);
  // }

  onSubmit(data: any) {
    this.logInService.logInData(data).subscribe(val=>{
      console.log("val",val);
      if(val)
      { this.router.navigate(['/','how-to-apply']);
    }else{
      alert("Wrong credentials");
    }

    });
    
  }

  }

