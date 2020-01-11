import { Component, OnInit } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'form-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status:boolean=false;
  constructor(private service: AuthclientService) { 
  //  this.check();
  }

  ngOnInit() {
    this.setIsLoggedIn();
  }

/* check(){
  this.status=this.service.checkAccess();
  //console.log(this.status);
} */

setIsLoggedIn(){
  this.service.checkAccess().subscribe( value =>{
    this.status = value.valueOf();
    console.log("inside the header compo:",this.status);
  })
}
logout(){
  this.service.logout();
}

ngOnDestroy(){
  this.service.logout();
}

}
