import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.scss']
})
export class ResetPassowrdComponent implements OnInit {
  ResetPassWordForm: FormGroup;
  required: string = 'This field is required';
  email;
  pwd;
  message:any;
  constructor(private fb: FormBuilder, private registerService: AuthclientService ,
    private router: Router) {
      console.log("val rest pas");
      this.registerService.getMessage().subscribe(val=>{
        this.message =val.text;
        console.log("val rest passssssss",this.message);
      });
      console.log("iop ");
     }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    let name_regexg = "";
    let number_regex = "";
    this.ResetPassWordForm = this.fb.group({
     
     
      pwd: [null, [Validators.required, Validators.minLength(8)]],
      cnfPassword: [null, [Validators.required, Validators.minLength(8)]],
    });

   
  }
 
  onSubmit(data: any) {
     let userData = {
      email: this.message,
      pwd:this.ResetPassWordForm.value.pwd,

    }
    if(userData.pwd!=this.ResetPassWordForm.value.cnfPassword){
alert("Password did not match");
    }
    else{
    this.registerService.resetPass(userData).subscribe(val=>{

      this.router.navigate(['/auth/login']);

    });}
    
  }

}
