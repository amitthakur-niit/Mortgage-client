import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  required: string = 'This field is required';
  email;
  pwd;
  toggle:boolean = false;
  
    constructor(private fb: FormBuilder,
      private router: Router,private authService: AuthclientService) {
     
    }
  
    ngOnInit() {
      this.forgotPassword();
    }
  
    forgotPassword() {
      let name_regexg = "";
      let number_regex = "";
      this.forgetPasswordForm = this.fb.group({
       
        
        'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      });
  
    }

    onSubmit(data: any) {
     this.authService.forgotPaswd(data).subscribe(val=>{
       if(val===1)
       {
this.toggle = true;
       }
     });
      };

     public validateEmail(){
       alert();
     }

}
