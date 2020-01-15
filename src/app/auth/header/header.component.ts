import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status:boolean=false;
  constructor(private service: AuthclientService) { 
  //  this.check();
  }

  ngOnInit() {
  
  }


}
