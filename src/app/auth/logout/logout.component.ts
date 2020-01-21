import { Component, OnInit } from '@angular/core';
import { AuthclientService } from 'src/app/services/authclient.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private service:AuthclientService, private notifyService : NotificationService) { }

  ngOnInit() {
    this.notifyService.notify("User Logged Out");
    this.service.logout();
  }

}
