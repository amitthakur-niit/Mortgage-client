import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { AuthclientService } from 'src/app/services/authclient.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  storedSuccess: boolean = false;
  formGroup: FormGroup;
  required: string = 'This field is required.';
  lengthError: string = 'Minimum 2 characters required.';
  datepicker: MatDatepicker<Date>;
  formErrors: any;
  maxDate: Date;
  minDate: Date;

  constructor(private formBuilder: FormBuilder, private registerService: AuthclientService, private router: Router, private toastr: ToastrService) {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      dateOfBirth: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cnfPassword: [null, [Validators.required]],
      forgetPasswordQ: [null, Validators.required],
      forgetPasswordA: [null, [Validators.required, Validators.minLength(2)]],
    });

  }

  ngOnInit() {
    let now: Date = new Date();
    this.maxDate = new Date((now.getFullYear() - 18), now.getMonth(), now.getDate());
    this.minDate = new Date((now.getFullYear() - 100), now.getMonth(), now.getDate());
  }

  questions: any[] = [
    { value: 'pet', viewValue: 'Name of your pet' },
    { value: 'school', viewValue: 'Name of your first school' },
    { value: 'novel', viewValue: 'Name of the first novel you read' }
  ];

  options: string[] = ['Single', 'Joint'];

  onSubmit(data: any) {


    if (data.password === data.cnfPassword) {
      this.registerService.registerData(data).subscribe(val => {
        if (val.userId != null) {

          let userStatus = {
            userId: val.userId,
            email: val.email
          }

          this.storedSuccess = true;
          localStorage.setItem("currentUser", JSON.stringify(userStatus));

          alert('Success');
          //this.toastr.success('Hello world!', 'Toastr fun!');
        }
      });

      this.router.navigate(['/auth/login']);

    }
    else {
      alert("passwords don't match!!!");
    }


  }
}
