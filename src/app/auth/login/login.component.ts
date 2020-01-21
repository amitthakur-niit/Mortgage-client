import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LoginResponse } from 'src/app/Models/LoginResponse';


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
 

  constructor(private fb: FormBuilder, private authService: AuthclientService,
    private router: Router, private notifyService : NotificationService) {

  }

  ngOnInit() {
    this.logIn();
  }

  logIn() {
    let name_regexg = "";
    let number_regex = "";
    console.log("login :",this.loginForm);
    this.loginForm = this.fb.group({


      email:[null, [Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]],
      pwd: [null, [Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]],
    });

  }
  // public onLoginClick(){
  //   //this.logInService.validateUserDetails(this.email,this.pwd);
  //   this.router.navigate(['/','how-to-apply']);
  // }

  onSubmit(data: any) {

    let userStatus:LoginResponse;
    this.authService.logInData(data).subscribe(response => {
        userStatus = response;
        console.log("userStatus : "+ userStatus)  

        if(userStatus.message.includes('authenticated')){
          this.authService.setLocalStorage("currentUser", userStatus);
          this.router.navigateByUrl('/content/(sidebar:howToApply)');
          this.notifyService.notify('Login Successful')
    
         }

         if(userStatus.message.includes('Password incorrect!')){
           this.notifyService.alert('Password Incorrect!')
         }
         if(userStatus.message.includes(`Email id doesn't match!`)){
           this.notifyService.alert('Email Invalid !')
         }

     });

    

  }

}



