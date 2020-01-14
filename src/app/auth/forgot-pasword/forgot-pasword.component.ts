import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { RegisterService } from 'src/app/services/register.service';




@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
 
  forgetPasswordForm: FormGroup;
  forgetPasswordQForm:FormGroup;
  required: string = 'This field is required';
  email:string;
  email2:string;
  question:String;
  pwd;
  emailToggle=false;
  toggle:boolean = false;
  toggle2:boolean =false;
  
    constructor(private fb: FormBuilder,
      private router: Router,private registerService: RegisterService) {
     
    }
  
    ngOnInit() {
      this.forgotPassword();
    }
  
    forgotPassword() {
      let name_regexg = "";
      let number_regex = "";
      this.forgetPasswordForm = this.fb.group({
       
        
        'email': [null, [Validators.required, Validators.minLength(8), Validators.pattern(name_regexg)]],
      });

      this.forgetPasswordQForm = this.fb.group({
       
        'email2': new FormControl([this.email, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
        'question2': new FormControl([this.question, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
        'answer': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)])
      });


  
    }


    onSubmit(data: any) {
     this.registerService.forgotPaswd(data).subscribe(val=>{
      console.log("data",data);
       console.log("val",val);
       if(val.email!=null)
       {
         this.question=val.question;  
         this.email = val.email;
      
         this.toggle = true;
         this.toggle2= true;
         this.emailToggle=false;
       }
       else{
        this.emailToggle=true;
      }
     });
    // this.forgotPassword();
      };

      onSubmit2(data: any) {
        let userData = {
          email: this.email,
          question:this.question,
          answer:this.forgetPasswordQForm.value.answer
        }
        console.log("Data", userData);

        this.registerService.forgotPaswd2(userData).subscribe(val=>{
          console.log('val from service',val);
          if(val.email!=null)
          {
           // this.question=val.question;  
            this.email2 = val.email;
            this.sendMessage();
            //this.router.navigateByUrl('/content/(sidebar:valuation)');

            this.router.navigate(['/resetPassword']);
         //console.log('email2',this.email2);
           
          }
        });

         };
   

         sendMessage(): any {
           console.log('bjhdgfkdgfkdshfsdgfgk');
          // send message to subscribers via observable subject
          this.registerService.sendMessage(this.email2);
      }

     
}




