import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor( private service:AuthclientService) { }

  ngOnInit() {
    this.service.checkAccess();
  }



}
