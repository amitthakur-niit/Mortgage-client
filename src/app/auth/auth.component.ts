import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthclientService } from '../services/authclient.service';

@Component({
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    
  })
  export class AuthComponent implements OnInit{
    

    status:Boolean=false;
    constructor(private service: AuthclientService) { 
    //  this.check();
    }

   
  
    ngOnInit() {
      this.check();
    }
  
  check(){
    this.service.checkAccess().subscribe( value =>{
      this.status = value.valueOf();
      console.log("inside the auth compo:",this.status);
    })
  }
  
  //clear local storage in 10sec of inactivity
  /* setTimeout(() => {
     localStorage.clear();
  }, 2000); */
  
  
 
  }