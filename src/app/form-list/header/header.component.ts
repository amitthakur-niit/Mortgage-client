import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  status:boolean=false;
  constructor(private service: AuthclientService) { 
  //  this.check();
  }

  ngOnInit() {
    this.check();
  }

check(){
  this.status=this.service.checkAccess();
  console.log(this.status);
}

logout(){
  this.service.logout();
}

 ngOnDestroy(){
  this.service.logout();
} 

}
