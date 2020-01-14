import { Component, OnInit } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private service:AuthclientService) { }

  ngOnInit() {
    this.service.logout();
  }

}
