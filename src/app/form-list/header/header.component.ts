import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';
import { LoginResponse } from 'src/app/Models/LoginResponse';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  userName:string='UserXOXO'
  constructor(private service: AuthclientService, private notify:NotificationService) { 
  //  this.check();
  }

  ngOnInit() {
    const userData = this.service.getLocalStorageValue('currentUser');
    console.log("Inside Header :",userData.firstName);
    this.userName = userData.firstName +" " +userData.lastName;
  }



logout(){
  this.service.logout();
  this.notify.notify("User Logged Out");
}

 ngOnDestroy(){
  this.service.logout();
} 

}
