import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthclientService } from '../services/authclient.service';

@Component({
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    
  })
  export class AuthComponent implements OnInit, OnDestroy{
    ngOnDestroy(){
      this.service.logout();
      this.check();
    }

    status=1;
    constructor(private service: AuthclientService) { 
    //  this.check();
    }

   
  
    ngOnInit() {
      this.check();
    }
  
  check(){
   // this.status=this.service.checkAccess();
    console.log("status :", this.status);
  }
  
  //clear local storage in 10sec of inactivity
  /* setTimeout(() => {
     localStorage.clear();
  }, 2000); */
  
  
 
  }