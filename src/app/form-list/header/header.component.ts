import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  userName:string='UserXOXO'
  constructor(private service: AuthclientService) { 
  //  this.check();
  }

  ngOnInit() {
    
  }



logout(){
  this.service.logout();
}

 ngOnDestroy(){
  this.service.logout();
} 

}
