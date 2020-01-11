import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  isLoggedIn:Boolean;
  constructor(private fb: FormBuilder, private authService: AuthclientService,
    private router: Router) {

  }

  ngOnInit() {
    this.logIn();
    //this.checkUserLoggedIn();
    this.setIsLoggedIn();
    //if current user  is false in session status false 
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

  checkUserLoggedIn() {
    this.authService.checkAccess();
    //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // localStorage.removeItem('currentUser');
  }

  onSubmit(data: any) {
 /*    this.authService.logInData(data).subscribe(val => {
      if (val) {
        let userStatus = {
          userId: val,
          email: data.email
        }
        localStorage.setItem("currentUser", JSON.stringify(userStatus));
        this.router.navigate(['/content/howToApply']);
      } else {
        alert("Wrong credentials");
      }
    }); */
    this.authService.loclStorageValue();
    this.router.navigate(['/forms/content/howToApply']);
  }



  //STEPS
//global vriable is loggedIn and get the status from the service
//call this method on ngOnInit
//

setIsLoggedIn(){
  this.authService.checkAccess().subscribe( value =>{
    this.isLoggedIn = value.valueOf();
    console.log("inside the login comp :",this.isLoggedIn);
  })
}
}
